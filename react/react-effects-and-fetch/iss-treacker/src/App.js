import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      // const data = await response.json();
      // setCoords({
      //   longitude: data.longitude,
      //   latitude: data.latitude,
      // });
      const { latitude, longitude } = await response.json();
      setCoords({
        latitude,
        longitude,
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(getISSCoords, 5000);
    console.log("Set new timer");
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}

/* React Effects and Fetch: ISS Tracker

In this challenge we will build a small app which displays the current location of the international space station. We will also practice our useEffect skills.

Task

In the ./src/App.js file, we already have a state called coords in the App component which will hold the longitude and latitude values of the ISS position.

1. Write the function getISSCoords. Fetch from the given url saved in the constant URL. After fetching successfully update the coords state accordingly.

2. The refresh button already executes getISSCoords when pressed. Test if the function works as expected. (HINT: You can check if the position is displayed correctly by double checking on this website) http://open-notify.org/Open-Notify-API/.

3. With the help of useEffect set an interval (with setInterval) to update the ISS coords every 5 seconds. The interval should be installed only on the first render of the app. (HINT: Research setInterval on MDN if you don't know it)

4. The setInterval function returns an ID of the respective interval. You can clear the interval by calling clearInterval with this id. Inside the useEffect, return a cleanup function, which executes this clearInterval function with the correct ID.

💡 Returning a cleanup function is important to not set multiple timers simultaneously. If you wouldn't define a cleanup function, each initial render of the component would start another timer that would never be stopped. This results in updating the coordinates way more often than desired.

Go into the ./src/App.js file and start coding!

Notes
You only have to touch the ./src/App.js file. */

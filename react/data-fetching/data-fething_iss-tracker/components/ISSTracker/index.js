// import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

// const fetcher = (...args) => fetch(...args).then((response) => response.json());

const fetcher = async (url) => {
  const response = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }

  return response.json();
};

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  // console.log(data);

  if (isLoading) return <div>loading...</div>;

  if (error) {
    console.log(error);
    return (
      <>
        <div>{error.message}</div>
        <div>failed to load</div>
      </>
    );
  }

  function handleRefresh() {
    mutate();
  }

  const longitude = data?.longitude || 0;
  const latitude = data?.latitude || 0;

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={handleRefresh}
      />
    </main>
  );
}

// Old style: useEffect + fetch

/*   const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });
 */

/*  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

/*   useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

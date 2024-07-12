import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { name: "Living Room" },
    { name: "Kitchen" },
    { name: "Bedroom" },
    { name: "Bathroom" },
    { name: "Garage" },
    { name: "Garage" },
    { name: "Porch" },
    { name: "Garden" },
    { name: "Office" },
  ]);

  function handleToggleLight() {
    //setIsOn((isOn) => !isOn);
    console.log("hi from toggle");
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggleLight={handleToggleLight}
      />
    </Layout>
  );
}

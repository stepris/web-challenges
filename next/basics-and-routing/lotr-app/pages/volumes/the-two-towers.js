import { volumes } from "@/data";

export default function VolumeTwo() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <h1>{volume.title}</h1> <p>{volume.description}</p>
    </>
  );
}

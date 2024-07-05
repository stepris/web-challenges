import { volumes } from "@/data";

export default function VolumeThree() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <h1>{volume.title}</h1> <p>{volume.description}</p>
    </>
  );
}

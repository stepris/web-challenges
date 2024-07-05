import { volumes } from "@/data";

export default function VolumeOne() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <h1>{volume.title}</h1> <p>{volume.description}</p>
    </>
  );
}

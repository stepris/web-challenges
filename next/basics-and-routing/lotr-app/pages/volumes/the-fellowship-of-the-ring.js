import { volumes } from "@/data";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function VolumeOne() {
  return (
    <>
      <h1>{volume.title}</h1> <p>{volume.description}</p>
    </>
  );
}

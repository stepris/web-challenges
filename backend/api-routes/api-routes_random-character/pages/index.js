import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
    isValidating,
  } = useSWR("/api/random-character", fetcher);

  if (!character) return;

  const { firstName, lastName, twitterName, geoHash } = character;

  if (error) return <div>failed to load</div>;

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Hello from Next.js!</h1>
      <h2>Here is your random character:</h2>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Twitter handle: {twitterName}</li>
        <li>Geohash {geoHash}</li>
      </ul>
    </>
  );
}

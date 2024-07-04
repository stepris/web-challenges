import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function onClickHandler() {
    const slugsFromVolumes = volumes.map(({ slug }) => slug);
    // console.log(slugsFromVolumes);
    router.push("volumes/" + getRandomElement(slugsFromVolumes));
  }

  return (
    <div>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={onClickHandler}>Go to random volume</button>
    </div>
  );
}

/*       <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li> */

/* Next.js Dynamic Routes: Lord of the Rings App Dynamic Routes

----------------------------------------------------

Currently, the overview about the Lord of the Rings volumes is done with static routing. You are going to refactor the code with dynamic routes as well as links. Finally, you will create a button to navigate to a random volume.

Task

*****************************************************

***Refactor: Dynamic Routes***
----------------------------------------------------

Refactor the static routes of the volume detail pages so that they use dynamic routes instead.

You can use the following hints as guideline:

- Create a [slug].js file in the volumes folder. This file will eventually replace the static volume detail pages.

- Inside of [slug].js recreate the VolumeDetail component which returns the same elements as the static version of the component. Adjust the code so that the content is now based around the slug from the router.query object.


***Refactor: Link to the Dynamic Routes***
------------------------------------------------------

Refactor the volumes overview and create the links dynamically from the volumes array.

***Random Volume***
------------------------------------------------------

On the volume overview page, create a button to navigate to a random volume.

This function will help you to get a random element from an array:

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

💡 You will need to use router.push() in the event handler function.
 */

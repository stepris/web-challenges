# Title

List of current movies

## Value Proposition

As a `movie enthusiast` <br>

I want to `browse a list of current movies with their ratings` <br>

so that `I can quickly decide which movies I might want to watch.` <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

## Acceptance Criteria

- The home screen displays a grid of current movies, each with a title and rating

- If the data cannot be retrieved, an error message is displayed

- Each movie item includes: A movie poster, a title and a rating

## Tasks

- [ ] Create a new branch for development.
- [ ] Develop an API endpoint to fetch all movies.
- [ ] Fetch movie data from the resource API.
- [ ] Develop a List component to display movies.
- [ ] In the List component, create an item for each movie fetched with the following details:
  - [ ] "Thumbnail"
  - [ ] "Title"
  - [ ] "Rating"
- [ ] Develop a Rating component to display the movie's rating.
- [ ] Render the Rating component above the "Thumbnail" of each movie in the top right corner.

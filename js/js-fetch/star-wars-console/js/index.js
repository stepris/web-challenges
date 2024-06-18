console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);

  const newResponse = await response.json();

  console.log(response);
  console.log(newResponse);

  console.dir(newResponse);
}

fetchData();

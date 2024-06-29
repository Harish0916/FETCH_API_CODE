const fetchPromise = fetch(
  "https://randomuser.me/api",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
  });
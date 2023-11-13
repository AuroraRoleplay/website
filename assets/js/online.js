const url = 'https://209.145.56.181:30120/players.json';

// Make a GET request to the URL
fetch(url)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse the JSON in the response
    return response.json();
  })
  .then(data => {
    // Access the player count from the JSON data
    const playerCount = data.length; // Assuming the player count is the length of the array
    console.log('Player count:', playerCount);
    document.getElementById('online').innerHTML = playerCount;
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

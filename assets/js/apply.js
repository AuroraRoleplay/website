const form = document.getElementById('ballsform');
const alertElement = document.getElementById('alert');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  try {
    const response = await fetch('https://api.almix.net/v1/aurora', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.status === 200) {
      // If the external backend returns a 200 status code, display the success message
      location.href="/apply/submit.html";
    } else if (response.status === 429) {
      // Handle other status codes if needed
      alertElement.textContent = 'You have already applied, Please contact an Admin if you feel this is incorrect.';
    } else {
      // Handle other status codes if needed
      alertElement.textContent = 'Request failed';
    }
  } catch (error) {
    console.error(error);
    alertElement.textContent = 'Error occurred.';
  }
});
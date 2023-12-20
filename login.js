const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const signInForm = document.querySelector('.sign-in-container form');
const signUpForm = document.querySelector('.sign-up-container form');

function authenticateUser(username, password) {

  return fetch('/api/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.json());
}

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const usernameInput = signInForm.querySelector('input[type="email"]');
  const passwordInput = signInForm.querySelector('input[type="password"]');
  const errorMessage = signInForm.querySelector('.error-message');

  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const response = await authenticateUser(username, password);

    if (response.success) {

      errorMessage.textContent = ""; 
      alert("Authentication successful. Redirect to the dashboard.");

    } else {

      errorMessage.textContent = response.message || "Authentication failed";
    }
  } catch (error) {
    console.error(error);
    errorMessage.textContent = "An error occurred while signing in.";
  }
});


signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = signUpForm.querySelector('input[placeholder="Name"]');
  const usernameInput = signUpForm.querySelector('input[type="email"]');
  const passwordInput = signUpForm.querySelector('input[type="password"]');
  const errorMessage = signUpForm.querySelector('.error-message');

  const name = nameInput.value;
  const username = usernameInput.value;
  const password = passwordInput.value;

  try {
    const response = await signUpUser(name, username, password);

    if (response.success) {

      errorMessage.textContent = ""; 
      alert("Sign-up successful. Redirect to the dashboard or login page.");

    } else {

      errorMessage.textContent = response.message || "Sign-up failed";
    }
  } catch (error) {
    console.error(error);
    errorMessage.textContent = "An error occurred while signing up.";
  }
});


async function signUpUser(name, username, password) {

  return fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, username, password }),
  })
  .then(response => response.json());
}

const { ipcRenderer } = require('electron');

document.getElementById('loginForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  if (username === '') {
    errorMessage.textContent = 'Username is required.';
    return;
  }
  if (password === '') {
    errorMessage.textContent = 'Password is required.';
    return;
  }

  errorMessage.textContent = '';
  if (document.getElementById('rememberMe').checked) {
    localStorage.setItem('rememberedUser', username);
  } else {
    localStorage.removeItem('rememberedUser');
  }
  localStorage.setItem('username', username);
  ipcRenderer.send('login-success');
});

document.getElementById('registerButton').addEventListener('click', () => {
  ipcRenderer.send('open-register');
});

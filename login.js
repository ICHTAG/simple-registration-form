function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const msg = document.getElementById('msg');

  const savedEmail = localStorage.getItem('email');
  const savedPassword = localStorage.getItem('password');

  if (!email || !password) {
    msg.innerHTML = '❌ Please fill both fields!';
    msg.className = 'message error';
    msg.style.display = 'block';
    return;
  }

  if (email === savedEmail && password === savedPassword) {
    msg.innerHTML = '✅ Login successful! Redirecting...';
    msg.className = 'message success';
    msg.style.display = 'block';
    localStorage.setItem('loggedIn', 'true');
    setTimeout(() => { window.location.href = 'welcome.html'; }, 1500);
  } else {
    msg.innerHTML = '❌ Incorrect email or password!';
    msg.className = 'message error';
    msg.style.display = 'block';
  }
}
function register() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;
  const phone = document.getElementById('phone').value.trim();
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value.trim();
  const country = document.getElementById('country').value.trim();
  const zipcode = document.getElementById('zipcode').value.trim();
  const hobbies = document.getElementById('hobbies').value.trim();
  const photoInput = document.getElementById('photo');
  const msg = document.getElementById('msg');

  if (!name || !email || !password || !confirm || !phone || !dob || !gender || !address || !city || !country || !zipcode || !hobbies || !photoInput.files[0]) {
    msg.innerHTML = '❌ You have to fill all the fields first!';
    msg.className = 'message error';
    msg.style.display = 'block';
    return;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (!passwordPattern.test(password)) {
    msg.innerHTML = '❌ Password must include uppercase, lowercase, number, and special character!';
    msg.className = 'message error';
    msg.style.display = 'block';
    return;
  }

  if (password !== confirm) {
    msg.innerHTML = '❌ Passwords do not match!';
    msg.className = 'message error';
    msg.style.display = 'block';
    return;
  }

  const reader = new FileReader();
  reader.onload = function() {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);
    localStorage.setItem('dob', dob);
    localStorage.setItem('gender', gender);
    localStorage.setItem('address', address);
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
    localStorage.setItem('zipcode', zipcode);
    localStorage.setItem('hobbies', hobbies);
    localStorage.setItem('photo', reader.result);

    msg.innerHTML = '✅ Registered Successfully! Redirecting...';
    msg.className = 'message success';
    msg.style.display = 'block';

    setTimeout(() => window.location.href='login.html', 2000);
  };
  reader.readAsDataURL(photoInput.files[0]);
}
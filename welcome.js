if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}

document.getElementById('userName').textContent = localStorage.getItem('name');
document.getElementById('userEmail').textContent = localStorage.getItem('email');
document.getElementById('userPhone').textContent = localStorage.getItem('phone');
document.getElementById('userDOB').textContent = localStorage.getItem('dob');
document.getElementById('userGender').textContent = localStorage.getItem('gender');
document.getElementById('userAddress').textContent = localStorage.getItem('address');
document.getElementById('userCityCountryZip').textContent = `${localStorage.getItem('city')}, ${localStorage.getItem('country')}, ${localStorage.getItem('zipcode')}`;
document.getElementById('userHobbies').textContent = localStorage.getItem('hobbies');

const photo = localStorage.getItem('photo');
if (photo) { document.getElementById('profilePic').src = photo; }
else { document.getElementById('profilePic').style.display = 'none'; }

// Animate welcome text
const welcomeText = 'Welcome, ' + localStorage.getItem('name') + '!';
const welcomeEl = document.getElementById('welcomeText');
welcomeText.split('').forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char;
  span.style.animationDelay = `${i*0.05}s`;
  span.className = 'letter';
  welcomeEl.appendChild(span);
});

function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
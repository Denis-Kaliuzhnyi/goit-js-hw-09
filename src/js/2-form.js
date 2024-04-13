const form = document.querySelector('.feedback-form');
const emailWindow = form.querySelector('input[name="email"]');
const messageWindow = form.querySelector('textarea[name="message"]');

const forFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (forFormData) {
    emailWindow.value = forFormData.email || '';
    messageWindow.value = forFormData.message || '';
}

form.addEventListener('input', function () {
  const formWindow = {
    email: emailWindow.value.trim(),
    message: messageWindow.value.trim()
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formWindow));
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const email = emailWindow.value.trim();
  const message = messageWindow.value.trim();
  
  if (email && message) {
    console.log({ email, message });
    form.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert('Please enter your email or message');
  }
});



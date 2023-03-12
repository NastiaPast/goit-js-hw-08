import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = formEl.querySelector('input');
const messageInputEl = formEl.querySelector('textarea');

const savedData = localStorage.getItem(LOCAL_KEY);
if (savedData) {
  const { email, message } = JSON.parse(savedData);
  emailInputEl.value = email;
  messageInputEl.value = message;
}

const handleFormSubmit = event => {
  event.preventDefault();
  const email = emailInputEl.value;
  const message = messageInputEl.value;
  if (!email || !message) {
    alert('Введи всі дані!');
    return;
  }
  const data = {
    email,
    message,
  };
  console.log(data);
  event.target.reset();
  localStorage.removeItem(LOCAL_KEY);
};

const handleFormInput = () => {
  const dataToSave = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };
  localStorage.setItem(LOCAL_KEY, JSON.stringify(dataToSave));
};

formEl.addEventListener('input', throttle(handleFormInput, 500));
formEl.addEventListener('submit', handleFormSubmit);

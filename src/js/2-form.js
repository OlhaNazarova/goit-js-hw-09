const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

email.value = formData.email ?? '';
textarea.value = formData.message ?? '';

form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value.trim();
  const strFormData = JSON.stringify(formData);

  localStorage.setItem(localStorageKey, strFormData);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(formData);
  const isEmailFilled = formData.email && formData.email !== '';
  const isMessageFilled = formData.message && formData.message !== '';

  if (isEmailFilled && isMessageFilled) {
    localStorage.removeItem(localStorageKey);
    form.reset();
    delete formData.email;
    delete formData.message;
  } else {
    if (!isEmailFilled) console.log('Email field cannot be empty!');
    if (!isMessageFilled) console.log('Message field cannot be empty!');
  }
});

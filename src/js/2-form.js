const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

/////////////////////////////////////////////////
// 🔹 Завантаження даних зі сховища

const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData = parsedData;

  form.elements.email.value = parsedData.email || '';
  form.elements.message.value = parsedData.message || '';
}

/////////////////////////////////////////////////
// 🔹 Відстеження input (делегування)

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

/////////////////////////////////////////////////
// 🔹 Submit

form.addEventListener('submit', event => {
  event.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // очистка
  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = {
    email: '',
    message: '',
  };
});

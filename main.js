function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailValue = emailInput.value;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue.match(emailPattern)) {
    emailInput.classList.add('invalid');
    emailError.style.display = 'inline';
    return false;
  } else {
    emailInput.classList.remove('invalid');
    emailError.style.display = 'none';
    return true;
  }
}

document.getElementById("button").addEventListener("click", function(event) {
  // Проверяем email при клике
  if (validateEmail()) {
    const email = document.getElementById('email').value;
    
    // Заменяем placeholder email на введенный пользователем
    const confirmationText = document.querySelector('.success .description');
    confirmationText.innerHTML = confirmationText.innerHTML.replace(
      "ash@loremcompany.com", 
      email
    );
    
    // Скрываем основную форму
    document.querySelector('.main').style.display = 'none';
    
    // Показываем success article
    document.getElementById('success').style.display = 'block';
  } else {
    console.log("Invalid email");
  }
});

document.getElementById("button_success").addEventListener("click", function() {
  // Скрываем success article
  document.getElementById('success').style.display = 'none';
  
  // Показываем основную форму
  document.querySelector('.main').style.display = 'flex';
  
  // Очищаем поле ввода email
  document.getElementById('email').value = '';
});
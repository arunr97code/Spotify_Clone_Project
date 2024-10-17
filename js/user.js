// signup form input email
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('.styled-button').addEventListener('click', (event) =>{
    const emailInput = document.getElementById('email');
    const errorMessage = document.querySelector('.error-message');
    const firstLink = document.getElementById('first-link');

    //validation
    if(emailInput.validity.typeMismatch || emailInput.value.trim() === ''){
        event.preventDefault();
        errorMessage.style.display = 'flex';

    }else{
        errorMessage.style.display = 'none';
        firstLink.href = 'step1.html';
    }
});
});
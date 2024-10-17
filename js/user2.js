//name details
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('.styled-button3').addEventListener('click', (event) =>{
        const enterName = document.getElementById('name');
        const errorMessage = document.querySelector('.error-message');
        const thirdLink = document.getElementById('third-link');
        console.log('Button clicked, input value:', enterName.value);
        if(enterName.value === ''){
            event.preventDefault();
            console.log('Empty input, showing error message');
            errorMessage.style.display = 'flex';
            enterName.style.borderColor = "red";
        }else{
            console.log('Input is valid, hiding error message');
            errorMessage.style.display = 'none';
            thirdLink.href = 'step3.html';
        }
    });
});
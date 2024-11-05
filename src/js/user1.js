
//password field  
document.addEventListener('DOMContentLoaded', () =>{
    const passwordInput = document.getElementById('password');
    const letterTick = document.querySelector('.pass-inner:nth-child(1) .fa-check');
    const numberOrSpecialCharTick = document.querySelector('.pass-inner:nth-child(2) .fa-check');
    const validLengthTick = document.querySelector('.pass-inner:nth-child(3) .fa-check');
    const para1 = document.querySelector('.pass-inner:nth-child(1) p');
    const para2 = document.querySelector('.pass-inner:nth-child(2) p');
    const para3 = document.querySelector('.pass-inner:nth-child(3) p');
    const secondLink = document.getElementById('second-link');
    
    //function validate password and update tick
    const validatePassword = () =>{
        const passwordValue = passwordInput.value;
        //validation rules
        const hasLetters = /[a-zA-Z]/.test(passwordValue);
        const hasNumberOrSpecialChar = /[0-9!@#$%^&*()_+=./]/.test(passwordValue);
        const isValidLength = passwordValue.length === 10;
        
        //update greentick based on validation
        //reset greentick
        letterTick.style.display = hasLetters ? 'block' : 'none';
        numberOrSpecialCharTick.style.display = hasNumberOrSpecialChar ? 'block' : 'none';
        validLengthTick.style.display =isValidLength ? 'block' : 'none';
       
    }; 
    //
    passwordInput.addEventListener('input', validatePassword);
    
    //form submission if fails
    document.querySelector('.styled-button2').addEventListener('click', (event) =>{
        validatePassword();

        const passwordValue = passwordInput.value;

        const hasLetters = /[a-zA-Z]/.test(passwordValue);
        const hasNumberOrSpecialChar = /[0-9!@#$%^&*()_+=./]/.test(passwordValue);
        const isValidLength = passwordValue.length === 10;
        //debugging
        console.log(`password: ${passwordValue}`);
        console.log(`hasLetters: ${hasLetters}`);
        console.log(`hasNumberOrSpecialChar: ${hasNumberOrSpecialChar}`);
        console.log(`isValidLength: ${isValidLength}`);
        //
        //assign
        

        if(!hasLetters || !hasNumberOrSpecialChar || !isValidLength){
            event.preventDefault();
            passwordInput.classList.add('invalid-border');
            para1.style.color = 'tomato';
            para2.style.color = 'tomato';
            para3.style.color = 'tomato';
            passwordInput.classList.remove('valid');
            passwordInput.style.border = 'none';
            console.log('Invalid Password - Class Added:', passwordInput.classList.contains('invalid-border'));
        }else{
            passwordInput.classList.add('valid');
            passwordInput.classList.remove('invalid-border');
            
            secondLink.href = 'step2.html';
            console.log('Valid Password - Class Removed:', !passwordInput.classList.contains('invalid-border'));

        }
    });
});
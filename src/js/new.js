function rangeUpdate(range){
    const value = (range.value - range.min) / (range.max - range.min) *100;
    range.style.background = `linear-gradient(to right, green ${value}%, aliceblue ${value}% )`;
}

const mainHead = document.querySelector('.main-head');
        const main = document.querySelector('main');

        main.addEventListener('scroll', () => {
            if (main.scrollTop > 40) {
                mainHead.style.backgroundColor = 'var(--background-grey)';
            } else {
                mainHead.style.backgroundColor = 'transparent';
            }
        });

        const currentYear = new Date().getFullYear();

        document.getElementById('copyright').innerHTML = `&#169; ${currentYear} Spotify AB`;
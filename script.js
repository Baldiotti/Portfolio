onload = () => {
    document.querySelector('.btn-switch-theme').onclick = () => switchTheme();
    typeWriter(document.querySelector('.txt-home-nome'));
};


let Lg = document.querySelector('.lgTheme');
let Dk = document.querySelector('.dkTheme');
const fadeOut = `
visibility: hidden;
opacity: 0;`
const fadeIn = `
visibility: visible;
opacity: 1;`

let cont = 0;
const switchTheme = () => {
    if(cont%2 == 0) {
        Lg.style.cssText = fadeOut
        setTimeout(function() {
            Dk.style.cssText = fadeIn
        }, 500);
    } else {
        Dk.style.cssText = fadeOut
        setTimeout(function() {
            Lg.style.cssText = fadeIn
        }, 500);
    }
    cont++;
}


const typeWriter = (elemento) => {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}
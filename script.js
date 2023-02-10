onload = () => {
    typeWriter(document.querySelector('.txt-home-nome'));
};


document.querySelector('.btn-switch-theme').onclick = () => switchTheme();
document.querySelector('.navHome').onclick = () => centraliza('.home')
document.querySelector('.navSobre').onclick = () => centraliza('.sobre')
document.querySelector('.navProjetos').onclick = () => centraliza('.projetos')
document.querySelector('.navContato').onclick = () => centraliza('.contato')
document.querySelector('.sobre-btn-email').onclick = () => copiaTexto();
document.querySelector('.themeSwitch').onclick = () => {document.body.classList.toggle('dark')}





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

const centraliza = (e) => {
    let sup = document.querySelector(`${e}`);
    if(e == '.projetos' || e == '.contato')
        sup.scrollIntoView({behavior: "smooth", block: "start"});
    else
        sup.scrollIntoView({behavior: "smooth", block: "center"});
}



const copiaTexto = () => {
    let textoCopiado = "augustobaldiotti@hotmail.com"
    navigator.clipboard.writeText(textoCopiado);
    alert("O email foi copiado!!");
}



const matchDark = matchMedia('(prefers-color-scheme: dark)');
if(matchDark.matches) {
    cont++;
    document.body.classList.toggle('dark');
    Lg.style.cssText = fadeOut;
    Dk.style.cssText = fadeIn;
}
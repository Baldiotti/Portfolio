onload = () => {
    typeWriter(document.querySelector(".txt-home-nome"));
};

const observer = new IntersectionObserver((e) => {
    e.forEach((entrada) => {
        if (entrada.isIntersecting) {
            setTimeout(() => {
                entrada.target.classList.add("show");
            }, 300);
        }
    });
});

const hiddenLinguage = document.querySelector(".hiddenLinguagens");
observer.observe(hiddenLinguage);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenLeftElements = document.querySelectorAll(".hiddenLeft");
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll(".hiddenRight");
hiddenRightElements.forEach((el) => observer.observe(el));

document
    .querySelector(".btn-switch-theme")
    .addEventListener("click", switchTheme);
document
    .querySelector(".sobre-btn-email")
    .addEventListener("click", copiaTexto);
document.querySelector(".themeSwitch").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
document.querySelectorAll(".navItem").forEach((nItem) => {
    nItem.addEventListener("click", () => centraliza(nItem.id));
});

const Lg = document.querySelector(".lgTheme");
const Dk = document.querySelector(".dkTheme");
const fadeOut = `
visibility: hidden;
opacity: 0;`;
const fadeIn = `
visibility: visible;
opacity: 1;`;

let cont = 0;
function switchTheme() {
    if (cont % 2 == 0) {
        Lg.style.cssText = fadeOut;
        setTimeout(function () {
            Dk.style.cssText = fadeIn;
        }, 500);
    } else {
        Dk.style.cssText = fadeOut;
        setTimeout(function () {
            Lg.style.cssText = fadeIn;
        }, 500);
    }
    cont++;
}

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(() => (elemento.innerHTML += letra), 100 * i);
    });
}

function centraliza(e) {
    const sup = document.querySelector(`.${e}`);
    const block = e == "projetos" || e == "contato" ? "start" : "center";
    sup.scrollIntoView({ behavior: "smooth", block });
}

function copiaTexto() {
    const textoCopiado = "augustobaldiotti@hotmail.com";
    navigator.clipboard.writeText(textoCopiado);
    showAlerta("Email Copiado!!");
}

const matchDark = matchMedia("(prefers-color-scheme: dark)");
if (matchDark.matches) {
    cont++;
    document.body.classList.toggle("dark");
    Lg.style.cssText = fadeOut;
    Dk.style.cssText = fadeIn;
}

function showAlerta(info) {
    document.querySelector(".alertaBox").innerText = info;
    document.querySelector(".alerta").classList.add("alertaShow");
    setTimeout(() => {
        document.querySelector(".alerta").classList.remove("alertaShow");
    }, 6000);
}

document
    .querySelector(".cont-formulario")
    .addEventListener("submit", function (event) {
        submitFormEvent(event);
    });

function submitFormEvent(event) {
    event.preventDefault();
    event.target.disabled = true;
    let nome = document.getElementById("name");
    let emailm = document.getElementById("email");
    let mensagem = document.getElementById("message");
    if (
        !(nome.value == "") &&
        !(emailm.value == "") &&
        !(mensagem.value == "")
    ) {
        fetch("https://formsubmit.co/ajax/augustobaldiotti@hotmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: nome.value,
                email: emailm.value,
                message: mensagem.value,
            }),
        });
        let button = document.querySelector(".cont-btn");
        button.innerHTML = "<b>Enviando...</b>";
        button.classList.add("cont-btn-enviando");
        setTimeout(() => {
            nome.value = "";
            emailm.value = "";
            mensagem.value = "";
            button.innerHTML = "<b>Enviar</b>";
            button.classList.remove("cont-btn-enviando");
            showAlerta("Formulário Enviado!!");
        }, 5000);
    }
}

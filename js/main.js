/*=========================================
WHATSAPP AUTOMÁTICO
=========================================*/

function enviarWhatsapp(){

let nome=document.getElementById("nome").value;

let telefone=document.getElementById("telefone").value;

let email=document.getElementById("email").value;

let servico=document.getElementById("servico").value;

let mensagem=document.getElementById("mensagem").value;

/* ALTERE PELO NÚMERO OFICIAL DA EMPRESA */
let numero="5511999999999";

let texto=
`Olá, World Multimídias!

Gostaria de solicitar um orçamento.

Nome: ${nome}

WhatsApp: ${telefone}

E-mail: ${email}

Serviço: ${servico}

Descrição:

${mensagem}`;

let url=`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

gtag('event','click_whatsapp',{

event_category:'Contato',

event_label:'Botão WhatsApp'

});

window.open(url,"_blank");

gtag('event','generate_lead',{

currency:'BRL',

value:1

});

}

/*==================================================
WORLD MULTIMÍDIAS
main.js
==================================================*/


/*=========================================
LOADER
=========================================*/

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

setTimeout(()=>{

loader.style.display="none";

},700);

});


/*=========================================
HEADER
=========================================*/

const header=document.getElementById("header");

if(header)

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.92)";

header.style.boxShadow="0 5px 25px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.40)";

header.style.boxShadow="none";

}

});


/*=========================================
BOTÃO TOPO
=========================================*/

const topo=document.getElementById("topo");

if(topo)

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topo.style.opacity="1";

topo.style.visibility="visible";

}else{

topo.style.opacity="0";

topo.style.visibility="hidden";

}

});

topo.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*=========================================
MENU MOBILE
=========================================*/

const menu=document.querySelector("nav");

const botao=document.querySelector(".menu-mobile");

if(menu && botao)

botao.addEventListener("click",()=>{

menu.classList.toggle("ativo");

});


/*=========================================
FECHAR MENU AO CLICAR
=========================================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

menu.classList.remove("ativo");

});

});


/*=========================================
SCROLL SUAVE
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

const destino=document.querySelector(this.getAttribute("href"));

if(destino){

destino.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*=========================================
ANIMAÇÃO AO ROLAR
=========================================*/

const elementos=document.querySelectorAll(

".card,.servico-card,.foto,.vantagem,.numero,.depoimento,.info-card"

);

const observar=new IntersectionObserver((itens)=>{

itens.forEach(item=>{

if(item.isIntersecting){

item.target.classList.add("apareceu");

}

});

},

{

threshold:.20

}

);

elementos.forEach(el=>{

observar.observe(el);

});


/*=========================================
CONTADORES
=========================================*/

const numeros=document.querySelectorAll(".numero h2");

let iniciou=false;

function animarNumeros(){

if(iniciou) return;

iniciou=true;

numeros.forEach(numero=>{

let texto=numero.innerText;

let alvo=parseInt(texto.replace(/\D/g,""));

let atual=0;

let incremento=Math.max(1,Math.ceil(alvo/120));

function atualizar(){

atual+=incremento;

if(atual<alvo){

numero.innerText=texto.includes("%")

? atual+"%"

: "+"+atual;

requestAnimationFrame(atualizar);

}else{

numero.innerText=texto;

}

}

atualizar();

});

}

const contador=document.querySelector(".contador");

if(contador){

const observer=new IntersectionObserver((e)=>{

if(e[0].isIntersecting){

animarNumeros();

}

});

observer.observe(contador);

}


/*=========================================
PARALLAX
=========================================*/

window.addEventListener("scroll",()=>{

const hero=document.getElementById("inicio");

hero.style.backgroundPositionY=(window.scrollY*0.4)+"px";

});


/*=========================================
ANO AUTOMÁTICO
=========================================*/

const ano=document.getElementById("ano");

if(ano){

ano.textContent=new Date().getFullYear();

}

/*=========================================
COOKIE LGPD
=========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const banner = document.getElementById("cookie-banner");

    if(!banner) return;

    const cookies = localStorage.getItem("cookies");

    if(!cookies){

        banner.style.display = "block";

    }

    const aceitar = document.getElementById("aceitarCookies");

    if(aceitar){

        aceitar.addEventListener("click",()=>{

            if(typeof gtag === "function"){

                gtag('consent','update',{

                    'ad_storage':'granted',

                    'analytics_storage':'granted',

                    'ad_user_data':'granted',

                    'ad_personalization':'granted'

                });

            }

            localStorage.setItem("cookies","aceito");

            banner.style.display="none";

        });

    }

    const recusar = document.getElementById("recusarCookies");

    if(recusar){

        recusar.addEventListener("click",()=>{

            localStorage.setItem("cookies","recusado");

            banner.style.display="none";

        });

    }

});

/*=========================================
SLIDES
=========================================*/

let slideIndex = 1;
mostrarSlide(slideIndex);

function mudarSlide(n){
    mostrarSlide(slideIndex += n);
}

function mostrarSlide(n){

    let slides = document.getElementsByClassName("slides");

    if(n > slides.length){
        slideIndex = 1;
    }

    if(n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}

// Slide automático
setInterval(function(){
    mudarSlide(1);
},4000);
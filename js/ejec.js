
let ajusteTexto = document.querySelector('.textArea');

ajusteTexto.addEventListener('keydown', ajustar);
function ajustar(){
let elm = this;
setTimeout(function(){
    if(elm.scrollHeight <600){
    elm.style.cssText = 'height:auto';
    elm.style.cssText = 'height:' + elm.scrollHeight + 'px';
    }else elm.style.cssText = 'height: 600px';
},0);
}


let btn = document.querySelector('#encriptar');
btn.onclick = btnEncriptar;

let btn2 = document.querySelector('#desencriptar');
btn2.onclick = btnDesencriptar;

let btn3 = document.querySelector('#copiar');
btn3.onclick = btcCopiar;


const buttonSwitch = document.querySelector('#switch');

buttonSwitch.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    

    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true')
    }else{localStorage.setItem('dark-mode', 'false')}
});

if(localStorage.getItem('dark-mode')=== 'true'){
    document.body.classList.add('dark');
}else{document.body.classList.remove('dark');}



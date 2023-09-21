

const myObserver = new IntersectionObserver((abacate) => {
    abacate.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show')
        }
    })
})
const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => myObserver.observe(element));




const myObservermap = new IntersectionObserver((teste) => {
    teste.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('showT');
        } else{
            entry.target.classList.remove('showT')
        }
    })
})
const elementsT = document.querySelectorAll(".map");

elementsT.forEach((element) => myObservermap.observe(element));


const servicos = document.querySelectorAll('#serviços img');
const imagens = document.querySelectorAll('#serviços .servi');

let idx = 0;
 function corrocel(){
    idx++;
    if(idx > imagens.length - 1){
        idx = 0;
    imagens.style.transform  =  `translateX(${-idx * 230}px)`}
    
 }
 setInterval(corrocel, 1800);
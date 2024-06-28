// variables
let vidas = 3
let numeroAleatorio = Math.floor(Math.random()  * 11);

// selectors
 document.querySelector('.contador__vida').textContent = `vidas : ${vidas}`
 document.querySelector('.play > button').addEventListener("click" , play)
 const incognito =document.querySelector('.incognito')
 const descripcion = document.querySelector(".descripcion")
 const numeros = document.querySelectorAll('.numeros > button')

// functions
console.log(numeroAleatorio);
function play() { // iniciar juego y restablecer valores 
    vidas = 3
    numeroAleatorio = Math.floor(Math.random()  * 11)
    console.log(numeroAleatorio);
    incognito.style.backgroundColor= 'grey'
    incognito.style.filter= "blur(3px)"
     document.querySelector('.contador__vida').textContent = `vidas : ${vidas}`
     incognito.innerText = " ? "
       descripcion.innerText = "adivina el numero"
       document.querySelector('.play').style.visibility="hidden"
       descripcion.style.backgroundColor="white"
       document.querySelector(".tabla__numero").style.visibility='visible'
    // borrar el numero mostrado en pantalla
    // mostrar la tabla de numeros
}
numeros.forEach( (numero) => { //recorremos los botones y buscamos su valor y lo comparamos con el numero aleatorio
    numero.addEventListener("click", (validarNumero)=>{
        let valorNumero = validarNumero.target.innerText
        console.log(valorNumero);
       if(vidas <= 0){ // aqui hacemos un control de vidas para saber si el jugador ya perdio
        vidas++ 
        descripcion.innerText="Perdiste :("
        document.querySelector(".play").style.visibility= "visible"
        document.querySelector(".tabla__numero").style.visibility='hidden'
       }
        if(numeroAleatorio != valorNumero){ //si no acertas que reste las vidas
           document.querySelector('.contador__vida').textContent = `vidas :${--vidas}`
        }else{
            console.log("acertaste!");
            incognito.style.backgroundColor= 'green'
            incognito.style.filter= "blur(0px)"
            incognito.innerText = numeroAleatorio
            descripcion.innerText = "!Lo Lograste!"
            document.querySelector(".play").style.visibility= "visible"
            
        }

    })
})

//Ejercicios DOM:
//1- Saludo:
//Hacer un programa que al inciarse pida mediante un prompt ingresar un nombre y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografia distinta de la que viene por defecto.
//usando querySelector.

// const userName = prompt("Ingrese su nombre completo:")

// const fullNameUser = document.querySelector(".username")

// fullNameUser.innerText = userName

// fullNameUser.style.fontSize = "30px"
// fullNameUser.style.fontFamily = "Franklin Gothic Medium"
// fullNameUser.style.textAlign = "center"

//2- Color:
//Hacer un programa que al inciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga un color de fondo del body con dicho color.

//const bodyColor = prompt("Ingrese un color en sistema hexadecimal:")

//const colorFullBody = document.querySelector(".colorBkgr")

//colorFullBody.style.backgroundColor = bodyColor

//3- rgb
//Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sustema rgb, y una vez ingresado ponga e color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// const rojo = prompt("Ingrese primer color dentro del sistema rgb:") 
// const verde = prompt("Ingrese segundo color dentro del sistema rgb:") 
// const azul = prompt("Ingrese tercer color dentro del sistema rgb:") 
// const bodyColor = `rgb(${rojo} ${verde} ${azul})`
// const colorFullBody = document.querySelector(".colorBkgr")


// colorFullBody.style.backgroundColor = `rgb(${rojo} ${verde} ${azul})`

// colorFullBody.style.backgroundColor = bodyColor

//4- imagen
//Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opcion elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:
//OPCION ELEGIDA: 200px - chica, 500px - mediana, 800px - grande.


//SIN INTERVENCION DEL USUARIO:
//const img_box = document.querySelector(".img_box")
//img_box.classList.add("img_small")
//FIN
const img_box = document.querySelector(".img_box")    

const a = "chica"
const b = "mediana"
const c = "grande" 
const tamanio = prompt("Elige un tamaño para la imagen: chica, mediana o grande:")   

    if (tamanio === a)  {
        img_box.classList.add("img_small")
    }  else if (tamanio === b) {
           img_box.classList.remove("img_container_small")
           img_box.classList.add("img_medium")
     } else if ( tamanio === c) {
        img_box.classList.remove("img_medium")
        img_box.classList.add("img_big")
     }


img_box.style.backgroundSize = tamanio






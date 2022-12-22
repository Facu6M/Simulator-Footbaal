const boton = document.getElementById("boton")

const c1 = document.querySelector(".c1")
const c2 = document.querySelector(".c2")
const c3 = document.querySelector(".c3")
const c4 = document.querySelector(".c4")

const primero = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1878.png",
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1895.png"
]

const segundo = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1879.png",
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/2100.png"
]

const tercero = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1885.png",
    "https://img.planetafobal.com/2017/11/samurai-blue-new-logo-jfa-new.jpg"
]

const cuarto = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1881.png",
    "http://www.escudosdefutbolyequipaciones.com/images_esc3/AFC/COREA%20DEL%20SUR/escudos_jpg/escudo-03-1selecci%F3n%20de%20corea%20del%20sur.jpg"
]

// SEPARADOR //

const quinto = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/1889.png",
    "https://www.shutterstock.com/shutterstock/photos/2190702821/display_1500/stock-vector-illustration-of-senegal-shield-team-badge-for-football-tournament-2190702821.jpg"
]

const sexto = [
    "http://as01.epimg.net/img/comunes/fotos/fichas/equipos/large/961.png",
    "https://i.pinimg.com/originals/48/d7/88/48d7884c16aa76672fc7a8c7731e9a9a.jpg"
]

const septimo = [
    "https://thumbs.dreamstime.com/z/el-emblema-de-la-selecci%C3%B3n-nacional-marruecos-en-f%C3%BAtbol-aislado-sobre-fondo-blanco-165421528.jpg"
]

const octavo = [
    "https://w7.pngwing.com/pngs/432/690/png-transparent-lausanne-echallens-bercher-railway-alpenplakat-ag-business-zazzle-switzerland-football-heart-logo-business.png"
]

randomIndex = Math.floor(Math.random() * primero.length)
random = primero[randomIndex]
console.log(primero[randomIndex])

randomIndex1 = Math.floor(Math.random() * segundo.length)
random1 = segundo[randomIndex1]
console.log(segundo[randomIndex1])

randomIndex2 = Math.floor(Math.random() * tercero.length)
random2 = tercero[randomIndex2]
console.log(tercero[randomIndex2])

boton.addEventListener("click", function () {
    console.log(random)
})




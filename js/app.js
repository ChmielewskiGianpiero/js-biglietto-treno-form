console.log('Calcolo biglietto del treno')

const PRICE_FOR_KM = 0.21
const DISCOUNT_OVER_65 = 40
const DISCOUNT_UNDER_18 = 20
const buttonDOMElement = document.getElementById('button-print')

buttonDOMElement.addEventListener("click", function(){

// chiedere quanti km deve percorrere
const distanceDOMElemet = document.getElementById("distance")
const userKm = parseInt(distanceDOMElemet.value)

// chiedere l'età del passeggero
const discountDOMElement = document.getElementById("discount")
const userAge = parseInt(discountDOMElement.value)

console.log(userKm, userAge)

// calcolare il prezzo base del biglietto:
const basicPrice = userKm * PRICE_FOR_KM
console.log('prezzo base: ' + basicPrice)

// calcolare il discount:
let discount = 0

if (userAge > 65) {
	discount = (basicPrice * DISCOUNT_OVER_65) / 100
} else if (userAge < 18) {
	discount = (basicPrice * DISCOUNT_UNDER_18) / 100
}

console.log('discount: ' + discount)

// calcolare il prezzo finale
const finalPrice = basicPrice - discount
console.log('prezzo finale: ' + finalPrice)

//stampare nella pagina il costo con max 2 decimali
const prezzoArrotondato = finalPrice.toFixed(2)
document.getElementById('price').innerHTML = prezzoArrotondato
})

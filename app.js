let DollarToAzn = 1.7
let DollarToTl = 19.59
let DollarToEuro = 0.91
let DollarToDirhem = 3.67

const currentvalue = document.querySelector("#inpt")
const ValuetoAZN = document.querySelector("#azn")
const ValuetoTL = document.querySelector("#tl")
const ValuetoEURO = document.querySelector("#euro")
const ValuetoDIRHEM = document.querySelector("#dirhem")
const btnCalculate = document.querySelector("#Change")

const Change = () => {
    ValuetoAZN.innerText = currentvalue.value * DollarToAzn
    ValuetoTL.innerText = currentvalue.value * DollarToTl
    ValuetoEURO.innerText = currentvalue.value * DollarToEuro
    ValuetoDIRHEM.innerText = currentvalue.value * DollarToDirhem
}



//btnCalculate.addEventListener("click",Change)
currentvalue.addEventListener("input", Change)
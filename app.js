const currentvalue = document.querySelector("#inpt")
const ValuetoAZN = document.querySelector("#azn")
const ValuetoTL = document.querySelector("#tl")
const ValuetoEURO = document.querySelector("#euro")
const ValuetoDIRHEM = document.querySelector("#dirhem")
const btnCalculate = document.querySelector("#Change")

const Change = () => {
    ValuetoAZN.innerText = currentvalue.value*1.7
    ValuetoTL.innerText = currentvalue.value*19.59
    ValuetoEURO.innerText = currentvalue.value*0.91
    ValuetoDIRHEM.innerText = currentvalue.value*3.67
}



btnCalculate.addEventListener("click",Change)
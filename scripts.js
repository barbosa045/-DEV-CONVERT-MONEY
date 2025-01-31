const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

 function convertvalues (){
    const inputcurrencyvalue =document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")//valor em real
    const currencyvaluetoconverted = document.querySelector(".currency-value")//outras moedas
    
    console. log(currencyselect.value)
    const dolartoday = 5.2
    const eurotoday = 6.2

    const convertedvalue = inputcurrencyvalue / dolartoday

    if(currencyselect.value =="dolar"){
        currencyvaluetoconverted.innerHTML =new Intl.NumberFormat("en-us",{
            style:"currency",
            currency:"USD"
        }).format(inputcurrencyvalue / dolartoday)
    
    }
    if(currencyselect.value == "euro"){
        currencyvaluetoconverted.innerHTML =new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"EUR"
    }).format(inputcurrencyvalue / eurotoday)
    }



    currencyvaluetoconvert.innerHTML =new Intl.NumberFormat("pt-br",{
        style: "currency",
        currency:"BRL"
    }).format(inputcurrencyvalue)
    
    console. log(convertedvalue)
 }
  
function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImge = document.querySelector(".currency-img")

if(currencyselect.value ="dolar"){
    currencyName.innerHTML = "dolar americano" 
    currencyImge.src ="logo 3.png"
}

if(currencyselect.value ="euro"){
currencyName.innerHTML = "euro"
currencyImge.src ="logo 4.png"
}

convertvalues()

}


currencyselect.addEventListener("change",changecurrency)
convertButton.addEventListener("click", convertvalues)


let inputValue = document.getElementById("inputValue")
let ipValue = document.getElementById("ipValue")
let opValue = document.getElementById("opValue")
let result  = document.getElementById("result")


function convert() {
    if (ipValue.value === opValue.value) {
        result.innerHTML = "Please select different unit"
    }else if (ipValue.value == "Inches")  {
        if (opValue.value == "Centimeters") {
            result.innerHTML = parseFloat(inputValue.value) * 2.54;
        } else if (opValue.value == "Meters") {
            result.innerHTML = parseFloat(inputValue.value) / 39.3701;
        }
         else {
            result.innerHTML = parseFloat(inputValue.value) 
        }
    }
    else if (ipValue.value === "Centimeters") {
        if (opValue.value == "Inches") {
            result.innerHTML = parseFloat(inputValue.value) / 2.54;
        } else if (opValue.value == "Meters") {
            result.innerHTML = parseFloat(inputValue.value) / 100;
        }else {
            result.innerHTML = parseFloat(inputValue.value) 
        }
    }  
    else if (ipValue.value === "Meters") {
        if (opValue.value == "Inches") {
            result.innerHTML = parseFloat(inputValue.value) * 39.3701;
        } else if (opValue.value == "Centimeters") {
            result.innerHTML = parseFloat(inputValue.value) * 100;
        }else {
            result.innerHTML = parseFloat(inputValue.value) 
        }
    } 
}    



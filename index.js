/*declaracion de variables*/
    /*botones*/
const botonCero = document.getElementById("cero")
const botonUno = document.getElementById("uno")
const botonDos = document.getElementById("dos")
const botonTres = document.getElementById("tres")
const botonCuatro = document.getElementById("cuatro")
const botonCinco = document.getElementById("cinco")
const botonSeis = document.getElementById("seis")
const botonSiete = document.getElementById("siete")
const botonOcho = document.getElementById("ocho")
const botonNueve = document.getElementById("nueve")
const botonSuma = document.getElementById("sumador")
const botonResta = document.getElementById("restador")
const botonProducto = document.getElementById("multiplicador")
const botonDivision = document.getElementById("divisor")
const botonResultado = document.getElementById("igual")
const botonClear = document.getElementById("clear")

    /*labels*/
const labelMemoria = document.getElementById("memoria")
const labelInput = document.getElementById("input")
const labelOperacion = document.getElementById("operacion")
    /*variables*/    
var operandoa,operandob,operacion;

function resultado(a,b){
   
    switch (operacion){
        case "+":   
            return parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "-":
            return parseFloat(operandoa) + parseFloat(operandob)
            break;
        case "x":
            return parseFloat(operandoa) * parseFloat(operandob)
            break;
        case "/":
            return parseFloat(operandoa) / parseFloat(operandob)
            break;
        

    }
    
}

function resetear(){
    labelInput.textContent = ""
    labelOperacion.textContent=""    
}

/*eventos click en botones numericos.
al precionar los botones numericos se van agregando al label "input" 
ubicado dentro del display de la calculadora*/
botonUno.addEventListener("click",()=>{  
    labelInput.textContent = labelInput.textContent + "1"  
})
botonDos.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "2"    
})
botonTres.addEventListener("click",()=>{  
    labelInput.textContent = labelInput.textContent + "3"  
})
botonCuatro.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "4"    
})
botonCinco.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "5"    
})
botonSeis.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "6"    
})
botonSiete.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "7"    
})
botonOcho.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "8"    
})
botonNueve.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "9"    
})
botonCero.addEventListener("click",()=>{    
    labelInput.textContent = labelInput.textContent + "0"    
})

/*eventos click en botones operacionales*/
botonSuma.addEventListener("click",()=>{ 
    labelOperacion.innerText = "+"
    operacion ="+"
    operandoa = labelInput.textContent
    labelInput.textContent=""
})
botonResta.addEventListener("click",()=>{ 
    labelOperacion.innerText = "-"
    operacion ="-"
    operandoa = labelInput.textContent
    labelInput.textContent=""
})
botonProducto.addEventListener("click",()=>{ 
    labelOperacion.innerText = "x"
    operacion ="x"
    operandoa = labelInput.textContent
    labelInput.textContent=""
})
botonDivision.addEventListener("click",()=>{ 
    labelOperacion.innerText = "/"
    operacion ="/"
    operandoa = labelInput.textContent
    labelInput.textContent=""
})
botonResultado.addEventListener("click",()=>{ 
    operandob = labelInput.textContent      
    labelMemoria.textContent = resultado(operandoa,operandob)
    resetear()
    
})

botonClear.addEventListener("click",()=>{ 
    resetear()
    labelMemoria.textContent=""
})
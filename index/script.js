function suma(){
    let numero1=parseFloat(document.getElementById("numero1").value)
    let numero2=parseFloat(document.getElementById("numero2").value)
    let RESULTADO=numero1+numero2
document.getElementById("RESULTADO").innerText=RESULTADO
}
function restar(){
    let numero1=parseFloat(document.getElementById("numero1").value)
    let numero2=parseFloat(document.getElementById("numero2").value)
    let RESULTADO=numero1-numero2
    document.getElementById("RESULTADO").innerText=RESULTADO
}
function multiplicar(){
    let numero1=parseFloat(document.getElementById("numero1").value)
    let numero2=parseFloat(document.getElementById("numero2").value)
    let RESULTADO=numero1*numero2
    document.getElementById("RESULTADO").innerText=RESULTADO
}
function dividir (){
    let numero1=parseFloat(document.getElementById("numero1").value)
    let numero2=parseFloat(document.getElementById("numero2").value)

if (numero2===0)    {
    alert ("NO SE PUEDE DIVIDIR POR 0 ");
        document.getElementById("RESULTADO").innerText="Error";
    }else {
        let RESULTADO=numero1/numero2
        document.getElementById("RESULTADO").innerText=RESULTADO
    }

    }
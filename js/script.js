const clave = [["e", "enter"], ["i", "imes"], ["a","ai"], ["o", "ober"], ["u","ufat"]];


function check(texto) {
    texto = String(texto).trim();
    const checking = {
    "lower": /^[a-z '\n']+$/,
    "upper": /^[A-Z0-9 ]+$/,
    "upperLower": /^[A-Za-z0-9 ]+$/
    }
    if (checking.lower.test(texto)) return '0';
    if (checking.upper.test(texto)) return '1';
    if (checking.upperLower.test(texto)) return '2';
    return -1;
}

// a chequear

function encriptar(fraseEncriptada){
    for (let i = 0 ; i < clave.length; i++){
        if (fraseEncriptada.includes(clave[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(clave[i][0],clave[i][1])
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada){
    for (let i = 0 ; i < clave.length; i++){
        if (fraseEncriptada.includes(clave[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(clave[i][1],clave[i][0])
        }
    }
    return fraseEncriptada;
}



function resultado(string){
    document.getElementById("resultado").value=string;
    document.getElementById("ocultarResultado").style.display="none";
    document.getElementById("mostrarResultado").style.display = "inline-block";
    document.getElementById("resultado").style.display = "inline-block";
    document.getElementById("texto").value="";
}

function btnEncriptar(){
    let frase = document.getElementById("texto").value;
    if(frase === ""){
        document.getElementById("alert2").style.display="inline-block"
        document.getElementById("alert1").style.display="none";
    }else if(check(frase)==0){
        frase = encriptar(frase);
        document.getElementById("alert1").style.display="none";
        document.getElementById("alert2").style.display="none";
        resultado(frase);
    }else {document.getElementById("alert1").style.display="inline-block";
    document.getElementById("alert2").style.display="none"}
}

function btnDesencriptar(){
    let frase = document.getElementById("texto").value;
    if(frase === ""){
        document.getElementById("alert2").style.display="inline-block"
        document.getElementById("alert1").style.display="none";
    }else if(check(frase)==0){
        frase = desencriptar(frase);
        document.getElementById("alert1").style.display="none";
        document.getElementById("alert2").style.display="none";
        resultado(frase);
    }else {document.getElementById("alert1").style.display="inline-block";
    document.getElementById("alert2").style.display="none"}
}

function btcCopiar(){
    let texto = document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto).then(()=>{
        alert("Mensaje copiado en el portapapeles");
    })
    document.getElementById("resultado").style.display = "none"
    document.getElementById("mostrarResultado").style.display = "none";
    document.getElementById("ocultarResultado").style.display="inline-block";
}



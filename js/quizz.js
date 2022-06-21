let nota = 0;
alert("Bienvenido, por favor revisa que tus respuestas esten en letra minuscula sean de solo una palabra. \nMucha Suerte! Comencemos");

let respuesta = prompt("'Homero hay una familia de zarigueyas aqui!' ¿Como le puso a la grande? \nTenes intentos ilimitados \nResponde 'paso' para saltear la pregunta");

while ((respuesta != "cuca") && (respuesta != "Cuca")) {
    if ((respuesta == "paso") || (respuesta == "Paso")) {
        alert("Salteaste la pregunta, tu nota parcial es " + nota + "\nLa respuesta correcta era 'Cuca'");
        break;
    } else {
        alert("Lo siento la respuesta es incorrecta, intentalo nuevamente");
        respuesta = prompt("'Homero hay una familia de zarigueyas aqui!' ¿Como le puso a la grande?\nResponde 'paso' para saltear la pregunta");
    }
}
if ((respuesta == "cuca") || (respuesta == "Cuca")) {
    alert("Correcto!, a la grande le puso Cuca");
    nota = nota + 2;
    alert(`tu nota parcial es: ${nota}`);
}

for (let i = 0; i < 3; i++) {
    let respuesta2 = prompt("Cual es la ciudad mas austral del pais? \nTenes 3 intentos\nResponde 'paso' para saltear la pregunta");
    if ((respuesta2 == "paso") || (respuesta2 == "Paso")) {
        alert("Salteaste la pregunta, tu nota parcial es " + nota+"\nLa respuesta correcta era 'Ushuaia'");
        break;
    } else if ((respuesta2 != "Ushuaia") && (respuesta2 != "ushiaia")) {
            if (i < 2) {
                alert(`Tu respuesta es incorrecta, Intente nuevamente, te quedan ${2-i} intentos`);
            } else {
                alert(`Tu respuesta es incorrecta \nTu nota parcial es ${nota} \nLa respuesta correcta era 'Ushuaia'`);
                break;
            }
        } else if ((respuesta2 == "Ushuaia") || (respuesta2 == "ushuaia")) {
            alert("Correcto!, La respuesta correcta es Ushuaia")
            nota = nota + 2;
            alert(`tu nota parcial es: ${nota}`);
            break;
        }
    }

for (let i = 0; i < 3; i++) {
    let respuesta3 = prompt("De que equipo era Isidoro Gomez en El Secreto de sus Ojos? \nTenes 3 intentos\nResponde 'paso' para saltear la pregunta");
    if ((respuesta3 == "paso") || (respuesta3 == "Paso")) {
        alert("Salteaste la pregunta, tu nota parcial es " + nota + "\nLa respuesta correcta era 'Racing'");
        break;}else if ((respuesta3 != "Racing") && (respuesta3 != "racing")) {
        if (i < 2) {
            alert("Lo siento la respuesta es incorrecta, intentalo nuevamente te quedan " + (2 - i) + " intentos")
        } else {
            alert("Tu respuesta es inocorrecta. \nTu nota parcial es:" + nota+ "\nLa respuesta correcta era 'Ushuaia'");
            break;
        }
    } else if ((respuesta3 == "Racing") || (respuesta3 == "racing")) {
        alert("Correcto!, La respuesta correcta es Racing");
        nota = nota + 2;
        alert(`Tu nota parcial es un: ${nota}`);
        break;}
    }


let respuesta4 = prompt("Contra que seleccion debuta Argentina en el mundial de Qatar 2022? Tenes intentos ilimitados\nResponde 'paso' para saltear la pregunta");
while ((respuesta4 != "Arabia Saudita") && (respuesta4 != "arabia saudita") && (respuesta4 != "Arabia saudita") && (respuesta4 != "arabia") && (respuesta4 != "Arabia")) {
    if ((respuesta4 == "paso") || (respuesta4 == "Paso")) {
        alert("Salteaste la pregunta, tu nota parcial es " + nota+"\nLa respuesta correcta era 'Arabia'");
        break;}else{
    alert("Lo siento la respuesta es incorrecta, intentalo nuevamente");
    respuesta4 = prompt("Contra que seleccion debuta Argentina en el mundial de Qatar 2022?\nResponde 'paso' para saltear la pregunta");}
}
if ((respuesta4 == "Arabia Saudita") || (respuesta4 == "arabia saudita") || (respuesta4 == "Arabia saudita") || (respuesta4 == "arabia") || (respuesta4 == "Arabia")) {
    alert("Correcto! La respuesta correcta es Arabia Saudita");
    nota = nota + 2;
    alert(`Tu nota parcial es: ${nota}`);
}
for (let i = 0; i < 3; i++) {
    let respuesta5 = prompt("Cual es la capital de España? \nTenes 3 intentos\nResponde 'paso' para saltear la pregunta");
    if((respuesta5=="paso")||(respuesta5=="Paso")){
        alert("Salteaste la pregunta, tu nota final es "+nota+"\nLa respuesta correcta era 'Madrid'");
        break;}
    else if ((respuesta5 != "Madrid") && (respuesta5 != "madrid")) {
        if (i < 2) {
            alert("Lo siento la respuesta es incorrecta, intentalo nuevamente te quedan " + (2 - i) + " intentos");
        } else {
            alert("Tu respuesta es incorrecta. \nTu nota final es un " + nota+"\nLa respuesta correcta era 'Madrid'");
            break;
        }
    } else if ((respuesta5 == "madrid") || (respuesta5 == "Madrid")) {
        alert("Correcto! La respuesta correcta es Madrid");
        nota = nota + 2;
        alert(`Tu nota final es un: ${nota}`);
        break;
    }
}
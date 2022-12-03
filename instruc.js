var scorepc = 0;
var scoreusuario = 0;
while(scorepc < 3 && scoreusuario < 3 ){
function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var piedra = 1;
var papel = 2;
var tijera = 3;

var opciones = ["undefined","piedra","papel","tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(1,3);

  opcionUsuario = prompt("Elige 1 para piedra,2 para papel y 3 para tijera", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("PC eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("¡EMPATE!");
    }
    else if(opcionMaquina == papel)
    {
        alert("¡PERDISTE! ");
        scorepc ++;
    }
    else if(opcionMaquina == tijera)
    {
        alert("¡GANASTE!");
        scoreusuario ++;
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("¡GANASTE!");
        scoreusuario++;
    }
    else if(opcionMaquina == papel)
    {
        alert("¡EMPATE!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("¡PERDISTE!");
        scorepc ++;
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("¡PERDISTE!");
        scorepc ++;
    }
    else if(opcionMaquina == papel)
    {
        alert("¡GANASTE!");
        scoreusuario ++;
    }
    else if(opcionMaquina == tijera)
    {
        alert("¡EMPATE!");
    }
}
else
{
    alert("Elegiste mal");
} 

}
    alert("Ganaste " + scoreusuario + " Perdiste " + scorepc);
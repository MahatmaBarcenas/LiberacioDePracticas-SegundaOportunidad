# LiberacioDePracticas-SegundaOportunidad

## Lineas de codigo

## instruc.js
Se decalara una variable, en este caso se llama scorepc y es igual 0
```javascript
var scorepc = 0;
```
Se decalara una variable, en este caso se llama scoreusuario y es igual 0
```javascript
var scoreusuario = 0;
```
Se declara un chiclo while condicion de que scorepc no sea mayor a 3 o que scoreusuario no sea mayor a 3
```javascript
while(scorepc < 3 && scoreusuario < 3 ){
```
Se declara una funcion en este caso se llama aleatoria con los parametros minimo y maximo
```javascript
function aleatorio(minimo, maximo){
```
Se declara una variable, en este caso se llama numero el cual es igual a math.floor para redondear la multiplicacion de math.ramdom(numero al azar) por (maximo - minimo - 1) mas minimo
```javascript
var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
```
Regresera la varible numero pero ya con un valor
```javascript
return numero;
```
Se cerrara la funcion
```javascript
}
```
Se declara el valor de piedra como 1
```javascript
var piedra = 1;
```
Se declara el valor de papel como 2
```javascript
var papel = 2;
```
Se declara el valor de tijera como 3
```javascript
var tijera = 3;
```
Se declara una varible para las opciones a elegir, como se necesita que 1 sea piedra, antes de definirla colocamos una varible al azar puede estar en blanco, yo le puse "undefined"
```javascript
var opciones = ["undefined","piedra","papel","tijera"];
```
Declaramos la variable para la opcion elegida por el usuario
```javascript
var opcionUsuario;
```
Declaramos la variable para la opcion elegida por la maquina. Esto tendra que ser igual Aleatorio con posibilidades entre 1 a 3
```javascript
var opcionMaquina = aleatorio(1,3);
```
Mostraremos un prompt para dejar que el usuario coloque su eleccion
```javascript
opcionUsuario = prompt("Elige 1 para piedra,2 para papel y 3 para tijera", 0);
```
Se mostrara un alert donde se muestre el mensaje "Elegiste " mas la opcion que eligio el usuario
```javascript
alert("Elegiste " + opciones[opcionUsuario]);
```
Se mostrara un alert donde se muestre el mensaje "Pc elgio " mas la opcion que eligio la maquina
```javascript
alert("PC eligió " + opciones[opcionMaquina]);
```
Despues se comprueba si la opcion del usuario es igual a piedra
```javascript
if(opcionUsuario == piedra)
```
Se abre llave para escribir las instrucciones del if
```javascript
{
```
Despues se comprueba si la opcion de la maquina es igual a piedra
```javascript
if(opcionMaquina == piedra)
```
Se abre llave para escribir las instrucciones del if
```javascript
{
```
Se muestra un alert con el mensaje "!EMPATE!"
```javascript
alert("¡EMPATE!");
```
Se cierra llave del if
```javascript
}
```
Si en caso de que la opcion de la maquina fue papel, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a papel 
```javascript
else if(opcionMaquina == papel)
```
Se abre llave para escribir instrucciones del if
```javascript
{
```
Se muestra un alert con el mensaje "!PERDISTE!"
```javascript
alert("¡PERDISTE! ");
```
Al perder el puntaje de scorepc aunmenta 1
```javascript
scorepc ++;
```
Se cierra la llave del else if
```javascript
}
```
Si en caso de que la opcion de la maquina fue tijera, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a tijera 
```javascript
else if(opcionMaquina == tijera)
```
Se abre llave para escribir instrucciones del if
```javascript
{
```
Se muestra un alert con el mensaje "!GANASTE!"
```javascript
alert("¡GANASTE!");
```
Al ganar el puntaje de scoreusuario aunmenta 1
```javascript
scoreusuario ++;
```
Se cierra la llave del else if
```javascript
}
```
Se cierra llave del if
```javascript
}
```
Despues se comprueba si la opcion del usuario es igual a papel
```javascript
else if(opcionUsuario == papel)
```
Se abre la llave del else if
```javascript
{
```
Si en caso de que la opcion de la maquina fue piedra, if para comprobar si la opcionMaquina es igual a piedra 
```javascript
if(opcionMaquina == piedra)
```
Se abre llave del if
```javascript
{
```
Se muestra un alert con el mensaje "!GANASTE!"
```javascript
alert("¡GANASTE!");
```
Al ganar el puntaje de scoreusuario aunmenta 1
```javascript
scoreusuario++;
```
Se cierra la llave del if
```javascript
}
```
Si en caso de que la opcion de la maquina fue papel, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a papel
```javascript
else if(opcionMaquina == papel)
```
Se abre llave del else if
```javascript
{
```
Se muestra un alert con el mensaje "!EMPATE!"
```javascript
alert("¡EMPATE!");
```
Se cierra llave del else if
```javascript
}
```
Si en caso de que la opcion de la maquina fue tijera, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a tijera
```javascript
else if(opcionMaquina == tijera)
```
Se abre llaver del else if
```javascript
{
```
Se muestra un alert con el mensaje "!PERDISTE!"
```javascript
alert("¡PERDISTE!");
```
Al perder el puntaje de scorepc aunmenta 1
```javascript
scorepc ++;
```
Se cierra llave del else if
```javascript
}
```
Se cierra llave del else if
```javascript
}
```
Despues se comprueba si la opcion del usuario es igual a tijera
```javascript
else if(opcionUsuario == tijera)
```
Se abre llave del else if
```javascript
{
```
Si en caso de que la opcion de la maquina fue piedra, if para comprobar si la opcionMaquina es igual a piedra 
```javascript
if(opcionMaquina == piedra)
```
Se abre llave del if
```javascript
{
```
Se muestra un alert con el mensaje "!PERDISTE!"
```javascript
alert("¡PERDISTE!");
```
Al perder el puntaje de scorepc aunmenta 1
```javascript
scorepc ++;
```
Se cierra la llave del if
```javascript
}
```
Si en caso de que la opcion de la maquina fue papel, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a papel
```javascript
else if(opcionMaquina == papel)
```
Se abre llave del else if
```javascript
{
```
Se muestra un alert con el mensaje "!GANASTE!"
```javascript
alert("¡GANASTE!");
```
Al ganar el puntaje de scoreusuario aunmenta 1
```javascript
scoreusuario ++;
```
Se cierra la llave del else if
```javascript
}
```
Si en caso de que la opcion de la maquina fue tijera, se declara un else if pero esta vez para comprobar si la opcionMaquina es igual a tijera
```javascript
else if(opcionMaquina == tijera)
```
Se abre la llave del else if
```javascript
{
```
Se muestra un alert con el mensaje "!EMPATE !"
```javascript
alert("¡EMPATE!");
```
Se cierra la llave del else if
```javascript
}
```
Se cierra la llave del else if
```javascript
}
```
En caso de que la opcion no sea igual a la ningun if o else if se declara un ultimo else
```javascript
else
```
Se abre llave del else
```javascript
{
```
Se muestra un alert con un mensaje el cual dira "Elegiste Mal"
```javascript
alert("Elegiste mal");
```
Se cierra la llave del else
```javascript
} 
```
Se cierra la llave del ciclo while
```javascript
}
```
Por ultimo se muestra un alert dicendo "ganaste" y el puntaje de varible scoreusuario "Perdiste" y el puntaje de la variable scorepc
```javascript
alert("Ganaste " + scoreusuario + " Perdiste " + scorepc);
```

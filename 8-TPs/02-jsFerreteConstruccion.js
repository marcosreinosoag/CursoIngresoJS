/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidadTotal;
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    cantidadTotal = largo + ancho;
    alert("La cantida de alambre que se debe comprar es " + cantidadTotal*3+ " metros" );
}
function Circulo () 
{
	var radio;
    var circunferencia;
    radio = txtIdRadio.value;
    radio = parseInt(radio);
    circunferencia = radio*2;
    circunferencia =circunferencia*3.14;

    alert("La cantida de alambre que se debe comprar es " + circunferencia*3 + " metros" );
}
function Materiales () 
{
	var largo;
    var ancho;
    var metrosCuadrados;
    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    metrosCuadrados = largo * ancho;
    alert("Para los " + metrosCuadrados+ " metros cuadrados de contrapiso se necesitan "+ metrosCuadrados*2 + " bolsas de cemento y "+ metrosCuadrados*3 + " de cal");
}
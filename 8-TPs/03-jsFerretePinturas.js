/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var fahrenheitaCentigrados;
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);
    fahrenheitaCentigrados = temperatura-32;
    alert(temperatura + " Fahrenheit son "+ fahrenheitaCentigrados+ " centigrados");
}

function CentigradosFahrenheit () 
{
	var temperatura;
    var centigradosafahrenheit;
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);
    centigradosafahrenheit = temperatura + 32;
    alert(temperatura + " centigrados son "+ centigradosafahrenheit + " fahrenheit");
}

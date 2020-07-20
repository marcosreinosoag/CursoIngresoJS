/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var anchoTerreno;
    var largoTerreno;
    var areaTerreno;
    var perimetroTerreno;
    
    anchoTerreno=promt("Ingrese ancho del terreno");
    anchoTerreno=parseInt(anchoTerreno);
    largoTerreno=prompt("Ingrese largo del terreno");
    largoTerreno=parseInt(largoTerreno);
    perimetroTerreno = (anchoTerreno * 2) + (largoTerreno * 2) ;
    areaTerreno= perimetroTerreno * largoTerreno;
    alert("el terreno tiene" + anchoTerreno + "x" + largoTerreno + "su perimetro total es de" +  perimetroTerreno + " y la superficie es de" + areaTerreno);  

}

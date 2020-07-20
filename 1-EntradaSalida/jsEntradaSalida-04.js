/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()

{
    var anchoTerreno
    var largoTerreno
    var areaTerreno
    var perimetroTerreno
    
    anchoTerreno=promt("Ingrese ancho del terreno");
    anchoTerreno=parseInt(anchoTerreno);
    largoTerreno=prompt("Ingrese largo del terreno");
    largoTerreno=parseInt(largoTerreno);
    perimetroTerreno= (anchoTerreno * 2) + (largoTerreno * 2) ;
    areaTerreno= perimetroTerreno * largoTerreno;
    alert("el terreno tiene" + anchoTerreno + "x" + largoTerreno + "su perimetro total es de"+  perimetroTerreno + " y la superficie es de" + areaTerreno);  

}



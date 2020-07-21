function mostrar()
{
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	
	
	if(edad>18)
	{
	alert("Usted es mayor de edad");
		if(edad > 12|| edad<18 )
		alert("Usted es adolescente");
	}
	else 
	{	
	alert("Usted es menor");
	}


}//FIN DE LA FUNCIÓN
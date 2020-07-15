/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDivisor;
	var numeroDividendo;
	var resto;
	numeroDividendo= txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;
	numeroDividendo = parseInt (numeroUno);
	numeroDivisor = parseInt (numeroDos);
	
	alert(numeroDividendo%numeroDivisor);
}
"txtIdNumeroDividendo"
/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroUno.value;
	numeroUno= parseInt (numeroUno);
	numeroDos= parseInt (numeroDos);
	suma = numeroUno + numeroDos;
	alert( " La suma es: " + suma);

}
function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroUno.value;
	numeroUno= parseInt (numeroUno);
	numeroDos= parseInt (numeroDos);
	resta = numeroUno - numeroDos;
	alert( " La resta es: " + resta);
}
function multiplicar()
{
	var numeroUno;
	var numeroDos;
	var multiplica;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroUno.value;
	numeroUno= parseInt (numeroUno);
	numeroDos= parseInt (numeroDos);
	multiplica = numeroUno * numeroDos;
	alert( " La multiplicacion es: " + multiplica);

}
function dividir()
{
	var numeroUno;
	var numeroDos;
	var divide;
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroUno.value;
	numeroUno= parseInt (numeroUno);
	numeroDos= parseInt (numeroDos);
	divide = numeroUno / numeroDos;
	alert( " La resta es: " + divide);

}
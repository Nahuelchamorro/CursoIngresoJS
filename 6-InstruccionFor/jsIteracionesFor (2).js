function mostrar()
{
 var numeroIngresado;
 var numeroAnterior;
 var acumulador;


 acumulador=0;
 numeroIngresado=prompt("ingrese numero");
 numeroIngresado=parseInt(numeroIngresado);

 for(numeroAnterior=numeroIngresado-1;numeroAnterior>0;numeroAnterior--)
  {
 	console.log(numeroAnterior);
 	if((numeroIngresado%numeroAnterior)==0)
 	{

 		acumulador=acumulador+numeroAnterior;
 	}
 }
if(numeroIngresado==acumulador)
{
	console.log("es perfecto")
}
	else{
		console.log("no es perfecto") 
	}

}
function mostrar()
{
 var numeroIngresado;
 var numeroAnterior;
 var numeroRecorrido

 numeroIngresado=prompt("ingrese numero");

 numeroIngresado=parseInt(numeroIngresado);
 
 for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>1;numeroRecorrido--)
 { 
    for(numeroAnterior=numeroRecorrido-1;numeroAnterior>1;numeroAnterior--)
    {
 	
 	if((numeroRecorrido%numeroAnterior)==0)
 	{
 		break;
 	}
 }
    if(numeroAnterior==1){
	console.log("el numero: "+numeroRecorrido+" es un numero primo" );
}
	 
	console.log(numeroRecorrido);
}



}//FIN DE LA FUNCIÓN
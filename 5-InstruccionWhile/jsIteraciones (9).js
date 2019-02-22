function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	maximo=-999;
	minimo=999;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese numero :");
		numero=parseInt(numero);
		
		if(numero>maximo)
		{
			maximo=numero;
		}
		if(numero<minimo)
		{
			minimo=numero;	
		}

		respuesta=prompt("=>si,para continuar");
	}

    document.getElementById('maximo').value=maximo;
    document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN
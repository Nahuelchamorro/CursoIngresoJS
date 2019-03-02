
function mostrar()
{
	var velocidades;
	var combustible;
	var vehiculo;
    var contador;
    var acumulador;
    var minimo;
    var combustibleminimo;
    var mensaje;
    var contadorliquido;
    var maximo;
    var contadorsolido;

    contador=0;
    acumulador=0;
    contadorliquido=0;
    contadorsolido=0;
    minimo=250;
    maximo=0;
   
    while(contador<5)
    {
    	velocidades=prompt("ingrese una velocidad entre 0 y 250");
    	velocidades=parseInt(velocidades);
    	contador=contador+1;

    	while(velocidades>250 || velocidades==0)
    	{
          velocidades=prompt("error, ingrese una velocidad entre 0 y 250");
          velocidades=parseInt(velocidades);
    	}
    	acumulador=acumulador+velocidades;

    	combustible=prompt("ingrese combustible liquido o solido");
    	while(!(combustible=="liquido"|| combustible=="solido"))
    	{
          combustible=prompt("error, ingrese un combustible liquido o solido");
    	}

      if(velocidades<minimo)
      {
       minimo=velocidades;
       combustibleminimo=combustible;
      }
     else
     	if(velocidades>100 && combustible=="liquido")
     	{
         contadorliquido=contadorliquido+1 
     	}
     	else
     		if(velocidades>maximo && combustible=="solido")
     		{
     		  maximo=velocidades;
              contadorsolido=maximo;
     		}
    }
    
    document.write("el promedio de velocidades es: "+ acumulador/5+"<br>");
    document.write("la velocidad mas baja es de: "+minimo+" y su tipo de combustible es: "+combustible+"<br>");
    document.write("la cantidad de combustibles liquidos que superan los 100km/h son: "+contadorliquido+"<br>");
    document.write("la velocidad mas alta de los combustibles solidos es: "+contadorsolido+"<br>");

}
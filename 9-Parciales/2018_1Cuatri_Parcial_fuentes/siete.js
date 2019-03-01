function mostrar()
{
	var contador;
    var numero;
    var minimo;
    var sexo;
    var contadormasculino;
    var sexominimo;

    minimo=999;
    contadormasculino=0;
	contador=0;
	acumulador=0;

      while(contador<5)
{   
	    contador=contador+1;
		numero=prompt("ingrese nota");
		sexo=prompt("ingrese sexo f o m ");
		numero=parseInt(numero);
		acumulador=acumulador+ numero;
		   
		if(numero>10)
		{
			alert("el numero excede el limite");

		}
		else
		{
         if(numero<minimo)
         {
			minimo=numero;
			sexominimo=sexo;	
	     }
	 else 
	{
	 	if(numero>=6 && sexo=="m")
	 	{
	 		contadormasculino=contadormasculino+1

	 	}
	 } 

        }	

}
promedio=acumulador/5;
alert("el promedio es de: "+promedio);
alert("la cantidad de varones con nota mayor a 6 son:"+contadormasculino);
alert("la nota mas baja es: "+minimo+"y su sexo es: "+sexominimo);
}

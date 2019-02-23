function mostrar()
{
	var contador;
    var numero;
    var minimo;
    var sexo;
    var contadormasculino;
    minimo=0;
   

	contador=0;
	acumulador=0;

	while(contador<5)
	{   
	    contador=contador+1;
		numero=prompt("ingrese nota");
		sexo=prompt("ingrese sexo femenino o masculino ");
		numero=parseInt(numero);
		acumulador=acumulador+ numero;
		

		if(numero>10){
			alert("el numero excede el limite");

		}
		else{
         if(numero<minimo){
			minimo=numero;
			alert(sexo);		
	}
	 else {
	 	if(sexo=="masculino" && numero>=6){
	 		contadormasculino=contadormasculino+1

	 	}
	 }
}	

}
promedio=acumulador/numero;
alert("el promedio es de: "+promedio);
alert("la cantidad de varones con nota menor a 6 son:"+contadormasculino);
alert("la nota mas baja y su sexo es de :"+minimo+sexo)
  }

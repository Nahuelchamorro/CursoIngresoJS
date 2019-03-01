function mostrar()
{
   var marca;
   var tamaño;
   var precio;
   var mayor;
   var respuesta="si";
   var promedio;
   var celusmenores;
   var acumulador;
   


   
   mayor=1;
   promedio=0;
   acumulador=0;
   celusmenores=1;


	 while(respuesta=="si")
	{
		marca=prompt("ingrese la marca del celular");
        tamaño=prompt("ingrese el tamaño");
        precio=prompt("ingrese el precio");
        precio=parseInt(precio);
        tamaño=parseInt(tamaño);

	
		if(precio>mayor)
	   {	    
	     promedio=promedio+1;
	     mayor=precio;
	     marca=marca;
         acumulador=precio+acumulador;
	   }
       else
       { 
        if(precio<2000)
        {
        	celusmenores=celusmenores+1;
        }

       }

		respuesta=prompt(" =>si , para continuar");

	
   }
    
  
   alert("el mayor precio es: "+mayor+" y su marca es: "+marca);
   alert("el promedio de precios es: "+(acumulador/promedio));
   alert("la cantidad de celulares con precio menor a 2000 son: "+celusmenores);
  

}

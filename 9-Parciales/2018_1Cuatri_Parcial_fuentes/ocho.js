function mostrar()
{
 var pais;
 var superficie;
 var kilometros;
 var contador;
 var contador2;
 var contador3;
 var paisgrande;
 var numeroalto;
 var contadorsito;
 var acumuladorsito;
 var minimo;
 var paischico;
 var respuesta="si";

minimo=9999999;
contadorsito=0;
acumuladorsito=0;
contador=0;
contador2=0;
contador3=0;
numeroalto=100;

 while(respuesta=="si")
 {
   pais=prompt("ingrese el pais: ");
   superficie=prompt("ingrese la superficie del pais en km: ");
   superficie=parseInt(superficie);
   respuesta=prompt("coloque ==> si, para continuar");

   while(superficie<0 || superficie==0)
   {
     superficie=prompt("error, vuelva a colocar la superficie en km: ");
     respuesta=prompt("coloque ==> si, para continuar");

   }

   contadorsito++;
   acumuladorsito=acumuladorsito+superficie;

   if(superficie%2==1)
   {
    contador=contador+1;
   }
  	if(superficie<100)
  	 {
  		contador2=contador2+1;
  	 }
  	 
   	if(superficie==100)
   	 {
   		contador3=contador3+1;
   	 }
   	
    
   	if(superficie>numeroalto)
   	{
      paisgrande=pais;
      numeroalto=99999999999;

   	}
    
   		if(superficie<minimo)
   		{
   	     paischico=pais;
         minimo=superficie;
         
   		}
   	
   
   }
 
 
    document.write("la cantidad de paises con superficie impar es de: "+contador+"<br>");
    document.write("la cantidad de paises con superficie menor a 100 son: "+contador2+"<br>");
    document.write("la cantidad de paises con superficie de 100 son: "+contador3+"<br>");
    document.write("el nombre del primer pais que supero los 100 de superficie es: "+paisgrande+"<br>");
    document.write("el promedio de kilometros ingresados es de: "+(acumuladorsito/contadorsito)+"<br>");
    document.write("el nombre del pais con menos territorio es:"+paischico+"<br>");



}
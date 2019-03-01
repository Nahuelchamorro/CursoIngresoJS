function mostrar()
{
 var numerouno;
 var numerodos;
 var primernumero;
 var segundonumero;
 var suma;

 primernumero=prompt("ingrese un primero numero");
 segundonumero=prompt("ingrese un segundo numero");
 numerouno=parseInt(primernumero);
 numerodos=parseInt(segundonumero);
 suma=numerouno+numerodos;

 if(numerouno==numerodos)
 {
   alert(primernumero+segundonumero);
 }
 else
 {
    if(numerouno>numerodos)
    {
      alert(numerouno-numerodos);
    }
    else{
    	
     if((suma)>10)
    {
      alert("la suma de ambos numeros es: "+suma+" y es mayor que 10.");
    }
    
 }

 }
}

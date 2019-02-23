function mostrar()
{
/*
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
var contador=0;
	//declarar contadores y variables 
	var negativos;
	var positivos;
	var cantidadpositivos;
	var cantidadnegativos;
	var ceros;
	var pares; 
	var promediopositivos;
	var promedionegativos;
	var diferencia;
	var contadornegativo;
	var contadorpositivo;
	var contadorDePares;
	var respuesta="si";	
	var acumuladorNegativo;
	var acumuladorPositivos;
	var bandera;
	var DIFERENCIA;


	contadorpositivo=0;
	contadornegativo=0;
	ceros=0;
	contadorDePares=0;
	acumuladorNegativo=0;
	acumuladorPositivos=0;

	bandera="es la primera";

	while(respuesta=="si")
	{
		contador=contador+1;
		numero=prompt("ingrese numero :");
		numero=parseInt(numero);
		if(numero<0)			
		{
			acumuladorNegativo=acumuladorNegativo+numero;
	        contadornegativo=contadornegativo+1;
		}
		else
		{
			if(numero>0)
			{
				acumuladorPositivos=acumuladorPositivos+numero;
				contadorpositivo=contadorpositivo+1;	
			}else
			{
				ceros=ceros+1;
			}
		} 
		
		if(numero%2==0 && numero!=0)
		{
			contadorDePares=contadorDePares+1;
		}
      
		

		respuesta=prompt("=>si,para continuar");

		cantidadpositivos=contadorpositivo;
		cantidadnegativos=contadornegativo;
	}
	promediopositivos=acumuladorPositivos/contadorpositivo;
	promedionegativos=acumuladorNegativo/contadornegativo;
	DIFERENCIA=acumuladorPositivos+acumuladorNegativo;

  document.write("Suma de los negativos es: "+acumuladorNegativo+"<br>");
  document.write("Suma de los positivos es: "+acumuladorPositivos+"<br>");
  document.write("Cantidad de positivos es: "+contadorpositivo+"<br>");
  document.write("Cantidad de negativos es: "+contadornegativo+"<br>");
  document.write("Cantidad de ceros es: "+ceros+"<br>");
  document.write("Cantidad de pares es: "+contadorDePares+"<br>");
  document.write("promedio de positivos: "+promediopositivos+"<br>");
  document.write("promedio de negativos: "+promedionegativos+"<br>");
  document.write("diferencia entre positivos y negativos: "+DIFERENCIA+"<br>");










}//FIN DE LA FUNCIÓN
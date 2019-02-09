/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldos;
    var resultado;
    var porcentajes;
    var sueldofinal;

    sueldos=sueldo.value;
    
	sueldos=parseInt(sueldos);
    porcentajes=10;
    
	resultado=sueldos+((sueldos*porcentajes)/100);
    resultados.value=resultado;
}

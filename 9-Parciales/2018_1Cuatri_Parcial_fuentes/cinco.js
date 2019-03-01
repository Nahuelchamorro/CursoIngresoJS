function mostrar()
{
 var planeta;
 var mensaje;
  
 planeta=prompt("ingrese un planeta del sistema solar: ");

 switch(planeta)
 {
  case "tierra":
  mensaje="acá vivimos";
  break;
  case "mercurio":
  mensaje="acá hace mas calor";
  case "venus":
  mensaje="acá hace mas calor";
  break;
  case "marte":
  mensaje="acá hace mas frio";
  case "jupiter":
  mensaje="acá hace mas frio";
  case "saturno":
  mensaje="acá hace mas frio";
  case "urano":
  mensaje="acá hace mas frio";
  case "neptuno":
  mensaje="acá hace mas frio";
  break;
  case planeta :
  mensaje="introduzca un planeta valido";
  break;
 }

alert(mensaje);

}

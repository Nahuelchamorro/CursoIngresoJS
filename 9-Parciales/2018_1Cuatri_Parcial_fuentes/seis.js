function mostrar()
{
 var horario;
 var mensaje;

 horario=laHora.value;
 horario=parseInt(horario);

 switch(horario)
 { 
   case(0):
   case(1):
   case(2):
   case(3):
   case(4):
   case(5):
   mensaje="a dormir!!";
   break;
   case(6):
   case(7):
   case(8):
   case(9):
   case(10):
   case(11):
   mensaje="es de mañana";
   break;
   case(12):
   case(13):
   case(14):
   case(15):
   case(16):
   case(17):
   case(18):
   case(19):
   mensaje="es de tarde";
   break;
   case(20):
   case(21):
   case(22):
   case(23):
   case(24):
   mensaje="es de noche";
   break;
   case horario:
   mensaje="introduzca un horario valido";

 }
alert(mensaje);
}

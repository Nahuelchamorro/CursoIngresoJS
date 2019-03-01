function mostrar()
{
   var precio
   var descuento
   var preciofinal


   precio=prompt("ingrese precio porfavor");
   precio=parseInt(precio);
   descuento=prompt("ingrese el descuento porfavor");

   preciofinal=precio-(descuento*precio)/100;

   elPrecioFinal.value=preciofinal;
}

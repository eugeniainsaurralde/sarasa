function mostrar() {
  let tipo,
    origen,
    precio,
    seguir;

  //Punto a
  let contMuñecas = 0,
    contRompecabezas = 0,
    contPelota = 0,
    jugueteMasVendido;

  //Punto b
  let contImportados = 0,
  acumPrecioImportados= 0,
  promPrecioImportados = 0;

  //Punto c
  let precioTotal = 0;

  //Punto d
  let  precioRompecabezasNacMasBarato,
  flagRompecabezasNacMasBarato = 1;

  //Punto e
  let iva;

  do {

    tipo = prompt("Ingrese el tipo de juguete (muñeca, rompecabezas, pelota)").toLowerCase();
    while (tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota") {
      tipo = prompt("ERROR.Ingrese el tipo de juguete (muñeca, rompecabezas, pelota)").toLowerCase();
    }

    origen = prompt("Ingrese su origen  (nacional, importado)").toLowerCase();
    while (origen != "nacional" && origen != "importado") {
      origen = prompt("ERROR.Ingrese su origen (nacional, importado)").toLowerCase();
    }

    precio = parseInt(prompt("Ingrese el precio"));
    while (isNaN(precio) || precio < 1000 || precio > 5000) {
      precio = parseInt(prompt("ERROR.Ingrese el precio"));
    }

    switch (tipo) {
      case "muñeca":
        contMuñecas++;
        break;
      case "pelota":
        contPelota++;
        break;
      case "rompecabezas":
        contRompecabezas++;
        break;
    }

    if (origen == "importado"){
      contImportados ++;
      acumPrecioImportados = precio + acumPrecioImportados;
    }
    else {
      //Punto d
      if (tipo == "rompecabezas" && (flagRompecabezasNacMasBarato == 1 || precio < precioRompecabezasNacMasBarato)){
        precioRompecabezasNacMasBarato = precio;
        flagRompecabezasNacMasBarato = 0;
      }

    }

    //Punto c
    precioTotal = precio + precioTotal;

    seguir = prompt("Desea seguir ingresando juguetes? (si/no)").toLowerCase();
  } while (seguir == "si");


  //Punto a
  if (contMuñecas > contRompecabezas && contMuñecas > contPelota) {
    jugueteMasVendido = "Muñecas";
  }
  else if (contRompecabezas >= contMuñecas && contRompecabezas > contPelota) {
    jugueteMasVendido = "Rompecabezas";
  }
  else {
    jugueteMasVendido = "Pelotas";
  }

  //Punto b
  if (contImportados != 0){
    promPrecioImportados = acumPrecioImportados / contImportados;
  }

  //Punto e
  iva = precioTotal * 0.21;

  document.write( "a) El tipo de juguete mas vendido: " + jugueteMasVendido+
  "<br>" + "b) El promedio de precio de los juguetes importados: "+ promPrecioImportados+
  "<br>" + "c) La recaudacion total: "+ precioTotal);
  if (flagRompecabezasNacMasBarato == 0){
    document.write ("<br>" + "d) Precio del rompecabezas nacional mas barato: "+ precioRompecabezasNacMasBarato);
  }
  else {
    document.write ("<br>" + "d) Precio del rompecabezas nacional mas barato: No se compraron rompecabezas nacionales.");
  }
  document.write("<br>" + "e) Se percibio de iva en total: " + iva);


}

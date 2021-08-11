function mostrar() {
  let nombre,
    tipo,
    sangre,
    edad,
    sexo,
    seguir;

  //Punto a
  let acumEdadReptil = 0,
    contReptiles = 0,
    promEdadRepriteles = 0;

  //Punto b
  let edadMasJoven,
    tipoMasJoven,
    sexoMasJoven,
    flagMasJoven = 1;

  //Punto c
  let contTotalMascotas = 0,
    contAves = 0,
    porcentajeAves;

  //Puntp d
  let contMamiferos = 0,
    mayorTipoMascota;

  do {

    nombre = prompt("Ingrese el nombre de su mascota").toLowerCase();
    while (nombre.length >= 8 || nombre.length <= 3) {
      nombre = prompt("ERROR.Ingrese el nombre de su mascota").toLowerCase();
    }

    tipo = prompt("Ingrese el tipo de mascota (“mamifero”, “ave”, “reptil”)").toLowerCase();
    while (tipo != "mamifero" && tipo != "ave" && tipo != "reptil") {
      tipo = prompt("ERROR.Ingrese el tipo de mascota (“mamifero”, “ave”, “reptil”)").toLowerCase();
    }


    if (tipo == "reptil") {
      sangre = "fria"
    }
    else {
      sangre = prompt("Ingrese que tipo de sangre tiene su mascota").toLowerCase();
      while (sangre != "fria" && sangre != "calida") {
        sangre = prompt("ERROR.Ingrese que tipo de sangre tiene su mascota").toLowerCase();
      }
    }

    edad = parseInt(prompt("Ingrese la edad de su mascota"));
    while (isNaN(edad) || edad < 1) {
      edad = parseInt(prompt("ERROR.Ingrese la edad de su mascota"));
    }

    sexo = prompt("Ingrese el sexo de su mascota (h/m)").toLowerCase();
    while (sexo != "h" && sexo != "m") {
      sexo = prompt("ERROR.Ingrese el sexo de su mascota (h/m)").toLowerCase();
    }



    switch (tipo) {
      case "ave":
        contAves++;
        break;
      case "mamifero":
        contMamiferos++;
        break;
      case "reptil":
        acumEdadReptil = edad + acumEdadReptil;
        contReptiles++;
        break;
    }

    //Punto b
    if (flagMasJoven == 1 || edad < edadMasJoven) {
      edadMasJoven = edad;
      tipoMasJoven = tipo;
      sexoMasJoven = sexo;
      flagMasJoven = 0
    }

    contTotalMascotas++;


    seguir = prompt("Desea seguir ingresando mascotas? (si/no)").toLowerCase();
  } while (seguir == "si");


  //Punto a
  if (contReptiles != 0) {
    promEdadRepriteles = acumEdadReptil / contReptiles;
  }

  //Punto c
  porcentajeAves = contAves * 100 / contTotalMascotas;

  //Punto d
  if (contMamiferos > contAves && contMamiferos > contReptiles) {
    mayorTipoMascota = "Mamiferos";
  }
  else if (contAves >= contMamiferos && contAves > contReptiles) {
    mayorTipoMascota = "Aves";
  }
  else {
    mayorTipoMascota = "Reptil";
  }

  document.write("a) Promedio de edad de los reptiles: " + promEdadRepriteles +
    "<br>" + "b) Tipo y sexo de la mascota mas joven: " + tipoMasJoven + " (" + sexoMasJoven + ")"+
    "<br>" + "c) Porcentaje de aves sobre el total de mascotas: " + porcentajeAves +
    "<br>" + "d) Tipo de mascota que se encuentra en mayor cantidad: " + mayorTipoMascota);

}

function mostrar() {
  let nombre,
    carrera,
    sexo,
    cantMaterias,
    NotaPromedio,
    edad;

  //Punto a
  let mejorPromedio,
    nombreMejorPromedio,
    flagMejorPromedio = 1;

  //Punto b
  let edadAlumnaMasJoven,
    nombreAlumnaMasJoven,
    flagAlumnaMasJoven = 1;

  //Punto c
  let contFisica = 0,
    contSistemas = 0,
    contQuimica = 0,
    porcjFisica,
    porcjSistemas,
    porcjQuimica;

  //Punto d
  let mayorCantMaterias,
    nombreMayorCantMaterias,
    edadMayorCantMaterias,
    flagMayorCantMaterias = 1;

  for (let i = 0; i < 500; i++) {

    nombre = prompt("Ingrese su nombre").toLowerCase();
    while (nombre == "") {
      nombre = prompt("ERROR.Ingrese su nombre").toLowerCase();
    }

    carrera = prompt("Ingrese su carrera (Quimica;Fisica;Sistemas)").toLowerCase();
    while (carrera != "quimica" && carrera != "fisica" && carrera != "sistemas") {
      carrera = prompt("ERROR.Ingrese su carrera (Quimica;Fisica;Sistemas)").toLowerCase();
    }

    sexo = prompt("Ingrese su sexo (masculino - femenino -no binario)").toLowerCase();
    while (sexo != "masculino" && sexo != "femenino" && sexo != "no binario") {
      sexo = prompt("ERROR.Ingrese su sexo (masculino - femenino -no binario)").toLowerCase();
    }

    cantMaterias = parseInt(prompt("Ingrese la cantidad de materias (1-5)"));
    while (isNaN(cantMaterias) || cantMaterias < 1 || cantMaterias > 5) {
      cantMaterias = parseInt(prompt("ERROR.Ingrese la cantidad de materias (1-5)"));
    }

    NotaPromedio = parseInt(prompt("Ingrese su nota promedio (0-10)"));
    while (isNaN(NotaPromedio) || NotaPromedio < 0 || NotaPromedio > 10) {
      NotaPromedio = parseInt(prompt("ERROR.Ingrese su nota promedio (0-10)"));
    }

    edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad < 14) {
      edad = parseInt(prompt("ERROR.Ingrese su edad"));
    }

    switch (carrera) {
      case "fisica":

        contFisica++;
        //Punto a
        if (flagMejorPromedio == 1 || mejorPromedio < NotaPromedio) {
          mejorPromedio = NotaPromedio;
          nombreMejorPromedio = nombre;
          flagMejorPromedio = 0;
        }

        break;
      case "quimica":
        contQuimica++;
        break;
      case "sistemas":
        contSistemas++;
        break;
    }

    //Punto b
    if (sexo == "femenino" && (flagAlumnaMasJoven == 1 || edad < edadAlumnaMasJoven)) {
      edadAlumnaMasJoven = edad;
      nombreAlumnaMasJoven = nombre;
      flagAlumnaMasJoven = 0;
    }

    //Punto d
    if (carrera != "quimica" && (flagMayorCantMaterias == 1 || mayorCantMaterias < cantMaterias)) {
      mayorCantMaterias = cantMaterias;
      nombreMayorCantMaterias = nombre;
      edadMayorCantMaterias = edad;
      flagMayorCantMaterias = 0;
    }

  }

  //Punto c
  porcjFisica = contFisica * 100 / 500;
  porcjQuimica = contQuimica * 100 / 500;
  porcjSistemas = contSistemas * 100 / 500;

  if (contFisica != 0) {
    document.write("a) Mejor promedio de la carrera fisica:" + nombreMejorPromedio);
  }
  else {
    document.write("a) Mejor promedio de la carrera fisica: No hubo inscriptos");
  }
  if (flagAlumnaMasJoven == 0) {
    document.write("<br>" + "b)Nombre de la alumna mas joven: " + nombreAlumnaMasJoven);
  }
  else {
    Document.write("<br>" + "b)Nombre de la alumna mas joven: No se inscribieron alumnas");
  }
  document.write("<br>" + "c) Porcentaje de estudiantes de fisica (" + porcjFisica + "), porcentaje de estudiantes de quimica (" + porcjQuimica + "), porcentaje de estudiantes de sistemas (" + porcjSistemas + ")." +
    "<br>" + "d) Edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica: " + nombreMayorCantMaterias + " (" + edadMayorCantMaterias + ").");

}

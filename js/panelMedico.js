let serializarMedicos = localStorage.getItem("medicosV");
medico = JSON.parse(serializarMedicos);

for (y of medico) {
  const elemento1 = document.createElement("div");
  elemento1.innerHTML = `<h4 class="" style="">
        <div class="card-body">
        <h5 class="font-weight-bold">${y._nombre}</h5>
        <h5 class="lead">Legajo: ${y._legajo}</h5>
        </div>
      </h4>`;
  document.getElementById("divNombre").appendChild(elemento1);
}

/* function agregar() {
  document.getElementById("tabla").innerHTML +=
    "<tbody><td>" +
    paciente._nombre +
    "</td><td>" +
    paciente._dia +
    "</td><td>" +
    paciente._hora +
    "</td><td>" +
    paciente._problematica +
    "</td><td>" +
    paciente._especialidad +
    "</td></tbody>";
}
 */
class Turno {
  constructor(paciente, dia, hora, problematica, especialidad) {
    this._paciente = paciente;
    this._dia = dia;
    this._hora = hora;
    this._problematica = problematica;
    this._especialidad = especialidad;
  }
}
class Lista {
  constructor() {
    this._lista = [];
  }
  get lista() {
    return this._lista;
  }
  agregar(turno) {
    this._lista.push(turno);
  }
}

if (localStorage.getItem("listadoPacientes") != null) {
  let turnos = JSON.parse(localStorage.getItem("listadoPacientes"));
  for (i of turnos) {
    let paciente = i._nombre;
    dia = i._dia;
    hora = i._hora;
    problematica = i._problematica;
    especialidad = i._especialidad;

    var turno = new Turno(paciente, dia, hora, problematica, especialidad);
  }
} else {
  console.log("no hay turnos");
}

document.getElementById("filtro").addEventListener("change", function (e) {
  const filtro = document.getElementById("filtro").value;

  switch (filtro) {
    case "Cardiología":
      console.log("Hola Cardiología");

      break;

    case "Pediatría":
      console.log("Hola Pediatría");
      break;

    case "Salud de la Mujer":
      console.log("Hola Salud");
      break;

    case "Dermatología":
      console.log("Hola Dermatología");
      break;
    default:
      console.log("No se encontró nombre");
  }
  e.preventDefault();
});

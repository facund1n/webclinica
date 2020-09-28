console.log("estoy en LOGIN Usuario y Medico");

window.document.getElementById("formVerde").style.display = "none";

document
  .getElementById("cambiarAprofesionales")
  .addEventListener("click", function (e) {
    document.getElementById("formVerde").style.display = "block";
    document.getElementById("formAzul").style.display = "none";
  });

document
  .getElementById("cambiarApacientes")
  .addEventListener("click", function (e) {
    document.getElementById("formAzul").style.display = "block";
    document.getElementById("formVerde").style.display = "none";
  });

var pacientes = [];

class Paciente {
  constructor(user, password) {
    this._user = user;
    this._password = password;
  }
  get user() {
    return this._user;
  }
  get password() {
    return this._password;
  }
}

class Medico {
  constructor(legajo, password) {
    this._legajo = legajo;
    this._password = password;
  }
  get legajo() {
    return this._legajo;
  }
  get password() {
    return this._password;
  }
}

var creacionPaciente = document
  .getElementById("formPatient")
  .addEventListener("submit", function (e) {
    var user = document.getElementById("userPatient").value;
    password = document.getElementById("patientPassword").value;
    paciente = new Usuario(user, password);

    let serializarPaciente = localStorage.getItem("pacientes");
    listadoPaciente = JSON.parse(serializarPaciente);

    for (i of listadoPaciente) {
      if (i._user == user && i._password == password && i._validado == true) {
        console.log("INICIO SESION");
      }
    }
    e.preventDefault();
  });

var creacionMedico = document
  .getElementById("formMedic")
  .addEventListener("submit", function (e) {
    var legajo = document.getElementById("legajo").value;
    password = document.getElementById("medicPassword").value;
    paciente = new Medico(legajo, password);

    let serializarMedico = localStorage.getItem("medicos");
    listadoMedico = JSON.parse(serializarMedico);

    for (y of listadoMedico) {
      if (
        y._legajo == legajo &&
        y._password == password &&
        y._validado == true
      ) {
        console.log("INICIO SESION");
      }
    }
    e.preventDefault();
  });

/* document.getElementById("formPatient").addEventListener("submit", function (e) {
  e.preventDefault();
}); */

// fmétodo de validacion if user == user && password && password - set validacion undefined true
// if validacion true && validacion true mandar a Turnos

console.log("estoy en LOGIN Usuario y Medico");

function verifLogin() {
  var clave1 = localStorage.getItem("patientLogIn");
  clave2 = JSON.parse(clave1);
  if (clave2 == true) {
    window.location = "http://127.0.0.1:5500/turnos.html";
  }
}
verifLogin();

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
    paciente = new Paciente(user, password);

    let serializarPaciente = localStorage.getItem("pacientesV");
    listaPacienteLS = serializarPaciente;
    listadoPaciente = JSON.parse(serializarPaciente);

    if (localStorage.getItem("pacientesV") != null) {
      for (i of listadoPaciente) {
        if (i._user == user && i._password == password && i._validado == true) {
          alert("bienvenido: " + i._nombre);
          localStorage.setItem("patientLogIn", true);
          localStorage.setItem("userName", i._nombre);
          window.location = "http://127.0.0.1:5500/turnos.html";
        }
      }
    } else {
      alert("No hay usuarios registrados");
    }

    e.preventDefault();
  });

var creacionMedico = document
  .getElementById("formMedic")
  .addEventListener("submit", function (e) {
    var legajo = document.getElementById("legajo").value;
    password = document.getElementById("medicPassword").value;
    medico = new Medico(legajo, password);

    let serializarMedico = localStorage.getItem("medicosV");
    listaMedicoLS = serializarMedico;
    listadoMedico = JSON.parse(serializarMedico);

    if (localStorage.getItem("medicosV") != null) {
      for (y of listadoMedico) {
        if (
          y._legajo == legajo &&
          y._password == password &&
          y._validado == true
        ) {
          alert("bienvenido: " + y._nombre);
          localStorage.setItem("medicLogIn", true);

          window.location = "http://127.0.0.1:5500/panelmedicos.html"; // reemplar por turnos de médico cuando este lista
        }
      }
    } else {
      alert("No hay médicos registrados");
    }

    e.preventDefault();
  });

console.log("estoy en registro Usuario y Medico");

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
  constructor(user, password, validado) {
    this._user = user;
    this._password = password;
    this._validado = validado;
  }
  get user() {
    return this._user;
  }
  get password() {
    return this._password;
  }
  get validado() {
    return this._validado;
  }
}

var creacionPaciente = document
  .getElementById("formPatient")
  .addEventListener("submit", function (e) {
    var user = document.getElementById("userPatient").value;
    password = document.getElementById("patientPassword").value;
    paciente = new Paciente(user, password);

    pacientes.push(paciente);
    e.preventDefault();
  });

document.getElementById("formPatient").addEventListener("submit", function (e) {
  var serializarPacientesV = localStorage.getItem("pacientesV");
  pacientesAobj = JSON.parse(serializarPacientesV);

  /* console.log(serializarPacientesV); */

  for (i of pacientesAobj) {
    /*     if (i._user == user && i._password == password && i._validado == true) {
      var validado = true;
      if (validado == i._validado) {
        console.log("INICIO SESION");
      }
    } */
  }
  e.preventDefault();
});

// fmétodo de validacion if user == user && password && password - set validacion undefined true
// if validacion true && validacion true mandar a Turnos

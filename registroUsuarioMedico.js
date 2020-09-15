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

var listado = [];

class Paciente {
  constructor(tipo, user, nombre, password, fechaNacimiento, validado) {
    this._tipo = tipo;
    this._user = user;
    this._nombre = nombre;
    this._password = password;
    this._fechaNaciomiento = fechaNacimiento;
    this._validado = validado;
  }

  get tipo() {
    return this._tipo;
  }
  get user() {
    return this._user;
  }
  get nombre() {
    return this._nombre;
  }
  get password() {
    return this._password;
  }
  get fechaNacimiento() {
    return this._fechaNaciomiento;
  }
  get validado() {
    return this._validado;
  }
}

class Medico {
  constructor(tipo, legajo, nombre, password, validado) {
    this._tipo = tipo;
    this._legajo = legajo;
    this._nombre = nombre;
    this._password = password;
    this._validado = validado;
  }

  get tipo() {
    return this._tipo;
  }
  get user() {
    return this._legajo;
  }
  get nombre() {
    return this._nombre;
  }
  get password() {
    return this._password;
  }
  get validado() {
    return this._validado;
  }
}

let creacionPaciente = document
  .getElementById("formPatient")
  .addEventListener("submit", function (e) {
    var tipo = document.getElementById("tipoUsuario").value;
    user = document.getElementById("userPatient").value;
    nombre = document.getElementById("patientName").value;
    password = document.getElementById("patientPassword").value;
    password2 = document.getElementById("patientPassword2").value;
    fechaNacimiento = document.getElementById("date").value;
    validado = document.getElementById("validadoPatient").value;

    var checkbox = document.getElementById("checkbox1").checked;

    paciente = new Paciente(
      tipo,
      user,
      nombre,
      password,
      fechaNacimiento,
      validado
    );

    function verifPassword() {
      var pw1 = password;
      var pw2 = password2;
      if (pw1 == pw2) {
        verifPassword = true;
      } else {
        alert("Verfique contaseña");
      }
    }
    verifPassword();

    function verifCheckbox() {
      if (checkbox == true) {
        verifCheckbox = true;
      } else {
        alert("Debe aceptar Términos y condiciones");
      }
    }
    verifCheckbox();

    function agregarAlocalStorage() {
      if (verifPassword == true && verifCheckbox == true) {
        listado.push(paciente);

        localStorage.setItem("listado", JSON.stringify(listado));

        alert("Bienvenido, un Administrador Validará su cuenta en breve...");
        window.location = "http://127.0.0.1:5500/index.html";
      }
    }

    agregarAlocalStorage(), e.preventDefault();
  });

let creacionMedic = document
  .getElementById("formMedic")
  .addEventListener("submit", function (e) {
    var tipo = document.getElementById("tipoMedic").value;
    user = document.getElementById("legajo").value;
    nombre = document.getElementById("medicName").value;
    password3 = document.getElementById("medicPassword").value;
    password4 = document.getElementById("medicPassword2").value;
    validado = document.getElementById("validadoMedico").value;

    medico = new Medico(tipo, user, nombre, password3, validado);

    function verifPasswordMedic() {
      var pw3 = password3;
      var pw4 = password4;
      if (pw3 == pw4) {
        verifPasswordMedic = true;
      } else {
        alert("Verfique contaseña");
      }
    }
    verifPasswordMedic();

    function agregarMediclocalStorage() {
      if (verifPasswordMedic == true) {
        listado.push(medico);

        localStorage.setItem("listado", JSON.stringify(listado));

        alert("Bienvenido, un Administrador Validará su cuenta en breve...");
        window.location = "http://127.0.0.1:5500/index.html";
      }
    }

    agregarMediclocalStorage(), e.preventDefault();
  });

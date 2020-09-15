console.log("Estoy en el sistema de validación");

function verifLogin() {
  var clave = localStorage.getItem("adminLogOn");
  var clave2 = JSON.parse(clave);
  if (clave2 == false) {
    alert("debe iniciar sesión");
    window.location = "http://127.0.0.1:5500/admin.html";
  }
}
verifLogin();

document.getElementById("salir").addEventListener("click", function (e) {
  localStorage.setItem("adminLogOn", false);
  window.location = "http://127.0.0.1:5500/admin.html";
  e.preventDefault();
});

document.getElementById("consulta").addEventListener("click", function (e) {
  var serializarPaciente = localStorage.getItem("listadoPaciente");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(listaPacienteLS);

  for (i in listadoPaciente) {
    document.write(listadoPaciente[i]);
    /*     console.log(typeof localStorage.getItem("listado"));
    document.write(localStorage.getItem("listado")); */
  }
  e.preventDefault();
});

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

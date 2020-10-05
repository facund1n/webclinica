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

let listadoPacienteV = localStorage.getItem("pacientesV")
  ? JSON.parse(localStorage.getItem("pacientesV"))
  : [];

let listadoMedicoV = localStorage.getItem("medicosV")
  ? JSON.parse(localStorage.getItem("medicosV"))
  : [];

function mensaje() {
  if (
    localStorage.getItem("pacientes") == null &&
    localStorage.getItem("medicos") == null
  ) {
    document.getElementById(
      "divTop"
    ).innerHTML = `<div class="alert-success lead">Data Base Response: No hay usuarios para validar</div>`;
  } else {
    document.getElementById(
      "divTop"
    ).innerHTML = `<div class="alert-warning lead">Data Base Response: Hay usuarios para validar</div>`;
  }
}
mensaje();

class Paciente {
  constructor(tipo, user, nombre, password, fechaNacimiento, validado) {
    this._tipo = tipo;
    this._user = user;
    this._nombre = nombre;
    this._password = password;
    this._fechaNacimiento = fechaNacimiento;
    this._validado = validado;
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
}

//FUNCION CONSULTA PACIENTES ALMAC EN LS
document.getElementById("consultaP").addEventListener("click", function (e) {
  let serializarPaciente = localStorage.getItem("pacientes");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(serializarPaciente);

  if (localStorage.getItem("pacientes") != null) {
    for (i of listadoPaciente) {
      const elemento = document.createElement("div");
      elemento.innerHTML = `<div class="card" style="">
      <div class="card-body">
      <h5 class="card-title">Tipo: ${i._tipo}</h5>
      <h5 class="card-title">Nombre: ${i._nombre}</h5>
      <h5 class="card-title">Usuario: ${i._user}</h5>
      <h5 class="card-title">Validado: ${i._validado}</h5>
      </div>
    </div>`;
      document.getElementById("div1").appendChild(elemento);
    }
  } else {
    alert("No hay PACIENTES para validar");
  }
  e.preventDefault();
});

//METODO VALIDAR PACIENTES
document.getElementById("validar").addEventListener("click", function (e) {
  let serializarPaciente = localStorage.getItem("pacientes");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(listaPacienteLS);
  if (localStorage.getItem("pacientes") != null) {
    for (i of listadoPaciente) {
      i._validado = true;

      let tipo = i._tipo;
      user = i._user;
      nombre = i._nombre;
      password = i._password;
      fechaNacimiento = i._fechaNacimiento;
      validado = i._validado;

      paciente = new Paciente(
        tipo,
        user,
        nombre,
        password,
        fechaNacimiento,
        validado
      );
      listadoPacienteV.push(paciente);
    }

    localStorage.setItem("pacientesV", JSON.stringify(listadoPacienteV));
    const dataPV = JSON.parse(localStorage.getItem("pacientesV"));

    localStorage.removeItem("pacientes");
    alert("Validado Correctamente");
  }
  e.preventDefault();
});

document.getElementById("consultaM").addEventListener("click", function (e) {
  let serializarMedico = localStorage.getItem("medicos");
  listaMedicoLS = serializarMedico;
  listadoMedico = JSON.parse(listaMedicoLS);
  if (localStorage.getItem("medicos") != null) {
    for (y of listadoMedico) {
      const elemento2 = document.createElement("div");
      elemento2.innerHTML = `<div class="card" style="">
    <div class="card-body">
    <h5 class="card-title">Tipo: ${y._tipo}</h5>
    <h5 class="card-title">Nombre: ${y._nombre}</h5>
    <h5 class="card-title">Legajo: ${y._legajo}</h5>
    <h5 class="card-title">Validado:  ${y._validado}</h5>
    </div>
  </div>`;
      document.getElementById("div2").appendChild(elemento2);
    }
  } else {
    alert("No hay MÉDICOS para validar");
  }
  e.preventDefault();
});

document.getElementById("validar").addEventListener("click", function (e) {
  let serializarMedico = localStorage.getItem("medicos");
  listaMedicoLS = serializarMedico;
  listadoMedico = JSON.parse(listaMedicoLS);
  if (localStorage.getItem("medicos") != null) {
    for (y of listadoMedico) {
      y._validado = true;

      let tipo = y._tipo;
      legajo = y._legajo;
      nombre = y._nombre;
      password = y._password;
      validado = y._validado;

      medico = new Medico(tipo, legajo, nombre, password, validado);
      listadoMedicoV.push(medico);
    }

    localStorage.setItem("medicosV", JSON.stringify(listadoMedicoV));

    const dataPM = JSON.parse(localStorage.getItem("medicosV"));

    localStorage.removeItem("medicos");
    alert("Validado Correctamente");
  }
});

document.getElementById("refresh").addEventListener("click", function (e) {
  location.reload();
  e.preventDefault();
});

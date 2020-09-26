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

document.getElementById("consultaP").addEventListener("click", function (e) {
  let serializarPaciente = localStorage.getItem("pacientes");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(serializarPaciente);

  if (localStorage.getItem("pacientes") != null) {
    for (i of listadoPaciente) {
      document.getElementById("div1").innerHTML = `<div class="card" style="">
      <div class="card-body">
      <h5 class="card-title">Tipo: ${i._tipo}</h5>
      <h5 class="card-title">Nombre: ${i._nombre}</h5>
      <h5 class="card-title">Usuario: ${i._user}</h5>
      <h5 class="card-title">Validado: ${i._validado}</h5>
      </div>
    </div>`;
    }
  } else {
    document.getElementById(
      "div1"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Pacientes para validar
    </button>`;
  }

  e.preventDefault();
});

document.getElementById("validar").addEventListener("click", function (e) {
  let serializarPaciente = localStorage.getItem("pacientes");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(serializarPaciente);
  if (localStorage.getItem("pacientes") != null) {
    for (i of listadoPaciente) {
      i._validado = true;
      console.log(i);

      localStorage.setItem("pacientesV", JSON.stringify(i));
      localStorage.removeItem("pacientes");
    }
    document.getElementById(
      "div1"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
  } else {
    document.getElementById(
      "div1"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
    document.getElementById(
      "div1"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Pacientes para validar
    </button>`;
  }

  e.preventDefault();
});

document.getElementById("consultaM").addEventListener("click", function (e) {
  let serializarMedico = localStorage.getItem("medicos");
  listaMedicoLS = serializarMedico;
  listadoMedico = JSON.parse(listaMedicoLS);
  if (localStorage.getItem("medicos") != null) {
    for (y of listadoMedico) {
      document.getElementById("div2").innerHTML = `<div class="card" style="">
    <div class="card-body">
    <h5 class="card-title">Tipo: ${y._tipo}</h5>
    <h5 class="card-title">Nombre: ${y._nombre}</h5>
    <h5 class="card-title">Legajo: ${y._legajo}</h5>
    <h5 class="card-title">Validado:  ${y._validado}</h5>
    </div>
  </div>`;
    }
  } else {
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
  No hay Médicos para validar
  </button>`;
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
      console.log(y);

      localStorage.setItem("medicosV", JSON.stringify(y));
      localStorage.removeItem("medicos");
    }
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
  } else {
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Médicos para validar
    </button>`;
  }
  e.preventDefault();
});

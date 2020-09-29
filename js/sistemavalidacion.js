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
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Pacientes para validar
    </button>`;
  }
  setTimeout(function () {
    document.getElementById("div2").remove();
  }, 3500);

  e.preventDefault();
});

//METODO VALIDAR PACIENTES
document.getElementById("validar").addEventListener("click", function (e) {
  let serializarPaciente = localStorage.getItem("pacientes");
  listaPacienteLS = serializarPaciente;
  listadoPaciente = JSON.parse(serializarPaciente);
  if (localStorage.getItem("pacientes") != null) {
    for (i of listadoPaciente) {
      i._validado = true;
      localStorage.setItem("pacientesV", JSON.stringify(listadoPaciente));
    }
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
    localStorage.removeItem("pacientes");
  } else {
    document.getElementById(
      "div2"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Pacientes para validar
    </button>`;
  }
  setTimeout(function () {
    document.getElementById("div2").remove();
  }, 3500);
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
      document.getElementById("div3").appendChild(elemento2);
    }
  } else {
    document.getElementById(
      "div4"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
  No hay Médicos para validar
  </button>`;
    setTimeout(function () {
      document.getElementById("div4").remove();
    }, 3500);
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
      localStorage.setItem("medicosV", JSON.stringify(listadoMedico));
      localStorage.removeItem("medicos");
    }
    document.getElementById(
      "div4"
    ).innerHTML = `<button type="button" class="btn btn-success col">se validó correctamente </button>`;
    setTimeout(function () {
      document.getElementById("div4").remove();
    }, 3500);
  } else {
    document.getElementById(
      "div4"
    ).innerHTML = `<button type="button" class="btn btn-danger col">
    No hay Médicos para validar
    </button>`;

    setTimeout(function () {
      document.getElementById("div4").remove();
    }, 3500);
  }
  e.preventDefault();
});

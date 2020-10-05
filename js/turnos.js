// Condición para saber si Inició sesión o NO.
function verifLogin() {
  var clave1 = localStorage.getItem("patientLogIn");
  clave2 = JSON.parse(clave1);
  if (clave2 == false || clave1 == null) {
    alert("Debe inciar sesión.");
    window.location = "http://127.0.0.1:5500/login.html";
  }
}
verifLogin();

// Condición para cerrar sesión:

document.getElementById("salir").addEventListener("click", function (e) {
  localStorage.setItem("patientLogIn", false);
  window.location = "http://127.0.0.1:5500/index.html";
  e.preventDefault();
});

// Pacientes
let turnosLista = localStorage.getItem("turnos")
  ? JSON.parse(localStorage.getItem("turnos"))
  : [];

class Turno {
  constructor(nombre, especialidad, medico, dia, hora, problematica) {
    this._nombre = nombre;
    this._especialidad = especialidad;
    this._medico = medico;
    this._dia = dia;
    this._hora = hora;
    this._problematica = problematica;
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
class Vista {
  agregarTurno(turno) {
    const idTurnos = document.getElementById("lista");
    const elemento = document.createElement("div");
    elemento.innerHTML = `
      <div class="alert alert-success" role="alert">
        <p>Especialidad: ${turno._especialidad}</p>
        <p>Médico: ${turno._medico}</p>
        <p>Día: ${turno._dia}</p>
        <p>Horario: ${turno._hora}</p>
        <p>Problemática: ${turno._problematica}</p>
        
      </div>
      `;
    idTurnos.appendChild(elemento);
  }
  // <a href="#" class="btn btn-danger btn-block" name="Eliminar" >Eliminar</a> INSERTAR EN LÍNEA 58 SI SE SOLUCIONA EL METODO PARA ELIMINAR EL ULTIMO KEY DEL ARRAY EN LS

  mostrarMensaje(mensaje, clase) {
    const div = document.createElement("div");
    div.className = clase;
    div.appendChild(document.createTextNode(mensaje));
    const divMensaje = document.getElementById("miMensaje");
    divMensaje.appendChild(div);

    setTimeout(function () {
      document.getElementsByClassName("alert")[0].remove();
    }, 3000);
  }

  /*   eliminarTurno(elemento) {
    elemento.target.parentElement.remove();
    var turnosLS = localStorage.getItem("turnos");
    var arrelegoTurnos = JSON.parse(turnosLS);
    for (var d = 0; d < arrelegoTurnos.length; d++) {
      localStorage.removeItem("turnos");
    }
    arrelegoTurnos.pop();

    localStorage.setItem("turnos", JSON.stringify(arrelegoTurnos));
  } */
}

const vista = new Vista();
const listaTurno = new Lista();

for (l of listaTurno.lista) {
  vista.agregarTurno(turno);
}

var pacientesV = localStorage.getItem("pacientesV");
pacientesParse = JSON.parse(pacientesV);
for (x of pacientesParse) {
}

const evento = document.getElementById("formulario");
evento.addEventListener("submit", function (e) {
  let nombre = localStorage.getItem("userName"),
    especialidad = document.getElementById("especialidad").value,
    medico = document.getElementById("medico").value,
    dia = document.getElementById("dia").value,
    hora = document.getElementById("turno").value,
    problematica = document.getElementById("problematica").value;

  turno = new Turno(nombre, especialidad, medico, dia, hora, problematica);

  turnosLista.push(turno);
  localStorage.setItem("turnos", JSON.stringify(turnosLista));
  let dataT = JSON.parse(localStorage.getItem("turnos"));

  vista.mostrarMensaje("Turno Cargado", "alert alert-success");
  vista.agregarTurno(turno);
  e.preventDefault();
});

document.getElementById("lista").addEventListener("click", function (e) {
  const vista = new Vista();
  vista.mostrarMensaje("Turno eliminado", "alert alert-danger");
  /*  vista.eliminarTurno(e); */
});

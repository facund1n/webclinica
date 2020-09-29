function verifLogin() {
  if (localStorage.getItem("patientLogIn") == false) {
    alert("Debe inciar sesión.");
    window.location = "http://127.0.0.1:5500/login.html";
  }
}
verifLogin();
// Pacientes
let listadoPacientes = [];

class Pacientes {
  constructor(nombre, especialidad, medico, dia, hora, problematica) {
    this._nombre = nombre;
    this._especialidad = especialidad;
    this._medico = medico;
    this._dia = dia;
    this._hora = hora;
    this._problematica = problematica;
  }
}

function confirmacionTurno() {
  const idTurnos = document.getElementById("detalle-turnos");
  const elemento = document.createElement("div");
  elemento.innerHTML = `
        <div class="alert alert-success" role="alert">
        Turno Confirmado con éxito!
      </div>
      `;
  idTurnos.appendChild(elemento);
}

const evento = document.getElementById("formulario");
evento.addEventListener("submit", function (e) {
  const nombre = document.getElementById("nombre").value,
    especialidad = document.getElementById("especialidad").value,
    medico = document.getElementById("medico").value,
    dia = document.getElementById("dia").value,
    hora = document.getElementById("hora").value,
    problematica = document.getElementById("problematica").value;

  const instanciaPaciente = new Pacientes(
    nombre,
    especialidad,
    medico,
    dia,
    hora,
    problematica
  );

  listadoPacientes.push(instanciaPaciente);

  const jsonTurnos = JSON.stringify(listadoPacientes);
  localStorage.setItem("listadoPacientes", jsonTurnos);

  confirmacionTurno();

  e.preventDefault();
});

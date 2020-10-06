let serializarMedicos = localStorage.getItem("medicosV");
medico = JSON.parse(serializarMedicos);
user = localStorage.getItem("medicName");

for (f of medico) {
  if (f._nombre == user) {
    const elemento1 = document.createElement("div");
    elemento1.innerHTML = `
          <div class="fondoFormmedic my-2">
          <p class="lead">Bienevenido: </p>
          <h5 class="font-weight-bold ">${f._nombre}</h5>
          </div>
        `;
    document.getElementById("divNombre").appendChild(elemento1);
  }
}

document.getElementById("filtro").addEventListener("change", function (e) {
  const filtro = document.getElementById("filtro").value;
  arrayTurnos = JSON.parse(localStorage.getItem("turnos"));
  for (d of arrayTurnos) {
    if (d._especialidad == filtro) {
      const tbody = document.getElementById("div");
      const elemento2 = document.createElement("tr");
      elemento2.innerHTML = `
          <td>${d._nombre}</td>
          <td>${d._dia}</td>
          <td>${d._hora}</td>
          <td>${d._problematica}</td>
          <td>${d._especialidad}</td>
          `;
      tbody.appendChild(elemento2);
    }
  }
  e.preventDefault();
});

document.getElementById("filtro").addEventListener("change", function (e) {
  var arrayTurnos = JSON.parse(localStorage.getItem("turnos"));
  for (d of arrayTurnos) {
    if (d._especialidad == user) {
      const idTurnosCargados = document.getElementById("consultaTurnos");
      const elemento = document.createElement("div");
      elemento.innerHTML = `
      <div class="alert alert-success" role="alert">
        <p>Especialidad: ${d._especialidad}</p>
        <p>Médico: ${d._medico}</p>
        <p>Día: ${d._dia}</p>
        <p>Horario: ${d._hora}</p>
        <p>Problemática: ${d._problematica}</p>
        
      </div>
      `;
      idTurnosCargados.appendChild(elemento);
      /* arrPorID = arrayTurnos.filter(filtrarPorID); */
    }
  }
  e.preventDefault();
});

document.getElementById("salir").addEventListener("click", function (e) {
  localStorage.setItem("medicLogIn", false);
  window.location = "http://127.0.0.1:5500/index.html";
  e.preventDefault();
});

document.getElementById("refresh").addEventListener("click", function (e) {
  location.reload();
  e.preventDefault();
});

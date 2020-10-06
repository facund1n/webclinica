let serializarMedicos = localStorage.getItem("medicosV");
medico = JSON.parse(serializarMedicos);
user = localStorage.getItem("medicName");

for (f of medico) {
  if (f._nombre == user) {
    const elemento1 = document.createElement("div");
    elemento1.innerHTML = `
          <div class="fondoFormmedic my-2">
          <p class="lead">Bienevenido: </p>
          <h4 class="font-weight-bold ">${f._nombre}</h4>
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

document.getElementById("salir").addEventListener("click", function (e) {
  localStorage.setItem("medicLogIn", false);
  window.location = "http://127.0.0.1:5500/index.html";
  e.preventDefault();
});

document.getElementById("refresh").addEventListener("click", function (e) {
  location.reload();
  e.preventDefault();
});

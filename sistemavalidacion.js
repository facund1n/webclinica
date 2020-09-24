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

  for (i of listadoPaciente) {
  }

  console.log(i._user), e.preventDefault();
});

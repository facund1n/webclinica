let listadoPacientes = JSON.parse(localStorage.getItem("listadoPacientes"));

for (let i = 0; i < listadoPacientes.length; i++) {
    paciente = listadoPacientes[i];
    agregar();
};

function agregar() {
    document.getElementById("tabla").innerHTML += "<tbody><td>" + paciente._nombre + "</td><td>" + paciente._dia + "</td><td>" + paciente._hora + "</td><td>" + paciente._problematica + "</td></tbody>";
};
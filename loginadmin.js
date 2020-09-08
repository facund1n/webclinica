console.log("estoy en: login admin.js");

class Admin {
  constructor(adminUser, adminPass) {
    this._adminUser = adminUser;
    this._adminPass = adminPass;
  }

  get Admin() {
    return this._adminUser;
  }

  verificoAdmin() {
    if (this._adminUser === "Admin" && this._adminPass === "Admin") {
      return true;
    } else {
      return false;
    }
  }
}

const validacionAdmin = document
  .getElementById("loginAdmin")
  .addEventListener("submit", function (e) {
    const adminUser = document.getElementById("adminUser").value;

    const adminPass = document.getElementById("adminPass").value;

    const admin = new Admin(adminUser, adminPass);

    if (admin.verificoAdmin()) {
      alert("Bienvenido Admin");
      localStorage.setItem("adminLogOn", true);
      window.location = "http://127.0.0.1:5500/administracion.html";
    } else {
      alert("Admin no existente.");
      localStorage.setItem("adminLogOn", false);
    }
    e.preventDefault();
  });

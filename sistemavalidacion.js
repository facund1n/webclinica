let logOut = document
  .getElementById("logOut")
  .addEventListener("submit", function (e) {
    /* localStorage.setItem("adminLogOn", false); */
    window.location = "http://127.0.0.1:5500/admin.html";
    e.preventDefault();
  });

function obtenerLocalStorage() {

    // Obtener dato simple
    let usuario = localStorage.getItem("usuario");

    // Obtener objeto
    let persona = JSON.parse(localStorage.getItem("persona"));

    console.log("Usuario:", usuario);
    console.log("Persona:", persona);

    alert("Revisa la consola (F12)");
}
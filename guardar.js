function guardarLocalStorage(){
    let nombre = "Pepe";
    
    localStorage.setItem("usuario", nombre);

    const persona = {nombre:"Jose", edad: 30, nacionalidad: "mexicana"}

    localStorage.setItem("ususario", persona)

    // Convertir objeto a string
    localStorage.setItem("persona", JSON.stringify(persona));

    alert("Datos guardados en LocalStorage");
}
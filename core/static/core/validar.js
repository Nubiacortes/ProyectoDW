function validar() {
    debugger;
var nombre, email,telefono, mensaje;
nombre = document.getElementById("nombre").value;
email = document.getElementById("email").value;
telefono = document.getElementById("telefono").value;
mensaje = document.getElementById("mensaje").value;

if( nombre == " " || email== " " || telefono== " " || mensaje== " " ){
alert("Todos los campos deben ser completados"); 
return false;
}
else if (nombre.length>30) {
    alert ("El nombre es muy largo");
    return false;
}   
else if (email.length>30) {
    alert ("El email es muy largo");
    return false;
}

else if (mensaje.length>30) {
    alert ("El mensaje es muy larga");
    return false;
}
else if (isNaN(telefono)) {
    alert("El telefono no es un numero ")
}

}
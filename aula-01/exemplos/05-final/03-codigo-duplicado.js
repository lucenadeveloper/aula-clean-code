// Sujo
function validarUsuario() {
    if (usuario.tipo === "admin") {
        console.log("Acesso total");
    }

    if (usuario.tipo === "admin") {
        registrarLog();
    }
}

function registrarLog(usuario) {
    console.log("Acesso total");
}



// Limpo
function validarUsuarioAdmin() {
    if (usuario.tipo === "admin") {
        console.log("Acesso total");
        registrarLog(usuario);
    }
}
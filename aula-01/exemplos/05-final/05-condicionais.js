// Sujo
function acessa() {
    if (usuario) {
        if (usuario.ativo) {
            if (!usuario.bloqueado) {
                acessarSistema(usuario);
            }
        }
    }
}

// Limpo
function validarUsuario(usuario) {
    if (!usuario || !usuario.ativo || usuario.bloqueado) return;
    acessarSistema(usuario);
}
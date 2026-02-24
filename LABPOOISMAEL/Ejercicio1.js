var Usuario = /** @class */ (function () {
    function Usuario(nombre, apellido, telefono, email, codigo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.codigo = codigo;
    }
    Usuario.prototype.obtenerNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.mostrarInformacion = function () {
        console.log("Nombre completo:", this.obtenerNombreCompleto());
        console.log("Teléfono:", this.telefono);
        console.log("Correo:", this.email);
    };
    return Usuario;
}());
var usuario1 = new Usuario("Danis", "Ismael", "6051-5170", "danisvides05@gmail.com", "u20240543");
usuario1.mostrarInformacion();

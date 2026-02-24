class Usuario {

    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    private codigo: string;

    constructor(nombre: string, apellido: string, telefono: string, email: string, codigo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.email = email;
        this.codigo = codigo;
    }

    obtenerNombreCompleto(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    mostrarInformacion(): void {
        console.log("Nombre completo:", this.obtenerNombreCompleto());
        console.log("Teléfono:", this.telefono);
        console.log("Correo:", this.email);
    }
}

const usuario1 = new Usuario(
    "Danis",
    "Ismael",
    "6051-5170",
    "danisvides05@gmail.com",
    "u20240543"
);

usuario1.mostrarInformacion();
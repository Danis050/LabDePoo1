class Articulo {

    nombreProducto: string;
    valorUnitario: number;
    unidades: number;

    constructor(nombreProducto: string, valorUnitario: number, unidades: number) {
        this.nombreProducto = nombreProducto;
        this.valorUnitario = valorUnitario;
        this.unidades = unidades;
    }

    private calcularSubtotal(): number {
        return this.valorUnitario * this.unidades;
    }

    private calcularDescuento(porcentaje: number): number {
        return this.calcularSubtotal() * (porcentaje / 100);
    }

    private calcularIVA(monto: number): number {
        return monto * 0.13;
    }

    generarFactura(descuentoAplicado: number): void {

        const subtotal = this.calcularSubtotal();
        const descuento = this.calcularDescuento(descuentoAplicado);
        const montoConDescuento = subtotal - descuento;
        const impuesto = this.calcularIVA(montoConDescuento);
        const totalFinal = montoConDescuento + impuesto;

        console.log("===== DETALLE DE COMPRA =====");
        console.log("Producto:", this.nombreProducto);
        console.log("Unidades:", this.unidades);
        console.log("Precio Unitario: $" + this.valorUnitario);
        console.log("Subtotal: $" + subtotal.toFixed(2));
        console.log("Descuento aplicado: $" + descuento.toFixed(2));
        console.log("IVA (13%): $" + impuesto.toFixed(2));
        console.log("TOTAL A PAGAR: $" + totalFinal.toFixed(2));
    }
}

const articulo1 = new Articulo("IPad Pro 12Generacion", 950,69);
articulo1.generarFactura(10);
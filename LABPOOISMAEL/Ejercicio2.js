var Articulo = /** @class */ (function () {
    function Articulo(nombreProducto, valorUnitario, unidades) {
        this.nombreProducto = nombreProducto;
        this.valorUnitario = valorUnitario;
        this.unidades = unidades;
    }
    Articulo.prototype.calcularSubtotal = function () {
        return this.valorUnitario * this.unidades;
    };
    Articulo.prototype.calcularDescuento = function (porcentaje) {
        return this.calcularSubtotal() * (porcentaje / 100);
    };
    Articulo.prototype.calcularIVA = function (monto) {
        return monto * 0.13;
    };
    Articulo.prototype.generarFactura = function (descuentoAplicado) {
        var subtotal = this.calcularSubtotal();
        var descuento = this.calcularDescuento(descuentoAplicado);
        var montoConDescuento = subtotal - descuento;
        var impuesto = this.calcularIVA(montoConDescuento);
        var totalFinal = montoConDescuento + impuesto;
        console.log("===== DETALLE DE COMPRA =====");
        console.log("Producto:", this.nombreProducto);
        console.log("Unidades:", this.unidades);
        console.log("Precio Unitario: $" + this.valorUnitario);
        console.log("Subtotal: $" + subtotal.toFixed(2));
        console.log("Descuento aplicado: $" + descuento.toFixed(2));
        console.log("IVA (13%): $" + impuesto.toFixed(2));
        console.log("TOTAL A PAGAR: $" + totalFinal.toFixed(2));
    };
    return Articulo;
}());
var articulo1 = new Articulo("IPad Pro 12Generacion", 950, 69);
articulo1.generarFactura(10);

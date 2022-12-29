//Web de venta de tazas personalizadas.

alert("Bienvenido! \nCompra mínima $1000")

do {

    function sumarTotalDeProd(prod1 = 0, prod2 = 0, prod3 = 0) {
        return prod1 + prod2 + prod3
    }

    function desTotalDeProd(prod1 = 0, prod2 = 0) {
        return prod1 - prod2
    }

    const calcularIva = productosTotalesSinIva => productosTotalesSinIva * 0.21

    const tipoDePago = (opciones, pagoEnEfectivo, pagoEnTarjeta) => {
        switch (opciones) {
            case "1":
                return alert(("Recibiste un descuento de $200 por pagar en efectivo \nImporte final $") + (pagoEnEfectivo - 200))

            case "2":
                return alert(("Recibiste un recargo de $200 por pagar con tarjeta \nImporte final $") + (pagoEnTarjeta + 200))

            default:
                return alert("No se pudo calcular el descuento o el interés")
        }
    }

    let producto1 = Number(prompt("Ingresa precio del primer producto"))
    let producto2 = Number(prompt("Ingrese precio del segundo producto"))
    let producto3 = Number(prompt("Ingrese precio del tercer producto"))
    
    if (isNaN (producto1) || isNaN (producto2) || isNaN (producto3)){
        alert ("Ingresar importe SOLO en NUMEROS")
        continue
    }
        
    let prodctosFinales = sumarTotalDeProd(producto1, producto2, producto3)
    alert("Sub total $" + prodctosFinales)
    
    if (prodctosFinales >= 1000) {

        let ivaDeLosProd = calcularIva(prodctosFinales)
        alert("IVA Discriminado $" + ivaDeLosProd)


        let prodFinalConIva = sumarTotalDeProd(prodctosFinales, ivaDeLosProd)
        alert("Total IVA incluído $" + prodFinalConIva)
        

        let calcularDescOInt = prompt("Ingresa el tipo de pago, en efectivo obtenés un descuento de $200 y con tarjeta un interés de $200 \n 1 Para pago en efectivo \n 2 Para pago en tarjeta")

        tipoDePago(calcularDescOInt, prodFinalConIva, prodFinalConIva)


    } else {
        alert("La compra debe superar los $1000")
    }

} while (confirm("Quiere seguir comprando?")) {
}

alert("Gracias por tu compra!")



document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.getElementById('cart-icon');

    if (!cartIcon) {
        console.error("No se encontró el contenedor del ícono del carrito.");
    } else {
        console.log("El ícono del carrito está cargado correctamente.");
    }
});

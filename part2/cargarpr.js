//aun en edicion formulario para cargar el producto
// Capturamos el formulario y la lista de productos
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Función que se ejecuta al enviar el formulario
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenimos el comportamiento por defecto (recargar la página)

    // Capturamos los valores del formulario
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productCategory = document.getElementById('productCategory').value;
    const productSize = document.getElementById('productSize').value;
    const productColor = document.getElementById('productColor').value;
    const productImage = document.getElementById('productImage').files[0];

    // Verificamos que se haya subido una imagen
    if (productImage) {
        const reader = new FileReader();

        reader.onloadend = function() {
            const imageUrl = reader.result;

            // Crear un objeto con los datos del producto
            const product = {
                name: productName,
                description: productDescription,
                category: productCategory,
                size: productSize,
                color: productColor,
                image: imageUrl
            };

            // Guardar el producto en LocalStorage
            saveProductToLocalStorage(product);

            // Mostrar el producto en la página
            addProductToPage(product);
        };

        // Leer la imagen como URL
        reader.readAsDataURL(productImage);
    }
});

// Función para guardar un producto en LocalStorage
function saveProductToLocalStorage(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
}

// Función para mostrar los productos almacenados en la página
function addProductToPage(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p><strong>Categoría:</strong> ${product.category}</p>
        <p><strong>Talla:</strong> ${product.size}</p>
        <p><strong>Descripción:</strong> ${product.description}</p>
        <p><strong>Color:</strong> <span style="background-color:${product.color}; width:20px; height:20px; display:inline-block;"></span></p>
        <img src="${product.image}" alt="${product.name}" width="100">
    `;

    productList.appendChild(productDiv);
}

// Función para cargar y mostrar los productos desde LocalStorage al cargar la página
window.onload = function() {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(function(product) {
        addProductToPage(product);
    });
};

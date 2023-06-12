/* 
Actividad:
    Realizar una clase “ProductManager” que gestione un conjunto de productos
        -Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío
    Cada producto que gestione debe contar con las propiedades:
        
        - title (nombre del producto)
        - description (descripción del producto)
        - price (precio)
        - thumbnail (ruta de imagen)
        - code (código identificador)
        - stock (número de piezas disponibles)
    Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
        
        - Validar que no se repita el campo “code” y que todos los campos sean obligatorios
        - Al agregarlo, debe crearse con un id autoincrementable
    Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
    
    Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
        
        -En caso de no coincidir ningún id, mostrar en consola un error “Not found”
*/

class ProductManager{

    //Crear array vacio
    constructor(){
       this.products = []
    }


    #id = 0

    addProduct(title, description, price, thumbnail, code, stock) {
        this.title = title    
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock 

    // Verificacion de la existencia de un producto con el mismo code y de falta de datos requeridos

    if ( ( this.products.some( p => p.code !== code) ) || this.products.length === 0 ) {
            if ( !!title && !!description && !!price && !!code && !!thumbnail && !!stock ) {
                this.#id++
                this.products.push( { id: this.#id, title, description, price, thumbnail, code, stock } )
            } else {
                console.log('Error: Todos los campos son requeridos para agregar un producto');
            }
        } else {
            console.log('Error: El dato CODE ingresado ya existe');
        }
    }

    // Obtener producto por su ID

    getProductByID = (productId) => {
        const product = this.products.find(product => product.id === productId)

        if(product) {
            return product
        }else{
            return`Error: El producto con id ${productId} no existe`

        }
    }

    //Muestra del arreglo de productos

    getProducts = () => {
        return this.products
    }


}   

const productManager = new ProductManager

productManager.getProducts() // Muestra del array vacio

//Agregar producto
productManager.addProduct('Producto prueba','Descripcion prueba', 500, 'Sin imagen', 'ABC123', 200)
//Agregar producto con dato CODE repetido
productManager.addProduct('Producto prueba','Descripcion prueba', 500, 'Sin imagen', 'ABC123', 200)
//Agregar producto con falta de dato requerido
productManager.addProduct('Producto prueba2','Descripcion prueba2', 300,  'ABC124', 150)

//Mostrar array con el contenido nuevo
console.log(productManager.getProducts())

//Mostrar producto existente buscado por su ID
console.log(productManager.getProductByID(1));

// Mostrar producto no existente en el array buscado por su ID
console.log(productManager.getProductByID(2));
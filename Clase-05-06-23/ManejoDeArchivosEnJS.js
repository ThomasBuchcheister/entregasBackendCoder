/* 



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


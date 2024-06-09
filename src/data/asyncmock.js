
export const listadoProductos = [
    {
        id: '1',
        categoria: 'SUSHIS',
        nombre: 'SUSHI ENVUELTO EN PANKO',
        descripcion: 'Deliciosos sushis envuelto en panko frito',
        imagen: '/assets/img/sushi-frito.jpg',
        precio: 7990,
    },
    {
        id: '2',
        categoria: 'SUSHIS',
        nombre: 'SUSHI ENVUELTO EN PALTA',
        descripcion: 'Deliciosos sushis envuelto en fresca palta',
        imagen: '../assets/img/sushi-palta.jpg',
        precio: 7990,
    },
    {
        id: '3',
        categoria: 'SUSHIS',
        nombre: 'SUSHI ENVUELTO EN QUESO',
        descripcion: 'Deliciosos sushis envuelto en delicioso queso crema philadelphia',
        imagen: '../assets/img/sushi-queso.jpg',
        precio: 7990,
    },
    {
        id: '4',
        categoria: 'SUSHIS',
        nombre: 'SUSHI ENVUELTO EN SALMÓN',
        descripcion: 'Deliciosos sushis envuelto en fresco salmon ',
        imagen: '../assets/img/sushi-salmon.jpg',
        precio: 7990,
    },
    {
        id: '5',
        categoria: 'GOHANS',
        nombre: 'GOHAN DE POLLO TEMPURA',
        descripcion: 'Deliciosos y frescos Gohans de exquisito pollo tempura',
        imagen: '../assets/img/gohan-pollo.jpeg',
        precio: 8990,
    },
    {
        id: '6',
        categoria: 'GOHANS',
        nombre: 'GOHAN DE CAMARON',
        descripcion: 'Deliciosos y frescos Gohans de camaron ecuatoriano',
        imagen: '../assets/img/gohan-camaron.jpg',
        precio: 8990,
    },
    {
        id: '7',
        categoria: 'GOHANS',
        nombre: 'GOHAN DE SALMON',
        descripcion: 'Deliciosos y frescos Gohans de fresco y delicioso salmon',
        imagen: '../assets/img/gohan-salmon.jpg',
        precio: 8990,
    },
    {
        id: '8',
        categoria: 'SASHIMIS',
        nombre: 'SASHIMI DE SALMON',
        descripcion: 'Deliciosos y frescos cortes de salmon premium',
        imagen: '../assets/img/sashimi-salmon.jpg',
        precio: 5990,
    },
    {
        id: '9',
        categoria: 'SASHIMIS',
        nombre: 'SASHIMI DE PULPO',
        descripcion: 'Deliciosos y frescos cortes de pulpo premium',
        imagen: '../assets/img/sashimi-pulpo.jpg',
        precio: 5990,
    },
    {
        id: '10',
        categoria: 'SASHIMIS',
        nombre: 'SASHIMI DE ATUN',
        descripcion: 'Deliciosos y frescos cortes de atun premium',
        imagen: '../assets/img/sashimi-atun.jpg',
        precio: 5990,
    },
    {
        id: '11',
        categoria: 'CEVICHES',
        nombre: 'CEVICHE DE REINETA Y CAMARON',
        descripcion: 'Deliciosos y frescos ceviche de reineta y camaron al estilo peruano japones',
        imagen: '../assets/img/ceviche-reineta-camaron.jpg',
        precio: 9990,
    },
    {
        id: '12',
        categoria: 'CEVICHES',
        nombre: 'CEVICHE DE SALMON',
        descripcion: 'Deliciosos y frescos ceviches de salmon al estilo peruano japones',
        imagen: '../assets/img/ceviche-salmon.jpg',
        precio: 9990,
    },
    {
        id: '13',
        categoria: 'CEVICHES',
        nombre: 'CEVICHE MIXTO',
        descripcion: 'Deliciosos y frescos ceviches de pescado, camaron, pulpo al estilo peruano',
        imagen: '../assets/img/ceviche-mixto.jpg',
        precio: 9990,
    },
    {
        id: '14',
        categoria: 'APERITIVOS',
        nombre: 'EMPANADAS DE CAMARON MANDARIN',
        descripcion: 'Deliciosas empanaditas al estilo japones de camaron y cebollin',
        imagen: '../assets/img/empanada-camaron.jpg',
        precio: 5990,
    },
    {
        id: '15',
        categoria: 'APERITIVOS',
        nombre: 'EMPANADAS DE POLLO MANDARIN',
        descripcion: 'Deliciosas empanaditas al estilo japones de pollo y cebollin',
        imagen: '../assets/img/empanada-pollo.jpg',
        precio: 5990,
    },
    {
        id: '16',
        categoria: 'APERITIVOS',
        nombre: 'GYOSAS DE POLLO',
        descripcion: 'Deliciosas gyosas al vapor de pollo y cebollin',
        imagen: '../assets/img/gyosas-pollo.jpg',
        precio: 5990,
    },
    {
        id: '17',
        categoria: 'APERITIVOS',
        nombre: 'GYOSAS DE CAMARON',
        descripcion: 'Deliciosas gyosas al vapor de camaron y cebollin',
        imagen: '../assets/img/gyosas-camaron.jpg',
        precio: 5990,
    }

]

export const getProducts = (idCategoria) => {
    
    const listado = idCategoria ? listadoProductos.filter(unProducto => unProducto.categoria === idCategoria) : listadoProductos


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            listado.length > 0 ?
            resolve(listado)
            :
            reject('no hay productos')
        }, 500)
    })
}
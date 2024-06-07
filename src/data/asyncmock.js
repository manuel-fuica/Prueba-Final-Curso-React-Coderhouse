export const listadoProductos = [
    {
        id: '1',
        categoria: 'sushis',
        nombre: 'sushis',
        descripcion: 'Deliciosos sushis en diferentes sabores',
        imagen: './assets/img/sushi.png',
        precio: 7.990,
    },
    {
        id: '2',
        categoria: 'gohans',
        nombre: 'gohans',
        descripcion: 'Deliciosos y frescos Gohans de salmon, camaron y mixtos',
        imagen: '/gohan.png',
        precio: 8.990,
    },
    {
        id: '3',
        categoria: 'sashimis',
        nombre: 'sashimis',
        descripcion: 'Deliciosos y frescos cortes de salmon, camaron y mixtos al estilo japones',
        imagen: '/sashimi.png',
        precio: 5.990,
    },
    {
        id: '4',
        nombre: 'ceviches',
        categoria: 'ceviches',
        descripcion: 'Deliciosos y frescos ceviches de salmon, camaron y mixtos al estilo peruano',
        imagen: '/ceviche.png',
        precio: 9.990,
    },
    {
        id: '5',
        nombre: 'aperitivos',
        categoria: 'aperitivos',
        descripcion: 'Deliciosos aperitivos para compartir con amigos y familiares',
        imagen: '/aperitivo.png',
        precio: 5.990,
    }

]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            listadoProductos.length > 0 ?
            resolve(listadoProductos)
            :
            reject('no hay productos')
        }, 500)
    })
}
import data from "../data/lista2_producto.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        resolve(data);
        
    })
}

export const pedirItemXId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id)
        if (item) {
            resolve(item)
        } else {
           
            reject({error: 'producto no encontrado'})

        }
    })
}
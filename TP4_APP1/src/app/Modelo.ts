export interface Ciudad {
    id: number,
    nombre: string,
    temperatura: number
}
export interface Listado {
    ciudades: Ciudad[]
}
export interface Alerta {
    cuando: Date,
    nombreCiudad: string,
    temperaturaActual: number
}
export interface Producto {
    id: string,
    nombre: string,
    categoria: string,
    precio: number,
    precioAnterior: number,
}

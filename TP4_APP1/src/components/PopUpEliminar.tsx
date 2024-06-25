import React from 'react';

interface eliminarProps {
    id: string;
    nombre: string;
    setShowPopupEliminar: (show: boolean) => void; // Add this line
}
function deleteProducto(id: string) {
    console.log(id)
}

export default function PopUpEliminar(props: eliminarProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Confirmation</h2>
            <p className="mb-4">¿Deseas eliminar {props.nombre}?</p>
            <div className="flex justify-center">
                <button
                    className="px-4 py-2 mr-2 w-full bg-rojo text-white rounded"
                    onClick={() => deleteProducto(props.id)}
                >
                    Eliminar
                </button>
                <button
                    className="px-4 py-2 w-full bg-gray-300 text-gray-700 rounded"
                    onClick={() => props.setShowPopupEliminar(false)}
                >
                    Cancelar
                </button>
            </div>
        </div>
    </div>
    )
}
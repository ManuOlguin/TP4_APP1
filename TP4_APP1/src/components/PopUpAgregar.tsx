import React, { useState } from 'react';

interface agregarProps {
    setShowPopupAgregar: (show: boolean) => void; // Add this line
}

function agregarProducto(id: string) {
    console.log(id)
}

export default function PopUpAgregar(props: agregarProps) {
    const [productId, setProductId] = useState('');

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => props.setShowPopupAgregar(false)}>
            
            <div className="bg-white p-8 rounded-lg shadow" onClick={(e) => e.stopPropagation()}>

                <h2 className="text-xl text-black font-bold mb-4">Agregar producto</h2>
                <p className="mb-4">Ingrese el ID de Mercado Libre del producto</p>
                <input
                    type="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    className="mb-4 px-4 py-2 w-full bg-white border rounded"
                    placeholder="ID del producto"
                />
                <div className="flex">
                    <button
                        className="px-4 py-2 bg-verde w-full text-white rounded"
                        onClick={() => agregarProducto(productId)}
                    >
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}
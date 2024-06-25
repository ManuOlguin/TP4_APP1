import { Producto } from "../app/Modelo";
import React, { useState } from "react";
import PopUpAgregar from "../components/PopUpAgregar"; // Adjust the import path as necessary

import ProductoCard from "./ProductoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
interface CategoriaProps {
  categoria: string;
  productos: Producto[];
}

export default function Categoria(props: CategoriaProps) {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <>
      <div className="pb-5">
        <h2 className="text-xl">{props.categoria}</h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 p-4 border-t-solid border-t-2">
          {props.productos.map((c: Producto) => (
            <ProductoCard key={c.id} producto={c}></ProductoCard>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn btn-xl btn-circle border-none hover:bg-green-700 my-4 mx-2 text-xl bg-verde text-white" onClick={togglePopup}>
            <FontAwesomeIcon icon={faAdd} />
          </button>
        </div>
      </div>
      {showPopup && <PopUpAgregar setShowPopupAgregar={setShowPopup} />}
    </>
  );
}

"use client"

import { useEffect, useState } from "react";
import { Listado } from "./Modelo";
import Link from 'next/link'
import { api } from "./utils";
import Ciudad from "../components/Ciudad";
import Navbar from "../components/Navbar";
import { Producto } from "../app/Modelo";
import Categoria from "../components/Categoria";
const LISTADO_INICIAL: Listado = { ciudades: [] };


export const productos: Producto[] = [
  {
    id: "1",
    nombre: "Laptop Gamer",
    categoria: "Electrónica",
    precio: 1500,
    precioAnterior: 2000,
  },
  {
    id:  "2",
    nombre: "Smartphone Pro",
    categoria: "Electrónica",
    precio: 800,
    precioAnterior: 1000,
  },
  {
    id:  "3",
    nombre: "Cafetera Automática",
    categoria: "Electrodomésticos",
    precio: 120,
    precioAnterior: 150,
  },
  {
    id:  "4",
    nombre: "Teclado Mecánico RGB",
    categoria: "Accesorios",
    precio: 70,
    precioAnterior: 90,
  },
  {
    id:  "5",
    nombre: "Mouse Inalámbrico",
    categoria: "Accesorios",
    precio: 40,
    precioAnterior: 60,
  }
];
function findUniqueCategorias(productos: Producto[]): string[] {
  const uniqueCategorias = new Set<string>();
  productos.forEach(producto => {
    uniqueCategorias.add(producto.categoria);
  });
  return Array.from(uniqueCategorias);
}

const categorias = findUniqueCategorias(productos);

export default function Home() {
  const [listado, setListado] = useState<Listado>(LISTADO_INICIAL);

  useEffect(() => {
    api<Listado>('/v1/listado')
      .then((data: Listado) => {
        setListado(data);
      })
  }, []);


  return (
    <>
      <Navbar />
      <div className="px-28">

          <Categoria categoria={"Tus Productos"} productos={productos}></Categoria>

        
      </div>
    </>
  );
}
/* 
<div className="grid flex 
        lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 
        gap-8 p-4">
        {listado.ciudades.map(c =>
          <Ciudad key={c.id} ciudad={c}></Ciudad>
        )}
</div>
      */

import React from "react";

const mockProducts = [
  {
    id: 1,
    name: "Mini Proyector LED",
    amazonPrice: "$59.99",
    supplier: "Alibaba",
    supplierPrice: "$21.30",
    profit: "$26.55",
    demand: "Alta",
    competition: "Media",
  },
  {
    id: 2,
    name: "Soporte de Celular para Auto",
    amazonPrice: "$19.99",
    supplier: "Walmart",
    supplierPrice: "$7.99",
    profit: "$9.85",
    demand: "Muy alta",
    competition: "Baja",
  },
];

export default function Dashboard() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: 'white', padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>FBA Inteligente - Panel de Productos</h1>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {mockProducts.map(product => (
          <div key={product.id} style={{ background: '#1e293b', padding: '1rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.25rem' }}>{product.name}</h2>
            <p>Precio en Amazon: {product.amazonPrice}</p>
            <p>Proveedor: {product.supplier} ({product.supplierPrice})</p>
            <p>Ganancia estimada: {product.profit}</p>
            <p>Demanda: {product.demand} / Competencia: {product.competition}</p>
            <div style={{ marginTop: '1rem' }}>
              <button style={{ marginRight: '1rem' }}>Comprar</button>
              <button>Saltar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

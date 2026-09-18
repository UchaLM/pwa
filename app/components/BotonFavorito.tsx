'use client'

import { useState } from 'react';

export default function BotonFavorito() {
  const [marcado, setMarcado] = useState(false);

  return (
    <button 
      onClick={() => setMarcado(!marcado)}
      className="mt-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded border border-yellow-300 hover:bg-yellow-200"
    >
      {marcado ? '★ Favorito' : '☆ Marcar como favorito'}
    </button>
  );
}

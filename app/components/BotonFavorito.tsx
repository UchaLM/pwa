'use client'

import { useState } from 'react';

export default function BotonFavorito() {
  const [marcado, setMarcado] = useState(false);

  return (
    <button onClick={() => setMarcado(!marcado)}>
      {marcado ? '★ Favorito' : '☆ Marcar como favorito'}
    </button>
  );
}

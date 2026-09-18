import Link from 'next/link';
import BotonFavorito from '@/app/components/BotonFavorito';

export default async function DetalleLibroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const res = await fetch(`http://127.0.0.1:8000/api/libros/${id}`);
  
  if (!res.ok) {
    return (
      <main className="p-8">
        <p className="text-red-500">No se pudo cargar el libro.</p>
        <Link href="/libros" className="text-blue-500 hover:underline">
          Volver al listado
        </Link>
      </main>
    );
  }

  const libro = await res.json();

  return (
    <main className="p-8">
      <Link href="/libros" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Volver al listado
      </Link>
      <div className="border p-6 rounded shadow-md bg-white">
        <h1 className="text-3xl font-bold mb-2">{libro.titulo}</h1>
        <p className="text-xl text-gray-700 mb-2">Autor: {libro.autor}</p>
        <p className="text-gray-600 mb-2">
          Año de publicación: {libro.anio_publicacion}
        </p>
        <p className="text-gray-600 mb-4">
          Estado: {libro.disponible !== false ? 'Disponible' : 'No disponible'}
        </p>
        <BotonFavorito />
      </div>
    </main>
  );
}

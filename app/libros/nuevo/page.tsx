import Link from 'next/link';
import { redirect } from 'next/navigation';

async function crearLibro(formData: FormData) {
  'use server'
  
  const titulo = formData.get('titulo');
  const autor = formData.get('autor');
  const anio_publicacion = formData.get('anio_publicacion');

  await fetch('http://127.0.0.1:8000/api/libros', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      titulo, 
      autor,
      anio_publicacion,
      disponible: true 
    }),
  });

  redirect('/libros');
}

export default function NuevoLibroPage() {
  return (
    <main className="p-8 max-w-md">
      <Link href="/libros" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Volver al listado
      </Link>
      <h1 className="text-2xl font-bold mb-6">Agregar un nuevo libro</h1>
      
      <form action={crearLibro} className="flex flex-col gap-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
          <input 
            type="text" 
            name="titulo" 
            id="titulo" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        
        <div>
          <label htmlFor="autor" className="block text-sm font-medium text-gray-700">Autor</label>
          <input 
            type="text" 
            name="autor" 
            id="autor" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="anio_publicacion" className="block text-sm font-medium text-gray-700">Año de publicación</label>
          <input 
            type="number" 
            name="anio_publicacion" 
            id="anio_publicacion" 
            required 
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <button 
          type="submit" 
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Crear libro
        </button>
      </form>
    </main>
  );
}

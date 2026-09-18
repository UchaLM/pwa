import Link from 'next/link';

export default async function LibrosPage() {
  const res = await fetch('http://127.0.0.1:8000/api/libros');
  
  if (!res.ok) {
    return (
      <main className="p-8">
        <p className="text-red-500">No se pudieron cargar los libros. Intentá nuevamente más tarde.</p>
      </main>
    );
  }

  const libros = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Libros</h1>
      <div className="grid gap-4">
        {libros.map((libro: any) => (
          <article key={libro.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">
              <Link href={`/libros/${libro.id}`} className="hover:underline">
                {libro.titulo}
              </Link>
              {libro.disponible === false && (
                <span className="text-red-500 text-sm ml-2">(No disponible)</span>
              )}
            </h2>
            <p className="text-gray-600">{libro.autor}</p>
          </article>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/libros/nuevo" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Agregar nuevo libro
        </Link>
      </div>
    </main>
  );
}

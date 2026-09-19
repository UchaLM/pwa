import Link from 'next/link';

export default async function LibrosPage() {
  const res = await fetch('http://127.0.0.1:8000/api/libros');
  
  if (!res.ok) {
    return <p>No se pudieron cargar los libros. Intentá nuevamente más tarde.</p>;
  }

  const libros = await res.json();

  return (
    <main>
      <h1>Catálogo de Libros</h1>
      <ul>
        {libros.map((libro: any) => (
          <li key={libro.id}>
            <Link href={`/libros/${libro.id}`}>
              {libro.titulo} - {libro.autor}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

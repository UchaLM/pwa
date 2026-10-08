import Link from 'next/link';

export default async function LibrosPage() {
  let libros = [];
  let error = false;

  try {
    const res = await fetch('http://127.0.0.1:8000/api/libros');
    if (!res.ok) {
      error = true;
    } else {
      libros = await res.json();
    }
  } catch (e) {
    error = true; // Handle network errors (like ECONNREFUSED on Vercel)
  }
  
  if (error) {
    return <p>No se pudieron cargar los libros. Intentá nuevamente más tarde.</p>;
  }

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

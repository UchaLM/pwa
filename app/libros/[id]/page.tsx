import BotonFavorito from '@/app/components/BotonFavorito';

export default async function DetalleLibroPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  let libro = null;
  let error = false;

  try {
    const res = await fetch(`http://127.0.0.1:8000/api/libros/${id}`);
    if (!res.ok) {
      error = true;
    } else {
      libro = await res.json();
    }
  } catch (e) {
    error = true;
  }
  
  if (error || !libro) {
    return <p>No se pudo cargar el libro.</p>;
  }

  return (
    <main>
      <h1>{libro.titulo}</h1>
      <p>Autor: {libro.autor}</p>
      <p>Año de publicación: {libro.anio_publicacion}</p>
      <p>Disponible: {libro.disponible ? 'Sí' : 'No'}</p>
      <BotonFavorito />
    </main>
  );
}

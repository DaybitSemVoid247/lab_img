import { useState, useEffect } from 'react';

interface FotosType {
  id: number;
  author: string;
  url: string;
  download_url: string;
}

export default function App() {
  const [fotos, setFotos] = useState<FotosType[]>([]);
  const obtenerDatos = async () => {
    try {
      const result = await fetch(
        'https://picsum.photos/v2/list?page=2&limit=25'
      ).then((res) => res.json());
      setFotos(result);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <div className="container-fotos">
      <h1>Galeria de Imagenes</h1>
      <div
      style={{
        display: 'flex',
        padding: '20px',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      
      {fotos.map((foto) => (
        <>
          
          <img src={foto.download_url}
          style={{
             
              width: '200px',
              height: '200px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px',
              marginBottom: '16px',
            }} />
            <p> Autor: {foto.author} </p>
        
        </>
      ))}
    </div>
    </div>
  );
}
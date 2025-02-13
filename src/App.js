import React, { useState } from 'react';
import Card from './components/Card/Card'; // Asegúrate de que esta ruta sea correcta

function App() {
  const [bgColor, setBgColor] = useState('lightblue');
  const [textColor, setTextColor] = useState('black');

  // Cambiar el color de fondo
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(event.target.value);
  };

  // Cambiar el color del texto
  const handleTextColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextColor(event.target.value);
  };

  return (
    <div>
      <h1>Tarjetas con colores personalizadas</h1>
      <label>
        Fondo de la tarjeta:
        <input
          type="color"
          value={bgColor}
          onChange={handleColorChange}
          style={{ margin: '20px', marginRight: '10px' }}
        />
      </label>
      <label>
        Color del texto:
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          style={{ marginBottom: '20px' }}
        />
      </label>

      <Card title="Nombre" description="Apellido" bgColor={bgColor} textColor={textColor} />
    </div>
  );
}

export default App;

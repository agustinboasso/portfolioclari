import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const url = 'https://media.licdn.com/dms/image/C4E03AQGxQKpxEGVm4w/profile-displayphoto-shrink_800_800/0/1517010902004?e=1716422400&v=beta&t=Hs0Hy5Hs0Hy5Hs0Hy5Hs0Hy5Hs0Hy5Hs0Hy5';
const publicDir = path.join(__dirname, 'public');
const filePath = path.join(publicDir, 'profile-photo.jpg');

// Crear el directorio public si no existe
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

https.get(url, (response) => {
  if (response.statusCode === 200) {
    const file = fs.createWriteStream(filePath);
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Imagen descargada exitosamente');
    });
  } else {
    console.error('Error al descargar la imagen:', response.statusCode);
  }
}).on('error', (err) => {
  console.error('Error:', err.message);
}); 
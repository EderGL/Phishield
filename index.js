const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const users = {}; // Almacenar usuarios activos y sus tokens

let txtResponse = generateRandomResponse();
let urlResponse = generateRandomResponse();
let urlInput = '';
let txtInput = '';

// Endpoint para autenticar y obtener un token
app.post('/authenticate', (req, res) => {
    // Genera un token aleatorio
    const userToken = Math.random().toString(36).substring(7);
    users[userToken] = { timestamp: Date.now() };
    res.status(200).json({ token: userToken, message: 'Token generado exitosamente' });
  });

// Middleware para verificar el token del usuario
app.use((req, res, next) => {
  const userToken = req.headers['x-user-token']; // Se espera que el token del usuario esté en el encabezado 'x-user-token'
  const user = users[userToken];

  if (!user || (user && Date.now() - user.timestamp > 60000)) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }

  // Actualiza el tiempo de última actividad del usuario
  user.timestamp = Date.now();
  next();
});

// Método para validar un texto
app.post('/validate_txt', (req, res) => {
  txtInput = req.body.text;
  txtResponse = generateRandomResponse();
  txtResponse.TXT = txtInput;
  res.status(200).json(txtResponse);
});

// Método para validar una URL
app.post('/validate_url', (req, res) => {
  urlInput = req.body.url;
  urlResponse = generateRandomResponse();
  urlResponse.URL = urlInput;
  res.status(200).json(urlResponse);
});

// Función para generar valores aleatorios
function generateRandomResponse() {
  const isPhishing = Math.random() < 0.5;
  const percentage = isPhishing
    ? Math.floor(Math.random() * 51) + 50
    : Math.floor(Math.random() * 50);
  return { phishing: isPhishing, percentage: percentage };
}

// Método para combinar las respuestas de validate_txt y validate_url
app.post('/validate', (req, res) => {
  const combinedResponse = { txtResponse, urlResponse };
  const averageTxt = txtResponse.percentage / 100;
  const averageUrl = urlResponse.percentage / 100;
  let result = 'falso';

  if (urlResponse.percentage > txtResponse.percentage) {
    result = 'verdadero';
  }

  const isPhishing = result === 'verdadero' ? urlResponse.phishing : txtResponse.phishing;
  combinedResponse.isPhishing = isPhishing;
  combinedResponse.URL = urlInput;
  combinedResponse.TXT = txtInput;
  res.status(200).json(combinedResponse);
});

app.listen(PORT, () => {
  console.log(`it's alive on http://localhost:${PORT}`);
});

import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/users';

dotenv.config();

const app:Express = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(cors());
app.use(express.json());

//Rutas
//Ruta para users
app.use('/api/users', router)

//Ruta para pruebas

app.get('/', (req: Request, res: Response) => {
    res.json({
        Message: '¡Bienvenido a la API REST!',
        version: '1.0.0'
    });
});

//ruta para el manejo de errores para rutas no encontradas
app.use((req: Request, res: Response) => {
    res.status(404).json({
        error: 'Ruta no encontrada'
    });
});

//Iniciar el Servidor
app.listen(port, ()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
});
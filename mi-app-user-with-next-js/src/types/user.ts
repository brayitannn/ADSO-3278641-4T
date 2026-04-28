// este ripo representa un usuario completo recibido desde la API
export type User = {
    id: number;
    name: string;
    email: string;
    age: number;
}

// este tipo representa los datos que se envian al crear (POST) o actualizar (PUT) un usuario
export type UserPayLoad = {
    name: string;
    email: string;
    age: number;
}

// este tipo representa la estructura general de respuesta de la API
export type ApiResponse<T> = {
    success: boolean;
    data: T;
    message?: string;
}


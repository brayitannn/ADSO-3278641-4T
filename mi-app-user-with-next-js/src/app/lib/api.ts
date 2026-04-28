// URL que usara el frontend para consultar usuarios
export const USERS_API_URL = process.env.NEXT_PUBLIC_USERS_API_URL ?? "/api/users";

// normaliza errrores desconocidos para mostrar los en el form
export function gatApiErrorMessage(error: unknown) {
    if(error instanceof Error) {
        return error.message;
    }
    return "Ocurrio un error inesperado";
}
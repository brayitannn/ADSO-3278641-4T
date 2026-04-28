export interface User{
    id: number;
    name: string;
    email: string;
    age: number;
}

//Base de Datos (Colección) simulada
export const users: User[]= [
    {id:1, name: 'Juan Garcia', email: 'juangarcia@gmail.com', age:28},
    {id:2, name: 'Maria López', email: 'marialopez@gmail.com', age:22},
    {id:3, name: 'Juan Méndez', email: 'juanmendez@gmail.com', age:25},
]
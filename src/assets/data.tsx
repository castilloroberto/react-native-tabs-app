
export interface Ilimitado {
    key: string;
    description: string;
    duration: string;
    price: number;
    title: string;
}

export interface Llamada {
    key: string;
    description: string;
    duration: string;
    price: number;
    title: string;
}

export interface Rede {
    key: string;
    description: string;
    duration: string;
    price: number;
    title: string;
}

export interface Super {
    key: string;
    description: string;
    duration: string;
    price: number;
    title: string;
}

export interface Mensaje {
    key: string;
    description: string;
    duration: string;
    price: number;
    title: string;
}

export interface Consulta {
    key: string;
    title: string;
    description: string;
}

export interface Paquetes {
    ilimitados: Ilimitado[];
    llamadas: Llamada[];
    redes: Rede[];
    super: Super[];
    mensajes: Mensaje[];
    activacion: any[];
    consultas: Consulta[];
}

export interface RootObject {
    paquetes: Paquetes;
}

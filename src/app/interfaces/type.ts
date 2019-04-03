export interface _Type {
    name: string;
    placeholder: string;
}

export interface Type extends _Type {
    id: number;
    createdAt: string;
    updatedAt: string;
}
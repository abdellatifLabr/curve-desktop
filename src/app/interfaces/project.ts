import { ImportedView } from "./view";

export interface _Project {
    title: string;
}
export interface Project extends _Project {
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface ImportedProject extends _Project {
    views: ImportedView[];
}
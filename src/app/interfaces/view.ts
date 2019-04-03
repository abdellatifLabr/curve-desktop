import { ImportedDataset } from './dataset';

export interface _View {
    projectId: number;
    name: string;
}
export interface View extends _View {
    id: number;
    createdAt: string;
    updatedAt: string;
}
export interface ImportedView extends _View {
    datasets: ImportedDataset[];
    options: any; // TODO options interface here
}
import { Curve } from './curve';
import { PointMark } from './point-mark';
import { Grid } from './grid';

export interface _Dataset {
    viewId: number;
    typeId: number;
    json: string;
}

export interface Dataset extends _Dataset {
    id: number;
    createdAt: string;
    updatedAt: string;
}

export interface ImportedDataset {
    type: string;
    data: Curve | PointMark | Grid;
}

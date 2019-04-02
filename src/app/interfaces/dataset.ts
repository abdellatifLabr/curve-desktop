import { Curve } from './curve';
import { PointMark } from './point-mark';

export interface _Dataset {
    id?: number;
    viewId: number;
    typeId: number;
    json: string;
}

export interface Dataset {
    id?: number;
    viewId: number;
    type: string;
    data: Curve | PointMark;
}

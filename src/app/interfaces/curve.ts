export interface Curve {
  x: number[];
  y: number[];
  label: string;
  visible: boolean;
  color: string;
  lineStyle: 'default' | 'dashed' | 'dotted';
}

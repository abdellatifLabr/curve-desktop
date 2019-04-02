export interface _Options {
  id?: number;
  viewId: number;
  json: string;
}
export interface Options {
  general: General;
  background: Background;
  padding: Padding;
  scale: Scale;
  view?: ViewOptions;
  legend?: Legend;
}

interface General {
  smoothDrawing: boolean;
}

interface ViewOptions {
  title: {
    show: boolean,
    text: string;
  }
}

interface Legend {
  show: boolean;
  position: {
    x: number;
    y: number;
  }
}

interface Padding {
  top: number;
  bottom: number;
  left: number;
  right: number;
  unit: string;
}

interface Background{
  color: string;
  image: string;
}

export interface Scale {
  x: {
    from: number;
    to: {
      value: number;
      unit: string;
    };
  };
  y: {
    from: number;
    to: {
      value: number;
      unit: string;
    };
  };
}
export interface Dataset {
  type: string;
  objects: Objects;
  arcs: any[];
  bbox: number[];
  transform: Transform;
}

interface Objects {
  counties: Counties;
  states: States;
  nation: Nation;
}

interface Counties {
  type: string;
  geometries: GeometriesItem[];
}

interface GeometriesItem {
  type: string;
  id?: number | string;
  arcs: any[];
}

interface States {
  type: string;
  geometries: GeometriesItem[];
}

interface Nation {
  type: string;
  geometries: GeometriesItem[];
}

interface Transform {
  scale: number[];
  translate: number[];
}

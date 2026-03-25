export interface SpecRow {
  name: string;
  description: string;
  type: string;
  default: string;
}

export interface ComponentSpec {
  key: string;
  title: string;
  attributes: SpecRow[];
  events: SpecRow[];
  slots: SpecRow[];
}


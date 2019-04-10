export interface Entry {
  year: number;
  month: number;
  variance: number;
}

export interface TemperatureData {
  baseTemperature: string;
  monthlyVariance: Array<Entry>;
}

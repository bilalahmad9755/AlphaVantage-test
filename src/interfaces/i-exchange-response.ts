import { IMetadata } from "./i-metadata";
import { ITimeSeriesData } from "./i-time-series-data";

export interface IExchangeResponse {
  "Meta Data": IMetadata;
  "Time Series FX (Daily)": ITimeSeriesData;
}

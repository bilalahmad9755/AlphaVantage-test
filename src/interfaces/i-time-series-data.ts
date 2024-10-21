import { IExchangeData } from "./i-exchange-data";

export interface ITimeSeriesData {
  [date: string]: IExchangeData;
}

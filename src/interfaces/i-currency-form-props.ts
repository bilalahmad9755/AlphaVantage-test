import { ICurrencySelect } from "./i-currency-select";

export interface ICurrencyFormProps {
  onSubmit: (data: ICurrencySelect) => void;
}

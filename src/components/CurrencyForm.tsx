import { useState } from "react";
import CurrencySelect from "./CurrencySelect";
import { ICurrencyFormProps } from "../interfaces";
import { currencyList } from "../utils";

export const CurrencyForm = ({ onSubmit }: ICurrencyFormProps) => {
  const [fromCurrency, setFromCurrency] = useState(currencyList[0].code);
  const [toCurrency, setToCurrency] = useState(currencyList[0].code);

  const handleSubmit = () => {
    if (fromCurrency && toCurrency) {
      onSubmit({ fromCurrency, toCurrency });
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 ml-8 mb-10 w-1/2 border border-gray-200 mt-10 rounded-lg shadow-lg">
      <form>
      <div className="flex items-center">
          <h1 className="text-xl font-bold">Currency Exchange</h1>
        </div>
        <div className="space-y-4">

        <CurrencySelect
          label="From Currency"
          onChange={(fromCurrency) => {
            setFromCurrency(fromCurrency);
          }}
        />
        <CurrencySelect
          label="To Currency"
          onChange={(toCurrency) => {
            setToCurrency(toCurrency);
          }}
        />
        </div>

      </form>
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white mt-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Get Exchange Data
      </button>
    </div>
  );
};

export default CurrencyForm;

import { useState } from 'react';
import { ICurrencySelect, IExchangeResponse } from './interfaces';
import { getExchangeData } from './services';
import Metadata from './components/Metadata';
import CurrencyList from './components/CurrencyList';
import CurrencyForm from './components/CurrencyForm';
const App = () => {
  const [exchangeResponse, setExchangeResponse] = useState<IExchangeResponse>();

  const handleSubmit = async (formData: ICurrencySelect) => {
    const exchangeResponse: IExchangeResponse = await getExchangeData(formData);
    setExchangeResponse(exchangeResponse);
  };
  return (
    <div className="App">
      <header className="App-header">
      <div className="flex items-center">
          <h1 className="text-xl font-bold">Currency Exchange</h1>
        </div>
        <CurrencyForm onSubmit={(formData)=>{handleSubmit(formData)}}/>
        <Metadata metadata={exchangeResponse?.['Meta Data']}/>
        <CurrencyList exchangeData={exchangeResponse?.['Time Series FX (Daily)']} />
      </header>
    </div>
  );
}

export default App;

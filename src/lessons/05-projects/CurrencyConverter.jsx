import React, { useState, useMemo } from "react";

const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

export function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');

  const baseAmount = useMemo(() => {
    const num = parseFloat(amount);
    if (isNaN(num)) return 0;
    return num / EXCHANGE_RATES[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = baseAmount * EXCHANGE_RATES[toCurrency];
  const currencyOptions = Object.keys(EXCHANGE_RATES);

  return (
    <>
      <style>{`
        .converter-wrapper {
          font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          max-width: 380px;
          margin: 40px auto;
          padding: 30px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          color: #333;
        }

        .converter-wrapper h2 {
          text-align: center;
          margin-bottom: 25px;
          margin-top: 0;
          color: #2c3e50;
          font-size: 1.5rem;
        }

        .input-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .input-group label, 
        .select-group label {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: #7f8c8d;
          display: block;
        }

        input, select {
          width: 100%;
          color: black;
          padding: 10px 12px;
          font-size: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background-color: #f9f9f9;
          transition: border-color 0.2s;
          box-sizing: border-box; /* Ensures padding doesn't break width */
        }

        input:focus, select:focus {
          outline: none;
          border-color: #3498db;
          background-color: #fff;
          color: black;
        }

        .select-row {
          display: flex;
          align-items: flex-end; /* Aligns inputs with the arrow */
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 25px;
        }

        .select-group {
          flex: 1;
        }

        .arrow {
          font-size: 1.5rem;
          color: #3498db;
          padding-bottom: 8px; /* Visual adjustment to align with inputs */
          flex-shrink: 0;
        }

        .result-display {
          background-color: #ecf0f1;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          border: 1px dashed #bdc3c7;
        }

        .result-display h3 {
          margin: 0;
          color: #27ae60;
          font-size: 1.75rem;
        }
      `}</style>

      <div className="converter-wrapper">
        <h2>Currency Converter</h2>
        
        <div className="input-group">
          <label>Amount</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)}
            min="0"
          />
        </div>

        <div className="select-row">
          <div className="select-group">
            <label>From</label>
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {currencyOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <span className="arrow">⇄</span>

          <div className="select-group">
            <label>To</label>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              {currencyOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div className="result-display">
          <h3>{convertedAmount.toFixed(2)} {toCurrency}</h3>
        </div>
      </div>
    </>
  );
}
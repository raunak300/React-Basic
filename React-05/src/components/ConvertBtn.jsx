const ConvertBtn = ({ amount, fromCurrency, toCurrency, setConvertedAmount }) => {
  const handleConvert = () => {
    // const result = parseFloat(amount) * 80; // Assume 1 USD = 80 INR
    // setConvertedAmount(result.toFixed(2));
    if(fromCurrency==="USD"){
        const result = parseFloat(amount) * 80;
      setConvertedAmount(result);
    }else{
      const result = parseFloat(amount) / 80;
      setConvertedAmount(result);
    }
  };

  return (
    <button onClick={handleConvert} className="mt-4 bg-blue-600 text-white p-2 rounded-md">
      Convert
    </button>
  );
};

export default ConvertBtn
import axios from 'axios';
import { useEffect, useState } from 'react';
import FormPage from './FormPage';

export default function FormNumber() {
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5001/api/entries');
      const result = await response.data;
      setLoanData(result.entries);
    };

    fetchData();
  }, []);

  return <FormPage loanData={loanData} />;
}

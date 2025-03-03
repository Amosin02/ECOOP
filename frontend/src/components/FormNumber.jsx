import axios from 'axios';
import { useEffect, useState } from 'react';
import FormPage from './FormPage';

export default function FormNumber() {
  const [loanData, setLoanData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5001/api/entries');
    const result = await response.data;
    setLoanData(result.entries.toReversed());
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function handleAction(loanId, value) {
    const changedValue = value ? 'approved' : 'rejected';
    const id = loanId;

    const changeAction = { action: changedValue };

    try {
      await axios.put(`http://localhost:5001/api/entries/${id}`, changeAction);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(loanId) {
    const id = loanId;

    try {
      await axios.delete(`http://localhost:5001/api/entries/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormPage
      loanData={loanData}
      handleAction={handleAction}
      handleDelete={handleDelete}
    />
  );
}

import { Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import LoanRequestForm from './components/LoanRequestForm';
import Navbar from './components/Navbar';
import FormNumber from './components/FormNumber';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5001/api/entries');
      const result = await response.data;
      setLoanData(result);
    };

    fetchData();
  }, []);

  return (
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
      <Navbar />
      <Routes>
        <Route exact path="/loan-request" element={<LoanRequestForm />} />
        <Route exact path="/form-number" element={<FormNumber />} />
      </Routes>
    </Flex>
  );
}

export default App;

import { Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import LoanRequestForm from './components/LoanRequestForm';
import Navbar from './components/Navbar';
import FormNumber from './components/FormNumber';

function App() {
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

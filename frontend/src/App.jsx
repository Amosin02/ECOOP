import { Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <Routes>
        <Route exact path="/" element={<SignInPage />} />
        <Route exact path="loan-request" element={<HomePage />} />
      </Routes>
      {/* <HomePage /> */}
    </Flex>
  );
}

export default App;

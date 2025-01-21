import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button, HStack, Flex, Center } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex height="100%" justifyContent="center" alignItems="center">
      <Flex>
        <p>Home Page</p>
      </Flex>
    </Flex>
  );
}

export default App;

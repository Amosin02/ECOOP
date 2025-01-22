import { useState } from 'react';
import { Button, Stack, Flex, Fieldset, Input } from '@chakra-ui/react';
import { Field } from './components/ui/field';
import HomePage from './pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      backgroundColor="red.400">
      <HomePage />
    </Flex>
  );
}

export default App;

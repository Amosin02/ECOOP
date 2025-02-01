import { Container, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <Container maxW={'1140px'} px={10} py={4}>
      <Flex justifyContent={'space-between'}>
        <Text textStyle={'xl'} fontWeight={'bold'}>
          ECOOP
        </Text>

        <HStack textStyle={'sm'} gap={5}>
          <Link to={'/loan-request'}>Loan Request</Link>
          <Link to={'/form-number'}>Form Number</Link>
        </HStack>
      </Flex>
    </Container>
  );
}

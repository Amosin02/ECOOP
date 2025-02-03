import { Container, Flex, HStack, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <Container maxW={'1140px'} px={10} py={4}>
      <Flex
        justifyContent={'space-between'}
        // justifySelf={{ base: 'center', sm: 'space-between' }}
        flexDir={{ base: 'column', sm: 'row' }}>
        <Text
          textStyle={'xl'}
          fontWeight={'bold'}
          alignSelf={{ base: 'center' }}>
          ECOOP
        </Text>

        <HStack textStyle={'sm'} gap={5} justify={{ base: 'center' }}>
          <Link to={'/loan-request'}>
            <Text
              rounded={'4xl'}
              _hover={{ backgroundColor: 'gray.300' }}
              p={2}
              backgroundColor={'gray.200'}
              px={{ base: '2', sm: '8' }}>
              Loan Request
            </Text>
          </Link>
          <Link to={'/form-number'}>
            <Text
              _hover={{ backgroundColor: 'gray.300' }}
              variant
              rounded={'4xl'}
              p={2}
              backgroundColor={'gray.200'}
              px={{ base: '2', sm: '8' }}>
              Form Number
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

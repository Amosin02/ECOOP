import { Container, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <Container
      maxW={'1140px'}
      px={5}
      py={4}
      bgColor={'gray.200'}
      rounded={'3xl'}>
      <Flex justifyContent={'space-between'} flexDir={'row'}>
        <Text
          textStyle={'xl'}
          fontWeight={'bold'}
          alignSelf={{ base: 'center' }}
          fontFamily={'monospace'}>
          ECOOP
        </Text>

        <HStack textStyle={'sm'} justify={{ base: 'center' }}>
          <Link to={'/loan-request'}>
            <Text
              _hover={{ color: 'blackAlpha.600' }}
              fontWeight={'bold'}
              px={{ base: '2', sm: '4' }}>
              Request
            </Text>
          </Link>
          <Link to={'/form-number'}>
            <Text
              _hover={{ color: 'blackAlpha.600' }}
              variant
              fontWeight={'bold'}
              px={{ base: '2', sm: '4' }}>
              Form Number
            </Text>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
}

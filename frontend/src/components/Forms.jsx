import { Flex } from '@chakra-ui/react';
import { Button, Card, HStack, Stack, Strong, Text } from '@chakra-ui/react';
import { LuCheck, LuX } from 'react-icons/lu';

export default function Forms(props) {
  const info = props.information;
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="2" gap="3">
          <Text fontWeight="bold" textStyle="2xl">
            {info.fullName}
          </Text>
        </HStack>
        <Card.Description>
          <Stack gap="0">
            {/* AMOUNT */}
            <Text textStyle="md">
              <Strong color="fg">₱ {info.amount}</Strong>
            </Text>
            {/* TERMS */}
            <Text textStyle="sm" fontWeight="medium">
              <Strong color="fg">Terms:</Strong> {info.loanTerm}
            </Text>
            {/* C/O */}
            <Text>
              <Strong color="fg">C/O:</Strong> {info.co}
            </Text>
            {/* DESCRIPTION */}
            <Text>
              <Strong color="fg">Description:</Strong> {info.description}
            </Text>
          </Stack>
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button variant="subtle" colorPalette="red" flex="1">
          <LuX />
          Decline
        </Button>
        <Button variant="subtle" colorPalette="blue" flex="1">
          <LuCheck />
          Approve
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

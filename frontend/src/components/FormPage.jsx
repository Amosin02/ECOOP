import { Button, Table } from '@chakra-ui/react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

export default function FormPage(props) {
  const loans = props.loanData;
  function currencyFormat(num) {
    return parseInt(num)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  function handleAction() {
    // create a function that will change the pending to approve or declined when the appropriate button is clicked
  }

  return (
    <Table.Root stickyHeader width={'70%'}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Name</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader>C/O</Table.ColumnHeader>
          <Table.ColumnHeader>Request</Table.ColumnHeader>
          <Table.ColumnHeader>Action</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {loans.map((value) => (
          <Table.Row key={value._id}>
            <Table.Cell>{value.fullName}</Table.Cell>
            <Table.Cell>{currencyFormat(value.amount)}</Table.Cell>
            <Table.Cell>{value.co}</Table.Cell>
            <Table.Cell>{value.action}</Table.Cell>
            <Table.Cell>
              <Button
                bgColor={'green.600'}
                size={'xs'}
                width={5}
                rounded={'full'}>
                <IoCheckmarkSharp />
              </Button>
              <Button bgColor={'red'} size={'xs'} width={5} rounded={'full'}>
                <RxCross2 />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

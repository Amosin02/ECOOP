import { Button, Table } from '@chakra-ui/react';
import axios from 'axios';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';

export default function FormPage(props) {
  const loans = props.loanData;
  function currencyFormat(num) {
    return parseInt(num)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  function requestFormat(text) {
    const capitalize = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalize;
  }

  async function handleAction(loanId, value) {
    const changedValue = value ? 'approved' : 'rejected';
    const id = loanId;

    const changeAction = { action: changedValue };

    try {
      await axios.put(`http://localhost:5001/api/entries/${id}`, changeAction);
    } catch (error) {
      console.log(error);
    }
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
            <Table.Cell>{requestFormat(value.action)}</Table.Cell>
            <Table.Cell>
              {value.action === 'pending' && (
                <>
                  <Button
                    bg={'green.600'}
                    size={'xs'}
                    width={5}
                    rounded={'full'}
                    onClick={() => handleAction(value._id, 1)}>
                    <IoCheckmarkSharp />
                  </Button>
                  <Button
                    bgColor={'red'}
                    size={'xs'}
                    width={5}
                    rounded={'full'}
                    onClick={() => handleAction(value._id, 0)}>
                    <RxCross2 />
                  </Button>
                </>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

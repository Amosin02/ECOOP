import { Button, Table } from '@chakra-ui/react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { FaRegTrashAlt } from 'react-icons/fa';

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

  return (
    <Table.Root stickyHeader width={'70%'} striped mt={3}>
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
            {value.action === 'rejected' && (
              <Table.Cell color={'red'} fontWeight={'bolder'}>
                {requestFormat(value.action)}
              </Table.Cell>
            )}
            {value.action === 'approved' && (
              <Table.Cell color={'green.600'} fontWeight={'bolder'}>
                {requestFormat(value.action)}
              </Table.Cell>
            )}
            {value.action === 'pending' && (
              <Table.Cell>{requestFormat(value.action)}</Table.Cell>
            )}
            <Table.Cell>
              {value.action === 'pending' && (
                <>
                  <Button
                    bg={'green.600'}
                    size={'xs'}
                    width={5}
                    rounded={'full'}
                    onClick={() => props.handleAction(value._id, 1)}>
                    <IoCheckmarkSharp />
                  </Button>
                  <Button
                    bgColor={'red'}
                    size={'xs'}
                    width={5}
                    rounded={'full'}
                    onClick={() => props.handleAction(value._id, 0)}>
                    <RxCross2 />
                  </Button>
                </>
              )}
              {value.action == 'rejected' && (
                <>
                  <Button
                    bgColor={'red'}
                    size={'xs'}
                    width={5}
                    rounded={'full'}
                    onClick={() => props.handleDelete(value._id)}>
                    <FaRegTrashAlt />
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

import { Container, DataList, Flex, SimpleGrid } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Forms from './Forms';

export default function FormNumber() {
  const [loanData, setLoanData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:5001/api/entries');
      const result = await response.data;
      setLoanData(result.entries);
    };

    fetchData();
  }, []);

  return (
    <DataList.Root>
      <SimpleGrid columns={2} gap="40px">
        {loanData.map((el) => (
          <DataList.Item key={el._id}>
            <Forms information={el} />
          </DataList.Item>
        ))}
      </SimpleGrid>
    </DataList.Root>
  );
}

import { Button, Stack, Fieldset, Input, Flex } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import { Field } from './ui/field';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function LoanRequestForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => saveData(data));
  const notify = () => toast('Loan Request Success!');

  async function saveData(dataToBeSaved) {
    dataToBeSaved['action'] = 'pending';
    await axios.post('http://localhost:5001/api/entries', dataToBeSaved);
    notify();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root
        minWidth={{ sm: 'md' }}
        bgColor={'gray.200'}
        rounded={'3xl'}
        p={8}
        mt={5}>
        <Stack>
          <Fieldset.Legend alignSelf={'center'}>
            Loan Request Form
          </Fieldset.Legend>
          <Fieldset.HelperText alignSelf={'center'}>
            Fill the form below to request a loan
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content alignItems={'center'}>
          <Field
            width={{ base: '64', sm: 'full' }}
            label="Full Name"
            invalid={!!errors.fullName}
            errorText={errors.fullName?.message}>
            <Input
              {...register('fullName', { required: 'Full name is required' })}
              variant={'subtle'}
              placeholder="Juan Dela Cruz"
            />
          </Field>

          <Field
            width={{ base: '64', sm: 'full' }}
            label="Amount"
            invalid={!!errors.amount}
            errorText={errors.amount?.message}>
            <Input
              {...register('amount', { required: 'Amount is required' })}
              variant={'subtle'}
              placeholder="1000"
            />
          </Field>

          <Field
            width={{ base: '64', sm: 'full' }}
            label="Loan Term"
            invalid={!!errors.loanTerm}
            errorText={errors.loanTerm?.message}>
            <Input
              {...register('loanTerm', { required: 'Loan Term is required' })}
              variant={'subtle'}
              placeholder="15 days"
            />
          </Field>

          <Field
            width={{ base: '64', sm: 'full' }}
            label="C/O"
            invalid={!!errors.co}
            errorText={errors.co?.message}>
            <Input
              {...register('co', { required: 'Name/s is required' })}
              variant={'subtle'}
              placeholder="God"
            />
          </Field>

          <Field
            width={{ base: '64', sm: 'full' }}
            label="Description"
            invalid={!!errors.description}
            errorText={errors.description?.message}>
            <Input
              {...register('description', {
                required: 'Description is required',
              })}
              size={'lg'}
              variant={'subtle'}
              placeholder="Short on payments"
            />
          </Field>
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf={{ base: 'center', sm: 'flex-end' }}
          width={{ base: '40', sm: '48' }}
          _hover={{
            bgColor: 'blackAlpha.700',
          }}
          height={'12'}>
          Submit
        </Button>
        <ToastContainer autoClose={3000} hideProgressBar theme="light" />
      </Fieldset.Root>
    </form>
  );
}

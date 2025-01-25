import { Button, Stack, Fieldset, Input } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import { Field } from '../components/ui/field';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => saveData(data));
  const notify = () => toast('Loan Request Success!');

  async function saveData(dataToBeSaved) {
    await axios.post('http://localhost:5001/api/entries', dataToBeSaved);
    notify();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root minW={'md'}>
        <Stack>
          <Fieldset.Legend alignSelf={'center'}>
            Loan Request Form
          </Fieldset.Legend>
          <Fieldset.HelperText alignSelf={'center'}>
            Fill the form below to request a loan
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field
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

        <Button type="submit" alignSelf={'flex-start'}>
          Submit
        </Button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="light"
        />
      </Fieldset.Root>
    </form>
  );
}

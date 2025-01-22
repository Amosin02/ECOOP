import {
  Button,
  Stack,
  Flex,
  Fieldset,
  Input,
  FieldsetErrorText,
} from '@chakra-ui/react';
import { Field } from '../components/ui/field';
import { useForm } from 'react-hook-form';

export default function HomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  //   where you left of

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root size={'lg'} maxW={'md'}>
        <Stack>
          <Fieldset.Legend>Loan Request Form</Fieldset.Legend>
          <Fieldset.HelperText>
            Fill the form below to request a loan
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field
            label="Full Name"
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input
              {...register('firstName', { required: 'First name is required' })}
            />
          </Field>

          <Field
            label="Amount"
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input
              {...register('amount', { required: 'Amount is required' })}
            />
          </Field>

          <Field
            label="Loan Term"
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input
              {...register('loanTerm', { required: 'Loan Term is required' })}
            />
          </Field>

          <Field
            label="C/O"
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input {...register('co', { required: 'Name/s is required' })} />
          </Field>

          <Field
            label="Description"
            invalid={!!errors.firstName}
            errorText={errors.firstName?.message}>
            <Input
              {...register('description', {
                required: 'Description is required',
              })}
            />
          </Field>
        </Fieldset.Content>

        <Button type="submit" alignSelf={'flex-start'}>
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  );
}

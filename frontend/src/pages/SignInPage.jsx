import { Button, Stack, Fieldset, Input } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import { Field } from '../components/ui/field';
import {
  PasswordInput,
  PasswordStrengthMeter,
} from '@/components/ui/password-input';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => saveData(data));

  async function saveData(dataToBeSaved) {
    // await axios.post('http://localhost:5001/api/entries', dataToBeSaved);
    console.log('save sign in creds');
  }

  return (
    <form>
      <Fieldset.Root minW={'sm'}>
        <Fieldset.Content>
          <Field
            invalid={!!errors.fullName}
            errorText={errors.fullName?.message}>
            <Input
              {...register('fullName', { required: 'Full name is required' })}
              variant={'subtle'}
              placeholder="Username"
            />
          </Field>

          <PasswordInput placeholder="Password" size="md" variant={'subtle'} />
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf={'flex-start'}
          width={'md'}
          height={'12'}>
          Submit
        </Button>
      </Fieldset.Root>
    </form>
  );
}

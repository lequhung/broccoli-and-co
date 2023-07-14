import React from 'react';
import * as Styled from './styled';
import { Button, Input } from '../../../components';
import { InvitationPostModel } from '../../../models/invitation.model';
import { useForm } from 'react-hook-form';
import { InvitationFormInputs } from './types';
import { regex } from '../../../constants/regex.const';

interface Props {
  onSend: (payload: InvitationPostModel) => Promise<void>;
}

const InvitationForm: React.FC<Props> = ({ onSend }) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSending, setSending] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InvitationFormInputs>({
    mode: 'all',
    defaultValues: { fullName: '', email: '', confirmEmail: '' }
  });

  const disableOnPaste = React.useCallback((event: React.ClipboardEvent) => {
    event.preventDefault();
    return false;
  }, []);

  const onSendInvitation = React.useCallback(
    (data: InvitationFormInputs) => {
      // prevent multiple clicking on the Send button
      if (isSending) {
        return;
      }

      setErrorMessage('');
      setSending(true);

      onSend({
        name: data.fullName,
        email: data.email
      })
        .catch(error => setErrorMessage(error))
        .finally(() => setSending(false));
    },
    [isSending]
  );

  const validateForm = React.useCallback((value: string, formValues: InvitationFormInputs) => {
    setErrorMessage('');
    return value !== formValues.email ? 'Emails are not matching' : undefined;
  }, []);

  React.useEffect(() => {
    return () => {
      setErrorMessage('');
      setSending(false);
    };
  }, []);

  return (
    <Styled.Container>
      <form onSubmit={handleSubmit(onSendInvitation)}>
        <Input
          id="inpFullName"
          type="text"
          placeholder="Full name"
          error={errors.fullName?.message}
          {...register('fullName', {
            required: 'Full name is required',
            minLength: {
              value: 3,
              message: 'Full name must have at least 3 characters'
            },
            maxLength: {
              value: 300,
              message: 'Full name must have no more than 300 characters'
            }
          })}
        ></Input>
        <Input
          id="inpEmail"
          type="email"
          placeholder="Email"
          error={errors.email?.message}
          {...register('email', {
            required: 'Email is required',
            maxLength: 320,
            pattern: {
              value: regex.email,
              message: 'Invalid email'
            }
          })}
        ></Input>
        <Input
          id="inpConfirmEmail"
          type="email"
          placeholder="Confirm email"
          onPaste={disableOnPaste}
          autoComplete="off"
          error={errors.confirmEmail?.message}
          {...register('confirmEmail', {
            required: 'Confirm email is required',
            maxLength: 320,
            pattern: {
              value: regex.email,
              message: 'Invalid confirm email'
            },
            validate: validateForm
          })}
        ></Input>
        <Button id="btnSend" type="submit">
          {isSending ? 'Sending, please wait...' : 'Send'}
        </Button>
      </form>
      <Styled.ErrorMessage id="errorMessage">{errorMessage}</Styled.ErrorMessage>
    </Styled.Container>
  );
};

export default InvitationForm;

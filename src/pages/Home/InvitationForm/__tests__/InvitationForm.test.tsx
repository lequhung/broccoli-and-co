import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import InvitationForm from '../InvitationForm';

async function fillInForm(name = 'Hung Le', email = 'hung@le.com', confirmEmail = 'hung@le.com') {
  await act(async () => {
    fireEvent.change(await screen.findByPlaceholderText('Full name'), { target: { value: name } });
  });

  await act(async () => {
    fireEvent.change(await screen.findByPlaceholderText('Email'), { target: { value: email } });
  });

  await act(async () => {
    fireEvent.change(await screen.findByPlaceholderText('Confirm email'), { target: { value: confirmEmail } });
  });

  fireEvent.click(await screen.getByRole('button'));
}

describe('Invitation Form', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should send an Invitation successfully', async () => {
    const onSendMock = jest.fn().mockResolvedValue(undefined);

    render(<InvitationForm onSend={onSendMock} />);
    await fillInForm();

    await waitFor(() => {
      expect(onSendMock).toHaveBeenCalledWith({ name: 'Hung Le', email: 'hung@le.com' });
    });
  });

  test('should send an Invitation unsuccessfully due to server error', async () => {
    const onSendMock = jest.fn().mockRejectedValue('error message');

    const { container } = render(<InvitationForm onSend={onSendMock} />);
    await fillInForm();

    await waitFor(() => {
      expect(onSendMock).toHaveBeenCalledWith({ name: 'Hung Le', email: 'hung@le.com' });
      expect(container.querySelector('div#errorMessage')).toHaveTextContent('error message');
    });
  });

  describe('Validations', () => {
    const onSendMock = jest.fn();

    afterEach(() => {
      expect(onSendMock).not.toHaveBeenCalled();
    });

    test('should display error messages for required fields', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      await fillInForm('', '', '');

      await waitFor(() => {
        expect(container.querySelector('span#inpFullName-error')).toHaveTextContent('Full name is required');
        expect(container.querySelector('span#inpEmail-error')).toHaveTextContent('Email is required');
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Confirm email is required');
      });
    });

    test('should display error message for a name that is shorter than 3 characters', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      await fillInForm('Le');

      await waitFor(() => {
        expect(container.querySelector('span#inpFullName-error')).toHaveTextContent(
          'Full name must have at least 3 characters'
        );
      });
    });

    test('should display error messages for invalid name, email and confirm email', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      await fillInForm('Hung <Le>', 'hung@le', '@le.com');

      await waitFor(() => {
        expect(container.querySelector('span#inpFullName-error')).toHaveTextContent('Invalid name');
        expect(container.querySelector('span#inpEmail-error')).toHaveTextContent('Invalid email');
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Invalid confirm email');
      });
    });

    test('should display error message if email and confirm email are not matching', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      await fillInForm('Hung Le', 'hung@le.com', 'hung@le.com.au');

      await waitFor(() => {
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Emails are not matching');
      });
    });
  });
});

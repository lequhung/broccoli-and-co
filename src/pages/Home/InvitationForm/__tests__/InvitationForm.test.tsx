import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import InvitationForm from '../InvitationForm';

async function fillForm() {
  const inpFullName = await screen.findByPlaceholderText('Full name');
  fireEvent.change(inpFullName, { target: { value: 'Hung Le' } });

  const inpEmail = await screen.findByPlaceholderText('Email');
  fireEvent.change(inpEmail, { target: { value: 'hung@le.com' } });

  const inpConfirmEmail = await screen.findByPlaceholderText('Confirm email');
  fireEvent.change(inpConfirmEmail, { target: { value: 'hung@le.com' } });
}

function clickOnSendButton(container) {
  const btnSend = container.querySelector('button#btnSend');
  fireEvent.click(btnSend);
  return btnSend;
}

describe('Invitation Form', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should send an Invitation successfully', async () => {
    const onSendMock = jest.fn().mockResolvedValue(undefined);

    const { container } = render(<InvitationForm onSend={onSendMock} />);
    await fillForm();

    const btnSend = clickOnSendButton(container);

    await waitFor(() => {
      expect(onSendMock).toHaveBeenCalledWith({ name: 'Hung Le', email: 'hung@le.com' });
      expect(btnSend).toHaveTextContent('Send');
    });
  });

  test('should send an Invitation unsuccessfully due to server error', async () => {
    const onSendMock = jest.fn().mockRejectedValue('error message');

    const { container } = render(<InvitationForm onSend={onSendMock} />);
    await fillForm();

    const btnSend = clickOnSendButton(container);

    await waitFor(() => {
      expect(onSendMock).toHaveBeenCalledWith({ name: 'Hung Le', email: 'hung@le.com' });
      expect(btnSend).toHaveTextContent('Send');
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

      clickOnSendButton(container);

      await waitFor(() => {
        expect(container.querySelector('span#inpFullName-error')).toHaveTextContent('Full name is required');
        expect(container.querySelector('span#inpEmail-error')).toHaveTextContent('Email is required');
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Confirm email is required');
      });
    });

    test('should display error message for a name that is shorter than 3 characters', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      const inpFullName = await screen.findByPlaceholderText('Full name');
      fireEvent.change(inpFullName, { target: { value: 'Le' } });
      clickOnSendButton(container);

      await waitFor(() => {
        expect(container.querySelector('span#inpFullName-error')).toHaveTextContent(
          'Full name must have at least 3 characters'
        );
      });
    });

    test('should display error messages for invalid email and confirm email', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      const inpEmail = await screen.findByPlaceholderText('Email');
      fireEvent.change(inpEmail, { target: { value: 'hung@le' } });

      const inpConfirmEmail = await screen.findByPlaceholderText('Confirm email');
      fireEvent.change(inpConfirmEmail, { target: { value: 'hung' } });
      clickOnSendButton(container);

      await waitFor(() => {
        expect(container.querySelector('span#inpEmail-error')).toHaveTextContent('Invalid email');
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Invalid confirm email');
      });
    });

    test('should display error message if email and confirm email are not matching', async () => {
      const { container } = render(<InvitationForm onSend={onSendMock} />);

      const inpEmail = await screen.findByPlaceholderText('Email');
      fireEvent.change(inpEmail, { target: { value: 'hung@le.com' } });

      const inpConfirmEmail = await screen.findByPlaceholderText('Confirm email');
      fireEvent.change(inpConfirmEmail, { target: { value: 'hung@le.com.au' } });
      clickOnSendButton(container);

      await waitFor(() => {
        expect(container.querySelector('span#inpConfirmEmail-error')).toHaveTextContent('Emails are not matching');
      });
    });
  });
});

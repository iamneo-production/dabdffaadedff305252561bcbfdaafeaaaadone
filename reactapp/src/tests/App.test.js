import { render, screen ,fireEvent, waitFor } from '@testing-library/react';
import App from "../App";

describe('Test case for checking if the button is used' , () => {
test('renders_submit_button', () => {
  render(<App />);
  const buttonId = screen.getByRole("button", {name : /submit/i});
  expect(buttonId).toBeInTheDocument();
});
});


describe('Test case for checking if the form is used' , () => {
test('renders_form', () => {
  render(<App/>);
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});
});


describe('Test case for checking if the form is submited' , () => { 
test('submits_the_form_and_shows_success_message', async () => {
  const { getByLabelText, getByText, queryByText } = render(<App />);

  // Fill in the form fields
  fireEvent.change(getByLabelText('First Name:'), { target: { value: 'John' } });
  fireEvent.change(getByLabelText('Last Name:'), { target: { value: 'Doe' } });
  fireEvent.change(getByLabelText('Age:'), { target: { value: '25' } });
  fireEvent.change(getByLabelText('Email:'), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(getByLabelText('Phone:'), { target: { value: '1234567890' } });
  fireEvent.change(getByLabelText('Address:'), { target: { value: '123 Main St' } });
  fireEvent.change(getByLabelText('Pincode:'), { target: { value: '123450' } });
  fireEvent.change(getByLabelText('Message:'), { target: { value: 'Test message' } });

  // Submit the form
  fireEvent.click(getByText('Submit'));

  // Wait for success message to appear
  await waitFor(() => {
    const successMessage = queryByText('Form submitted successfully!');
    expect(successMessage).toBeInTheDocument();
  });
});
});

describe("Test case for Validation Error message" , () => {
test('displays_error_messages_for_First_name_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('First Name:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('First name is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_last_name_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Last Name:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Last name is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Age_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Age:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Age is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Email_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Email:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Email is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Phone_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Phone:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Phone number is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Address_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Address:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Address is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Pincode_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Pincode:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Pincode is required');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_error_messages_for_Message_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Message:'), { target: { value: '' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Message is required');
    expect(firstNameError).toBeInTheDocument();
  });
});


test('displays_Invalid_error_messages_for_Age_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Age:'), { target: { value: 'abc' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Invalid age');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_Invalid_error_messages_for_Email_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Email:'), { target: { value: 'johngmail.com' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Invalid email format');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_Invalid_error_messages_for_Phone_inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Phone:'), { target: { value: '654123989' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Invalid phone number');
    expect(firstNameError).toBeInTheDocument();
  });
});

test('displays_Invalid_error_messages_for_Pincode inputs', async () => {
  const { getByLabelText, getByText } = render(<App />);
  fireEvent.change(getByLabelText('Pincode:'), { target: { value: '654123989' } });
  fireEvent.click(getByText('Submit'));

  await waitFor(() => {
    const firstNameError = getByText('Invalid pincode');
    expect(firstNameError).toBeInTheDocument();
  });
});


});


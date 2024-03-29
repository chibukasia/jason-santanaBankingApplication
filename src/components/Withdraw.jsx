import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useUserData } from '../UserDataContext';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('info');

  const {totalAmount, withdrawAmount} = useUserData()
  const handleWithdraw = (e) => {
    e.preventDefault();
    const numAmount = parseFloat(amount);

    if (isNaN(numAmount)) {
      setMessage('Please enter a valid number.');
      setAlertVariant('danger');
    } else if (numAmount <= 0) {
      setMessage('The withdrawal amount must be positive.');
      setAlertVariant('danger');
    } else if (numAmount > totalAmount) {
      setMessage('Insufficient funds for this withdrawal.');
      setAlertVariant('warning');
    } else {
      withdrawAmount(numAmount);
      setMessage(`Withdrawal of $${numAmount} was successful!`);
      setAlertVariant('success');
      setAmount(''); // Clear the input field after a successful withdrawal
    }
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
    setMessage(''); // Clear the message when user starts typing again
  };

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>
          Current Balance: ${totalAmount.toFixed(2)}
        </Card.Text>
        {message && <Alert variant={alertVariant}>{message}</Alert>}
        <Form onSubmit={handleWithdraw}>
          <Form.Group className="mb-3" controlId="withdrawAmount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter withdrawal amount"
              value={amount}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!amount}>
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Withdraw;

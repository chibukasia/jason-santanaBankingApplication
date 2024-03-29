import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useUserData } from '../UserDataContext';

const CreateAccount = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);
  const {addUserData} = useUserData()

  const validateForm = () => {
    const newErrors = [];
    if (!name) newErrors.push('Name is required');
    if (!email) newErrors.push('Email is required');
    if (password.length < 8) newErrors.push('Password must be at least 8 characters long');
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setPassword('');

      addUserData({name, email})
      // You would typically also send this data to your server here.
    }
  };

  const handleAddAnother = () => {
    setSubmitted(false);
    setErrors([]);
  };

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>Create Account</Card.Title>
        {submitted ? (
          <>
            <Alert variant="success">Account created successfully!</Alert>
            <Button variant="primary" onClick={handleAddAnother}>
              Add Another Account
            </Button>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            {errors.length > 0 && (
              <Alert variant="danger">
                {errors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={errors.includes('Name is required')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={errors.includes('Email is required')}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={errors.includes('Password must be at least 8 characters long')}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!name && !email && !password}>
              Create Account
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
};

export default CreateAccount;

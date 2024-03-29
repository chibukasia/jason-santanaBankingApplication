import { useUserData } from '../UserDataContext';
import { Card } from 'react-bootstrap';

const AllData = () => {
  const { userData } = useUserData();

  return (
    <Card className="m-4">
      <Card.Body>
        <Card.Title>User Submissions</Card.Title>
        <ul className='text-left'>
          {userData.map((data, index) => (
            <>
              <li key={index}><b>Name: </b>{data.name}</li>
              <li key={index}><b>Email: </b>{data.email}</li>
            </>
            
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default AllData;

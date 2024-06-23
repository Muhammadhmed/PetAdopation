// pages/pets/[id].tsx
import { GetServerSideProps } from 'next';
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from "next/navigation";

// Define the type for the Pet object
type Pet = {
  id: string;
  name: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  description: string;
  imageUrl: string;
  status: string;
};

// Define props interface for DogProfile component
interface DogProfileProps {
  pet: Pet;// A single Pet object passed as prop
}

// DogProfile functional component
const DogProfile: React.FC<DogProfileProps> = ({ pet }) => {
 
 const router = useRouter();// Initialize useRouter hook for navigation

 // Function to handle adoption button click
  const handleAdopt= () => {
    router.push("/LoginSignup");
};


  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={pet.imageUrl} alt={pet.name} />
        <Card.Body>
          <Card.Title>{pet.name}</Card.Title>
          <Card.Text>
            <strong>Breed:</strong> {pet.breed}
          </Card.Text>
          <Card.Text>
            <strong>Age:</strong> {pet.age}
          </Card.Text>
          <Card.Text>
            <strong>Gender:</strong> {pet.gender}
          </Card.Text>
          <Card.Text>
            <strong>Size:</strong> {pet.size}
          </Card.Text>
          <Card.Text>
            <strong>Description:</strong> {pet.description}
          </Card.Text>
          <Card.Text>
            <strong>Status:</strong> {pet.status}
          </Card.Text>
          <Button variant="primary" onClick={handleAdopt}>
          Adopt Pet
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

// getServerSideProps function to fetch pet data based on ID
export const getServerSideProps: GetServerSideProps = async (context) => {

  const { id } = context.params!;// Extract the ID from context parameters
  // Fetch the pet data based on the ID
  const res = await fetch(`https://pet-adopations.free.beeceptor.com/api/pet/${id}`);
  const pet = await res.json();

  return { props: { pet } };// Return fetched pet data as props
};

export default DogProfile;// Export the DogProfile component as default

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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

interface EditPetProps {
  pet: Pet;
  onSave: (updatedPet: Pet) => void;
}

const EditPet: React.FC<EditPetProps> = ({ pet, onSave }) => {
  const [name, setName] = useState(pet.name);
  const [age, setAge] = useState(pet.age);
  const [breed, setBreed] = useState(pet.breed);
  const [gender, setGender] = useState(pet.gender);
  const [size, setSize] = useState(pet.size);
  const [description, setDescription] = useState(pet.description);
  const [imageUrl, setImageUrl] = useState(pet.imageUrl);
  const [status, setStatus] = useState(pet.status);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedPet = { ...pet, name, age, breed, gender, size, description, imageUrl, status };
    onSave(updatedPet);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pet name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter pet age"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBreed">
        <Form.Label>Breed</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pet breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGender">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formSize">
        <Form.Label>Size</Form.Label>
        <Form.Control
          as="select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">Select size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pet description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pet image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStatus">
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Select status</option>
          <option value="Available">Available</option>
          <option value="Adopted">Adopted</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
    </Form>
  );
};

export default EditPet;

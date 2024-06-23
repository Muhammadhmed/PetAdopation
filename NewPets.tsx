import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewPets: React.FC<{ onPetAdded: () => void }> = ({ onPetAdded }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [shelterId, setShelterId] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const pet = { name, age, breed, gender, size, description, imageUrl, status, shelterId };

    await fetch("https://pet-adopations.free.beeceptor.com/api/pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });

    onPetAdded(); // Call the callback function to refresh the pet list

    // Clear the form fields
    resetForm();

    router.push("/petList"); // Redirect to the home page after successful submission
  };

  const resetForm = () => {
    setName("");
    setAge(undefined);
    setBreed("");
    setGender("");
    setSize("");
    setDescription("");
    setImageUrl("");
    setStatus("");
    setShelterId("");
  };

  // Reset form fields on component mount
  useEffect(() => {
    resetForm();
  }, []);

  return (
    <div
      style={{
        margin: '2rem',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="bg-primary">Name</Form.Label>
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
            type="text"
            placeholder="Enter pet gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formSize">
          <Form.Label>Size</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pet size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
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
        <Form.Group className="mb-3" controlId="formShelterId">
          <Form.Label>Shelter ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter shelter ID"
            value={shelterId}
            onChange={(e) => setShelterId(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formStatus">
          <Form.Label>Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pet status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create Pet
        </Button>
      </Form>
    </div>
  );
};

export default NewPets;

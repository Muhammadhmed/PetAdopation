import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Define the NewPets component
const NewPets: React.FC<{ onPetAdded: () => void }> = ({ onPetAdded }) => {
  // State variables to store the input values for the new pet
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");
  const [shelterId, setShelterId] = useState("");

  // useRouter hook from Next.js to navigate through code
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a pet object with the state values
    const pet = { name, age, breed, gender, size, description, imageUrl, status, shelterId };

    // Send a POST request to the API to add the new pet
    await fetch("https://pet-adopations.free.beeceptor.com/api/pet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet), // Convert the pet object to a JSON string
    });

    // Clear the form inputs by resetting the state variables
    setName("");
    setAge(undefined);
    setBreed("");
    setGender("");
    setSize("");
    setDescription("");
    setImageUrl("");
    setStatus("");
    setShelterId("");


    // Optional: Redirect to the home page after successful submission
    // router.push("/");
  };

  return (
    // Render the form for adding a new pet inside a container with padding
    <div
      style={{
        backgroundColor: "gray",
        padding: "20px",
        minHeight: "100vh", // Ensure it covers the full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          maxWidth: "900px",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          backgroundColor: "yellow",
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update the name state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter pet age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))} // Update the age state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBreed">
            <Form.Label>Breed</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)} // Update the breed state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGender">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)} // Update the gender state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSize">
            <Form.Label>Size</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet size"
              value={size}
              onChange={(e) => setSize(e.target.value)} // Update the size state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet description"
              value={description}
              onChange={(e) => setDescription(e.target.value)} // Update the description state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImageUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)} // Update the image URL state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formShelterId">
            <Form.Label>Shelter ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter shelter ID"
              value={shelterId}
              onChange={(e) => setShelterId(e.target.value)} // Update the shelter ID state
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter pet status"
              value={status}
              onChange={(e) => setStatus(e.target.value)} // Update the status state
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Create Pets
          </Button>
        </Form>
      </Container>
    </div>
  );
};

// Export the NewPets component as the default export
export default NewPets;

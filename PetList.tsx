
import React, { useState, useEffect } from "react";
import PetsList from "../pets/PetsList"; // Import the PetsList component
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap"; // Import Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
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
 

  const PetList: React.FC = () => {
    const [pets, setPets] = useState<Pet[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      fetchPets();
    }, []);
    const handleDeletePet = async (id: string) => {
      try {
        const res = await fetch(`https://pet-adopations.free.beeceptor.com/api/pet/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          throw new Error("Failed to delete pet");
        }
        fetchPets();
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleEditPet = async (id: string, updatedPet: Pet) => {
      try {
        const res = await fetch(`https://pet-adopations.free.beeceptor.com/api/pet/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPet),
        });
        if (!res.ok) {
          throw new Error("Failed to update pet");
        }
        fetchPets();
      } catch (err) {
        setError(err.message);
      }
    };

    const handlePetProfile = async (id: string, updatedPet: Pet) => {
      try {
        const res = await fetch(`https://pet-adopations.free.beeceptor.com/api/pet/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPet),
        });
        if (!res.ok) {
          throw new Error("Failed to update pet");
        }
        fetchPets();
      } catch (err) {
        setError(err.message);
      }
    };
    const fetchPets = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await fetch("https://pet-adopations.free.beeceptor.com/api/pet");
          if (!res.ok) {
            throw new Error("Failed to fetch pets");
          }
          const data: Pet[] = await res.json();
          setPets(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

    return (
        <Container className="bg-primary mt-4">
          <Row>
            <Col>
            <h1 className="my-4 text-center text-secondary fs-1">Pet List</h1>
              {loading && <Spinner animation="border" />}
              {error && <Alert variant="danger">{error}</Alert>}
              {!loading && !error && (
                <PetsList pets={pets} onDelete={handleDeletePet} onEdit={handleEditPet} onView={handlePetProfile} />
              )}
            </Col>
          </Row>
        </Container>
      );
    };
export default PetList;
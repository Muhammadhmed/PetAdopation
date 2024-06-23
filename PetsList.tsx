import React, { useState } from "react";
import Link from "next/link";
import { Button, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EditPet from "./EditPets";
import PetProfile from "./DogProfile";

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

interface PetsListProps {
  pets: Pet[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string, updatedPet: Pet) => void;
  onView?: (id: string, updatedPet: Pet) => void;
}

const PetsList: React.FC<PetsListProps> = ({ pets, onDelete, onEdit ,onView }) => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleEditClick = (pet: Pet) => {
    setSelectedPet(pet);
    setShowEditModal(true);
  };

  const handleViewClick = (pet: Pet) => {
    setSelectedPet(pet);
    setShowModal(true);
  };

  const handleEditClose = () => {
    setSelectedPet(null);
    setShowEditModal(false);
  };
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {pets.map((pet) => (
          <Card key={pet.id} style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img variant="top" src={pet.imageUrl} />
            <Card.Body>
              <Button variant="primary"  onClick={() => handleViewClick(pet)} style={{ width: "100%", marginBottom: "0.5rem" }}>
                  View
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleEditClick(pet)}
                style={{ width: "100%", marginBottom: "0.5rem" }}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                onClick={() => onDelete && onDelete(pet.id)}
                style={{ width: "100%" }}
              >
                Delete
              </Button>

            </Card.Body>
          </Card>
        ))}
      </div>
      {selectedPet && onEdit && (
        <Modal show={showEditModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Pet</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditPet
              pet={selectedPet}
              onSave={(updatedPet) => {
                onEdit(selectedPet.id, updatedPet);
                handleEditClose();
              }}
            />
          </Modal.Body>
        </Modal>
      )}

{selectedPet && onView && (
        <Modal show={showModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Pet Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PetProfile
              pet={selectedPet}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default PetsList;


import React, { useEffect, useState } from "react";
import { Carousel, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./index.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:1000/api/bikes");

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="carousal-main-cont">
      <Button
        variant="primary"
        className="popup-button"
        onClick={handleOpenPopup}
      >
        Open Popup
      </Button>

      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Popup Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the content of your popup.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Carousel
        nextIcon={<BsChevronRight style={{ color: "blue", fontSize: "3em" }} />}
        prevIcon={<BsChevronLeft style={{ color: "blue", fontSize: "3em" }} />}
      >
        {data.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <div className="d-flex justify-content-around align-ites-center">
              <p className="name">Name: {item.title}</p>
              <p className="price">Price: {item.price}</p>
              <p className="milage">Mileage: {item.milage}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';

import NavBar from './NavBar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState('');
  const [places, setPlaces] = useState([]);
  const token = localStorage.getItem('Token');
  
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the data from the API when the component mounts
    axios.get('https://localhost:7125/api/AdminPosts', {
      headers:  {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        // Assuming each place object from the API contains a 'category' property
        setPlaces(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setActiveFilter(searchTerm);
  };

  const handleCardClick = (id) => {
    if (id !== undefined) {
      console.log('Clicked card ID:', id);
      localStorage.setItem('adminpost', id);
      navigate('/AgentPost');
    }
  };

  return (
    <div>
      {/* <NavBar /> */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

        * {
          font-family: "Poppins", sans-serif;
        }
        
        .container {
          background: #f1f1f1 !important;
        }
        
        body .container {
          max-width: 1100px;
        }
        
        #filter-buttons input {
          border: 1px solid #ddd;
          border-radius: 3px;
          padding: 8px 12px;
          font-size: 16px;
          width: 100%;
        }
        
        #filterable-cards .card {
          width: 15rem;
          border: 2px solid transparent;
        }
        
        #filterable-cards .card.hide {
          display: none;
        }
        
        @media (max-width: 600px) {
          #filterable-cards {
            justify-content: center;
          }
        
          #filterable-cards .card {
            width: calc(100% / 2 - 10px);
          }
        }`}
      </style>
      <div className="container">
        <div className="row mt-5" id="filter-buttons">
          <div className="col-12">
            <input
              type="text"
              placeholder="Search by place name..."
              onChange={handleSearch}
              value={activeFilter}
            />
          </div>
        </div>

        <div className="row px-2 mt-4 gap-3" id="filterable-cards">
          {/* Map through the 'places' array to render cards */}
          {places.map((place) => {
            if (!place) return null; // Added check to skip undefined 'place' objects

            // Filter the cards based on the entered place name
            const showCard =
              activeFilter === '' ||
              place.place_name.toLowerCase().includes(activeFilter.toLowerCase());

            return (
              <div
                key={place.place_name}
                className={`card p-0 ${showCard ? '' : 'hide'}`}
                data-name={place.place_name}
                onClick={() => handleCardClick(place.id)}
              >
                <img src={`https://localhost:7125/uploads/images/${place.placeImagePath}`} alt={place.place_name} />
                <div className="card-body">
                  <h6 className="card-title">{place.place_name}</h6>
                  <p className="card-text">{place.about_place}</p>
                  {/* You can display other information about the place here */}
                  {/* <p className="card-text">{place.additional_info}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

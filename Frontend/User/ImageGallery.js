import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import axios from 'axios';
import { AES, enc } from 'crypto-js';
import { Link, useNavigate } from 'react-router-dom';

export default function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState('');
  const [places, setPlaces] = useState([]);
  const token = localStorage.getItem('Token');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      axios
        .get('https://localhost:7125/api/AdminPosts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setPlaces(response.data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [loading, token]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setActiveFilter(searchTerm);
  };

  const handleCardClick = (id) => {
    if (id !== undefined) {
      const encryptedUserId = AES.encrypt(id.toString(), 'your_secret_key').toString();
      localStorage.setItem('adminpost', encryptedUserId);
      navigate('/TourPackage');
    }
  };

  return (
    <div>
      <NavBar />
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
          {loading ? (
            <div className="text-center w-100">
              <p>Loading...</p>
            </div>
          ) : (
            places.map((place) => {
              if (!place) return null;

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
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

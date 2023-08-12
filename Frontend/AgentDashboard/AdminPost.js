import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AdminPost() {
  const [place_name, setPlaceName] = useState('');
  const [about_place, setaboutplace] = useState('');
  const [imageFile, setPlaceImage] = useState(null);
const navigate=useNavigate();
  const handlePlaceNameChange = (e) => {
    setPlaceName(e.target.value);
  };
  const handleaboutplaceChange = (e) => {
    setaboutplace(e.target.value);
  };

  const handlePlaceImageChange = (e) => {
    setPlaceImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const postData = new FormData();
    postData.append('place_name', place_name);
    postData.append('about_place', about_place);
    postData.append('imageFile', imageFile);

    // Set the adminRegister property
    postData.append('adminRegister.admin_Id', '1');

    // Send the POST request using Axios
    axios
      .post('https://localhost:7125/api/AdminPosts', postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // Handle success, if needed
        console.log('Data successfully posted:', response.data);
        const agency_Id = response.data.agency_Id; // Assuming the response contains the agency_Id
        localStorage.setItem('agency_Id', agency_Id);
      navigate('/AgentDashboard')
      })
      .catch((error) => {
        // Handle error, if needed
        console.error('Error posting data:', error);
      });
  };

  return (
    <div>
      <section class="text-center text-lg-start">
        <style>
          {`
          .rounded-t-5 {
            border-top-left-radius: 0.5rem;
            border-top-right-radius: 0.5rem;
          }

          @media (min-width: 992px) {
            .rounded-tr-lg-0 {
              border-top-right-radius: 0;
            }

            .rounded-bl-lg-5 {
              border-bottom-left-radius: 0.5rem;
            }
          }
          `}
        </style>
        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form onSubmit={handleSubmit} enctype="multipart/form-data">
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example1"
                      class="form-control"
                      value={place_name}
                      onChange={handlePlaceNameChange}
                    />
                    <label class="form-label" for="form2Example1">
                      Place Name
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example1"
                      class="form-control"
                      value={about_place}
                      onChange={handleaboutplaceChange}
                    />
                    <label class="form-label" for="form2Example1">
                      About Place
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="file"
                      className="form-control"
                      name="placeImagePath"
                      id="form2Example2"
                      onChange={handlePlaceImageChange}
                    />
                    <label className="form-label" htmlFor="form2Example2">
                      Upload Place File
                    </label>
                  </div>

                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

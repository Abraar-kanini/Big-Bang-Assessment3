import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function NumberAgency() {
  const [data, setData] = useState([]);
  
  const agentId = localStorage.getItem('agentId');
  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7125/api/Agency/agent/${agentId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (id) => {
    // Store the agency_id in local storage
    localStorage.setItem('selected_agency_id', id);

    window.location.reload();
  };

  return (
    <div>
      <style>
        {`
        /* Your CSS styles go here */
        /* ===== Google Font Import - Poppins ===== */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        .container{
            position: relative;
            min-height: 100vh;
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .container .search-box{
            position: relative;
            height: 42px;
            max-width: 400px;
            margin: 0 auto;
            margin-bottom: 40px;
        }
        .search-box input{
            position: absolute;
            height: 100%;
            width: 100%;
            outline: none;
            border: none;
            background-color: #323334;
            padding: 0 15px 0 45px;
            color: #fff;
            border-radius: 6px;
        }
        .search-box i{
            position: absolute;
            z-index: 2;
            color: #999;
            top: 50%;
            left: 15px;
            font-size: 20px;
            transform: translateY(-50%);
        }
        .container .images .image-box{
            position: relative;
            height: 300px;
            width: 210px;
            border-radius: 6px;
            overflow: hidden;
        }
        .images{
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .images .image-box{
            margin: 8px;
        }
        .images .image-box img{
            height: 100%;
            width: 100%;
            border-radius: 6px;
            transition: transform 0.2s linear;
        }
        .image-box:hover img{
            transform: scale(1.05);
        }
        .image-box h6{
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            text-transform: capitalize;
        }
        `}
      </style>

      <div className="container">
        <div className="search-box">
          <i className="bx bx-search"></i>
          <input type="text" placeholder="Search a package" />
        </div>

        <div className="images">
          {data.map((item) => (
            <div className="image-box" key={item.id} onClick={() => handleCardClick(item.agency_Id)}>
              <img src={`https://localhost:7125/uploads/images/${item.tourImagePath}`} alt={item.agency_Name} />
              <h6>{item.agency_Name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Iteninary.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { AES, enc } from 'crypto-js';

export default function Iteninary() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // const storedId = localStorage.getItem('selectedAgencyId');
    const encryptedUserId1 = localStorage.getItem('selectedAgencyId');
const storedId = parseInt(AES.decrypt(encryptedUserId1, 'your_secret_key').toString(enc.Utf8), 10);

    axios.get(`https://localhost:7125/api/Accommodation/ByAgency/${storedId}`) // Change the agency ID as needed
      .then(response => {
        // Duplicate the data to get 6 cards
        const duplicatedData = response.data.reduce((acc, item) => [...acc, item, item], []);
        setData(duplicatedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <NavBar/>
    <style>
      {`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }
      html {
        scroll-behavior: smooth;
      }
      body {
        background: #ff7979;
      }
      ::selection {
        color: #fff;
        background: #ff7979;
      }
      .wrapper {
        max-width: 1080px;
        margin: 50px auto;
        padding: 0 20px;
        position: relative;
      }
      .wrapper .center-line {
        position: absolute;
        height: 100%;
        width: 4px;
        background: #fff;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
      }
      .wrapper .row {
        display: flex;
      }
      .wrapper .row-1 {
        justify-content: flex-start;
      }
      .wrapper .row-2 {
        justify-content: flex-end;
      }
      .wrapper .row section {
        background: #fff;
        border-radius: 5px;
        width: calc(50% - 40px);
        padding: 20px;
        position: relative;
      }
      .wrapper .row section::before {
        position: absolute;
        content: "";
        height: 15px;
        width: 15px;
        background: #fff;
        top: 28px;
        z-index: -1;
        transform: rotate(45deg);
      }
      .row-1 section::before {
        right: -7px;
      }
      .row-2 section::before {
        left: -7px;
      }
      .row section .icon,
      .center-line .scroll-icon {
        position: absolute;
        background: #f2f2f2;
        height: 40px;
        width: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ff7979;
        font-size: 17px;
        box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
      }
      .center-line .scroll-icon {
        bottom: 0px;
        left: 50%;
        font-size: 25px;
        transform: translateX(-50%);
      }
      .row-1 section .icon {
        top: 15px;
        right: -60px;
      }
      .row-2 section .icon {
        top: 15px;
        left: -60px;
      }
      .row section .details,
      .row section .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .row section .details .title {
        font-size: 22px;
        font-weight: 600;
      }
      .row section p {
        margin: 10px 0 17px 0;
      }
      .row section .bottom a {
        text-decoration: none;
        background: #ff7979;
        color: #fff;
        padding: 7px 15px;
        border-radius: 5px;
        font-weight: 400;
        transition: all 0.3s ease;
      }
      .row section .bottom a:hover {
        transform: scale(0.97);
      }
      /* Additional style for the hotel card */
      .row-1 section .details .additional-info {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }
      .row-1 section .details .additional-info p {
        margin: 5px 0;
        font-size: 14px;
      }
      
      /* Additional style for the place card */
      .row-2 section .details .additional-info {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
      }
      .row-2 section .details .additional-info p {
        margin: 5px 0;
        font-size: 14px;
      }
      
      /* Media queries remain the same */
      @media (max-width: 790px) {
        .wrapper .center-line {
          left: 40px;
        }
        .wrapper .row {
          margin: 30px 0 3px 60px;
        }
        .wrapper .row section {
          width: 100%;
        }
        .row-1 section::before {
          left: -7px;
        }
        .row-1 section .icon {
          left: -60px;
        }
      }
      @media (max-width: 440px) {
        .wrapper .center-line,
        .row section::before,
        .row section .icon {
          display: none;
        }
        .wrapper .row {
          margin: 10px 0;
        }
      }
      
      
      
      
      `}
    </style>
    <div className="wrapper">
        <div className="center-line">
          <a href="#" className="scroll-icon">
            <i className="fas fa-caret-up"></i>
          </a>
        </div>
        {data.map((item, index) => (
          <div className={`row ${index % 2 === 0 ? 'row-1' : 'row-2'}`} key={index}>
            <section>
              <div className="day">Day {Math.ceil((index + 1) / 2)}</div>
              <img
                src={index % 2 === 0 ? `https://localhost:7125/uploads/images/${item.hotelImagePath}` : `https://localhost:7125/uploads/images/${item.placeImagePath}`}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <i className={`icon fas ${index % 2 === 0 ? 'fa-hotel' : 'fa-map-marker-alt'}`}></i>
              <div className="details">
                <span className="title">{index % 2 === 0 ? item.hotel_Name : item.place}</span>
                <p>{index % 2 === 0 ? `About ${item.hotel_Name}: ${item.abouthotel}` : `Things to Do in ${item.place}: ${item.thingstodo}`}</p>
              </div>
              <div className="bottom">
                <a href="#" className="book-button" onClick={() => navigate('/Booking')}>Book</a>
                {/* <i>- Someone famous</i> */}
              </div>
            </section>
          </div>
        ))}
      </div> </>
  );
}

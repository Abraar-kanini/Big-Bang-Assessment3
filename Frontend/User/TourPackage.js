import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './TourPackage.css';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { AES, enc } from 'crypto-js';


export default function TourPackage() {
  const [agencyData, setAgencyData] = useState([]);
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });


  useEffect(() => {
    // const storedId = localStorage.getItem('adminpost');
    const encryptedUserId1 = localStorage.getItem('adminpost');
const storedId = parseInt(AES.decrypt(encryptedUserId1, 'your_secret_key').toString(enc.Utf8), 10);

    axios.get(`https://localhost:7125/api/Agency/adminpost/${storedId}`)
      .then(response => {
        setAgencyData(response.data);
      })
      .catch(error => {
        console.error('Error fetching agency data:', error);
      });
  }, []);

  const handleCardClick = (agencyId) => {
    // Store the agencyId in local storage
    // localStorage.setItem('selectedAgencyId', agencyId);
    const encryptedUserId = AES.encrypt(agencyId.toString(), 'your_secret_key').toString();
    localStorage.setItem('selectedAgencyId', encryptedUserId);
    navigate('/Iteninary');
  };

  return (
    <>
    <style>
      {`
      @import url("https://fonts.googleapis.com/css2?family=Baloo+2&display=swap");

      body {
        font-family: "Baloo 2", cursive;
        font-size: 16px;
        color: #ffffff;
        text-rendering: optimizeLegibility;
        font-weight: initial;
      }
      
      .dark {
        background: #110f16;
      }
      
      .light {
        background: #f3f5f7;
      }
      
      a,
      a:hover {
        text-decoration: none;
        transition: color 0.3s ease-in-out;
      }
      
      #pageHeaderTitle {
        margin: 2rem 0;
        text-transform: uppercase;
        text-align: center;
        font-size: 2.5rem;
      }
      
      
      .postcard {
        flex-wrap: wrap;
        display: flex;
        box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
        border-radius: 10px;
        margin: 0 0 2rem 0;
        overflow: hidden;
        position: relative;
        color: #ffffff;
      }
      .postcard.dark {
        background-color: #18151f;
      }
      .postcard.light {
        background-color: #e1e5ea;
      }
      .postcard .t-dark {
        color: #18151f;
      }
      .postcard a {
        color: inherit;
      }
      .postcard h1,
      .postcard .h1 {
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
      .postcard .small {
        font-size: 80%;
      }
      .postcard .postcard__title {
        font-size: 1.75rem;
      }
      .postcard .postcard__img {
        max-height: 180px;
        width: 100%;
        object-fit: cover;
        position: relative;
      }
      .postcard .postcard__img_link {
        display: contents;
      }
      .postcard .postcard__bar {
        width: 50px;
        height: 10px;
        margin: 10px 0;
        border-radius: 5px;
        background-color: #424242;
        transition: width 0.2s ease;
      }
      .postcard .postcard__text {
        padding: 1.5rem;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      .postcard .postcard__preview-txt {
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: justify;
        height: 100%;
      }
      .postcard .postcard__tagbox {
        display: flex;
        flex-flow: row wrap;
        font-size: 14px;
        margin: 20px 0 0 0;
        padding: 0;
        justify-content: center;
      }
      .postcard .postcard__tagbox .tag__item {
        display: inline-block;
        background: rgba(83, 83, 83, 0.4);
        border-radius: 3px;
        padding: 2.5px 10px;
        margin: 0 5px 5px 0;
        cursor: default;
        user-select: none;
        transition: background-color 0.3s;
      }
      .postcard .postcard__tagbox .tag__item:hover {
        background: rgba(83, 83, 83, 0.8);
      }
      .postcard:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(-70deg, #424242, transparent 50%);
        opacity: 1;
        border-radius: 10px;
      }
      .postcard:hover .postcard__bar {
        width: 100px;
      }
      
      @media screen and (min-width: 769px) {
        .postcard {
          flex-wrap: inherit;
        }
        .postcard .postcard__title {
          font-size: 2rem;
        }
        .postcard .postcard__tagbox {
          justify-content: start;
        }
        .postcard .postcard__img {
          max-width: 300px;
          max-height: 100%;
          transition: transform 0.3s ease;
        }
        .postcard .postcard__text {
          padding: 3rem;
          width: 100%;
        }
        .postcard .media.postcard__text:before {
          content: "";
          position: absolute;
          display: block;
          background: #18151f;
          top: -20%;
          height: 130%;
          width: 55px;
        }
        .postcard:hover .postcard__img {
          transform: scale(1.1);
        }
        .postcard:nth-child(2n+1) {
          flex-direction: row;
        }
        .postcard:nth-child(2n+0) {
          flex-direction: row-reverse;
        }
        .postcard:nth-child(2n+1) .postcard__text::before {
          left: -12px !important;
          transform: rotate(4deg);
        }
        .postcard:nth-child(2n+0) .postcard__text::before {
          right: -12px !important;
          transform: rotate(-4deg);
        }
      }
      @media screen and (min-width: 1024px) {
        .postcard__text {
          padding: 2rem 3.5rem;
        }
      
        .postcard__text:before {
          content: "";
          position: absolute;
          display: block;
          top: -20%;
          height: 130%;
          width: 55px;
        }
      
        .postcard.dark .postcard__text:before {
          background: #18151f;
        }
      
        .postcard.light .postcard__text:before {
          background: #e1e5ea;
        }
      }
      
      .postcard .postcard__tagbox .green.play:hover {
        background: #79dd09;
        color: black;
      }
      
      .green .postcard__title:hover {
        color: #79dd09;
      }
      
      .green .postcard__bar {
        background-color: #79dd09;
      }
      
      .green::before {
        background-image: linear-gradient(-30deg, rgba(121, 221, 9, 0.1), transparent 50%);
      }
      
      .green:nth-child(2n)::before {
        background-image: linear-gradient(30deg, rgba(121, 221, 9, 0.1), transparent 50%);
      }
      
      .postcard .postcard__tagbox .blue.play:hover {
        background: #0076bd;
      }
      
      .blue .postcard__title:hover {
        color: #0076bd;
      }
      
      .blue .postcard__bar {
        background-color: #0076bd;
      }
      
      .blue::before {
        background-image: linear-gradient(-30deg, rgba(0, 118, 189, 0.1), transparent 50%);
      }
      
      .blue:nth-child(2n)::before {
        background-image: linear-gradient(30deg, rgba(0, 118, 189, 0.1), transparent 50%);
      }
      
      .postcard .postcard__tagbox .red.play:hover {
        background: #bd150b;
      }
      
      .red .postcard__title:hover {
        color: #bd150b;
      }
      
      .red .postcard__bar {
        background-color: #bd150b;
      }
      
      .red::before {
        background-image: linear-gradient(-30deg, rgba(189, 21, 11, 0.1), transparent 50%);
      }
      
      .red:nth-child(2n)::before {
        background-image: linear-gradient(30deg, rgba(189, 21, 11, 0.1), transparent 50%);
      }
      
      .postcard .postcard__tagbox .yellow.play:hover {
        background: #bdbb49;
        color: black;
      }
      
      .yellow .postcard__title:hover {
        color: #bdbb49;
      }
      
      .yellow .postcard__bar {
        background-color: #bdbb49;
      }
      
      .yellow::before {
        background-image: linear-gradient(-30deg, rgba(189, 187, 73, 0.1), transparent 50%);
      }
      
      .yellow:nth-child(2n)::before {
        background-image: linear-gradient(30deg, rgba(189, 187, 73, 0.1), transparent 50%);
      }
      
      @media screen and (min-width: 769px) {
        .green::before {
          background-image: linear-gradient(-80deg, rgba(121, 221, 9, 0.1), transparent 50%);
        }
      
        .green:nth-child(2n)::before {
          background-image: linear-gradient(80deg, rgba(121, 221, 9, 0.1), transparent 50%);
        }
      
        .blue::before {
          background-image: linear-gradient(-80deg, rgba(0, 118, 189, 0.1), transparent 50%);
        }
      
        .blue:nth-child(2n)::before {
          background-image: linear-gradient(80deg, rgba(0, 118, 189, 0.1), transparent 50%);
        }
      
        .red::before {
          background-image: linear-gradient(-80deg, rgba(189, 21, 11, 0.1), transparent 50%);
        }
      
        .red:nth-child(2n)::before {
          background-image: linear-gradient(80deg, rgba(189, 21, 11, 0.1), transparent 50%);
        }
      
        .yellow::before {
          background-image: linear-gradient(-80deg, rgba(189, 187, 73, 0.1), transparent 50%);
        }
      
        .yellow:nth-child(2n)::before {
          background-image: linear-gradient(80deg, rgba(189, 187, 73, 0.1), transparent 50%);
        }
      }`}
    </style>
      <NavBar />
      
      <section className="light">
      <div className="container py-2">
        <div className="h1 text-center text-dark" id="pageHeaderTitle">
          TOUR PACKAGES
        </div>

        {agencyData.map((agency) => (
          <article
            key={agency.agency_Id}
            className="postcard light red"
            onClick={() => handleCardClick(agency.agency_Id)}
          >
            <a className="postcard__img_link" href="#">
              <img
                className="postcard__img"
                src={`https://localhost:7125/uploads/images/${agency.tourImagePath}`}
                alt="Image Title"
              />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red">
                <a href="#">{agency.agency_Name}</a>
              </h1>
              <div className="postcard__bar"></div>
              <div className="postcard__subtitle small">
                <time dateTime={currentDate.toISOString()}>
                  <i className="fas fa-calendar-alt mr-2"></i>
                  {formattedDate}
                </time>
              </div>
              <ul className="postcard__tagbox">
                <li className="tag__item">
                  <i className="fas fa-calendar mr-2"></i>
                  {agency.number_Of_Days} days tour to {agency.tour_place}.
                </li>
                <li className="tag__item">
                  <i className="fas fa-clock mr-2"></i>
                  {agency.number_Of_Days}
                </li>
                <li className="tag__item play red">
                  <a href="#">
                    <i className="fas fa-money-bill-wave mr-2"></i>${agency.offer_For_Day}
                  </a>
                </li>
              </ul>
              <div className="postcard__preview-txt">
                {agency.number_Of_Days} days tour to {agency.tour_place}.
                Rating: {agency.agency_Rating}
              </div>
              <div className="postcard__icons">
                <i className="fas fa-star"></i> {agency.agency_Rating} |{' '}
                <i className="fas fa-users"></i> {agency.max_group_size} max group size |{' '}
                <i className="fas fa-dollar-sign"></i> {agency.offer_For_Day} per person
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>    </>
  );
}

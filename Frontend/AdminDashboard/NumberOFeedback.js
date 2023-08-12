import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../Components/NavBar';

export default function NumberOFeedback() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Fetch feedback data from the API using Axios
    axios.get('https://localhost:7125/api/FeedBacks')
      .then(response => {
        setFeedbackData(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback data:', error);
      });
  }, []);

  return (
    <div>
        {/* <NavBar/> */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
        *{
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        ::selection{
          background: #8e44ad;
          color: #fff;
        }
        html,body{
          display: grid;
          height: 100%;
          place-items: center;
        //   background: #8e44ad;

                }
        .container{
          max-width: 1100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 20px;
        }
        .container .box{
          width: calc(33% - 10px);
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 20px 30px;
          border-radius: 5px;
        }
        .box .quote i{
        margin-top: 10px;
        font-size: 45px;
        color: #17c0eb
        }
        .container .box .image{
          margin: 10px 0;
          height: 150px;
          width: 150px;
          background: #8e44ad;
          padding: 3px;
          border-radius: 50%;
        }
        .box .image img{
          height: 100%;
          width: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
        }
        .box p{
          text-align: justify;
          margin-top: 8px;
          font-size: 16px;
          font-weight: 400;
        }
        .box .name_job{
          margin: 10px 0 3px 0;
          color: #8e44ad;
          font-size: 18px;
          font-weight: 600;
        }
        .rating i{
          font-size: 18px;
          color: #8e44ad;
          margin-bottom: 5px;
        }
        .btns{
          margin-top: 20px;
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .btns button{
          background: #8e44ad;
          width: 100%;
          padding: 9px 0px;
          outline: none;
          border: 2px solid #8e44ad;
          border-radius: 5px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 400;
          color: #8e44ad;
          transition: all 0.3s linear;
        }
        .btns button:first-child{
          background: none;
          margin-right: 5px;
        }
        .btns button:last-child{
          color: #fff;
          margin-left: 5px;
        }
        .btns button:first-child:hover{
          background: #8e44ad;
          color: #fff;
        }
        .btns button:hover{
          color: #fff;
        }
        @media (max-width:1045px){
          .container .box{
            width: calc(50% - 10px);
            margin-bottom: 20px;
          }
        }
        @media (max-width:710px){
          .container .box{
            width: 100%;
          }
        }
        `}
      </style>
      
      <div className="container">
        {feedbackData.map((feedback) => (
          <div key={feedback.id} className="box">
            <div className="image">
              {/* Replace with the appropriate image source for each feedback entry */}
              <img src={`https://localhost:7125/uploads/images/${feedback.agency.tourImagePath}`} alt="User Avatar" />
            </div>
            <div className="name_job">{feedback.user.user_name}</div>
            <div className="rating">
             {[...Array(feedback.feedBack_rating)].map((_, index) => (
                <i key={index} className="fas fa-star"></i>
              ))}
              {[...Array(5 - feedback.feedBack_rating)].map((_, index) => (
                <i key={index} className="far fa-star"></i>
              ))}
            </div>
            <p>{feedback.feedBack_area}</p>
            <div className="btns">
              <button>Read More</button>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

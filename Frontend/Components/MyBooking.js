import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Invoice() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API URL
    axios
      .get('https://localhost:7125/api/Bookings/ByUser/2')
      .then((response) => {
        setData(response.data); // Store the response data in the state
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <style>
        {`
          table,
          td,
          th {
            border: 1px solid black;
            border-collapse: collapse;
          }

          table {
            width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          td,
          caption {
            padding: 16px;
          }

          th {
            padding: 16px;
            background-color: lightblue;
            text-align: left;
          }
        `}
      </style>
      <table>
        <caption><b>Invoice</b></caption>
        <thead>
          <tr>
            <th colSpan="2">Booking ID</th>
            <th colSpan="2">Customer Date of Booking</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            <>
              <tr>
                <td colSpan="2">{data.booking_Id}</td>
                <td colSpan="2">{data.customer_Date_Of_Booking}</td>
              </tr>
              <tr>
                <td colSpan="2">No. of Persons</td>
                <td colSpan="2">{data.no_of_perons}</td>
              </tr>
              <tr>
                <td colSpan="2">No. of Children</td>
                <td colSpan="2">{data.no_of_childer}</td>
              </tr>
              <tr>
                <td colSpan="2">Amount per Person</td>
                <td colSpan="2">{data.amount_for_person}</td>
              </tr>
              <tr>
                <td colSpan="2">Amount per Child</td>
                <td colSpan="2">{data.amount_for_childer}</td>
              </tr>
              <tr>
                <th colSpan="3">Booking Amount:</th>
                <td>{data?.booking_amount}</td>
              </tr>
              <tr>
                <th colSpan="4">User Information:</th>
              </tr>
              <tr>
                <td colSpan="2">User Name:</td>
                <td colSpan="2">{data.user?.user_Name}</td>
              </tr>
              <tr>
                <td colSpan="2">User Email:</td>
                <td colSpan="2">{data.user?.user_Email}</td>
              </tr>
              <tr>
                <td colSpan="2">User Phone:</td>
                <td colSpan="2">{data.user?.user_Phone}</td>
              </tr>
              <tr>
                <th colSpan="4">Agency Information:</th>
              </tr>
              <tr>
                <td colSpan="2">Agency Name:</td>
                <td colSpan="2">{data.agency?.agency_Name}</td>
              </tr>
              <tr>
                <td colSpan="2">Agency Contact:</td>
                <td colSpan="2">{data.agency?.agency_Contact}</td>
              </tr>
              <tr>
                <td colSpan="2">Tour Place:</td>
                <td colSpan="2">{data.agency?.tour_place}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

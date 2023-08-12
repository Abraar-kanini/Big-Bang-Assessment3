import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import NumberOFeedback from '../AdminDashboard/NumberOFeedback';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Home() {
  const [natureImages, setNatureImages] = useState([]);

  useEffect(() => {
    fetchNatureImages();
  }, []);

  const fetchNatureImages = async () => {
    try {
      const response = await Promise.all([
        fetch('https://source.unsplash.com/featured/?nature'),
        fetch('https://source.unsplash.com/featured/?traveller'),
        fetch('https://source.unsplash.com/featured/?nature'),
        fetch('https://source.unsplash.com/featured/?traveller')
      ]);

      const imageUrls = await Promise.all(response.map(res => res.url));
      setNatureImages(imageUrls);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <style>
      {`.footer {
    background-color: var(--title-color);
    color: #fff;
    text-align: center;
    padding: 3rem 0;
    margin-top: 220px;
}

.footer__title {
    font-family: var(--secondary-font);
    font-size: var(--h3-font-size);
}

.footer__social {
    margin-top: 1.5rem;
    display: flex;
    justify-content: center;
    column-gap: 1rem;
}

.footer__social-link {
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer__social-link i {
    color: var(--primary-color);
    font-size: 1.5rem;
}`}
    </style>
      <NavBar />
      <div className="landing-page">
        <section id="hero" className="hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>Welcome to GOBIGO</h1>
                <p>About Us, Investor Relations, Careers, MMT Foundation, CSR Policy, myPartner - Travel Agent Portal, Foreign Exchange, List your hotel, Partners- Redbus, Partners- Goibibo, Advertise with Us, RedBus Ferry Malaysia, RedBus Ferry Singapore</p>
                <a className="btn btn-primary" href="#appointment">Book an Appointment</a>
              </div>
              <div className="col-md-6">
                <img src={natureImages[0]} alt="Hospital" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Why GOBIGOTrip?</h2>
                <p>Established in 2000, MakeMyTrip has since positioned itself as one of the leading companies, providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many of its customers. The experience of booking your flight tickets, hotel stay, and holiday package through our desktop site or mobile app can be done with complete ease and no hassles at all. We also deliver amazing offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet, and many more while updating them from time to time to better suit our customers’ evolving needs and demands.</p>
              </div>
              <div className="col-md-6">
                <h2>Our Services</h2>
                <ul>
                  <li>Booking Flights with MakeMyTrip</li>
                  <li>Domestic Flights with MakeMyTrip</li>
                  <li>TOP INTERNATIONAL HOTELS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="natures" className="natures">
          <div className="container">
            <h2>Our natures</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="nature-card">
                  <img src={natureImages[1]} alt="nature" className="img-fluid" />
                  <h4>TOP INTERNATIONAL HOTELS</h4>
                  <p>Adaaran Club Rannalhi, Marina Bay Sands Singapore, Coco Bodu Hithi, Taj Dubai, Atlantis Hotel Dubai, Amari Phuket, Jw Marriott Dubai, Armani Hotel Dubai, Grand Hyatt Dubai, Saii Lagoon Maldives, Gevora Hotel Dubai, Hyatt Regency Dubai, Pan Pacific Singapore, The Palm Dubai, Caesars Palace, Baiyoke Sky Hotel, Centara Pattaya Hotel, Embudu Village, Orchard Hotel Singapore, Reethi Beach Resort, Ambassador Hotel Bangkok, Dusit Thani Pattaya, Shangri La Singapore, Sunbeam Hotel Pattaya, Taj Samudra Colombo, Bangkok Palace Hotel, Hilton Pattaya, Novotel Phuket Resort, Taj Exotica Resort Maldives, Village Hotel Bugis, Avani Atrium Bangkok, The Plaza New York, Village Hotel Albert Court, Amari Pattaya</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="nature-card">
                  <img src={natureImages[2]} alt="nature" className="img-fluid" />
                  <h4>IMPORTANT LINKS</h4>
                  <p>Cheap Flights, Flight Status, Kumbh Mela, Domestic Airlines, International Airlines, Indigo, Spicejet, GoAir, Air Asia, Air India, Indian Railways, Trip Ideas, Beaches, Honeymoon Destinations, Romantic Destinations, Popular Destinations, Resorts In Udaipur, Resorts In Munnar, Villas In Lonavala, Hotels in Thailand, Villas In Goa, Domestic Flight Offers, International Flight Offers, UAE Flight Offers, USA, UAE, Saudi Arabia, UK, Oman</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="nature-card">
                  <img src={natureImages[3]} alt="nature" className="img-fluid" />
                  <h4>CORPORATE TRAVEL</h4>
                  <p>Corporate Travel, Corporate Hotel Booking, Corporate Flight Booking, Business Travel for SME, GST Invoice for International flights, Business Travel Solutions, GST Invoice for Bus, Corporate Bus booking, myBiz - Best Business Travel Platform, GST Invoice for Flights, GST Invoice for Corporate Travel, GST Invoice for Hotels, myBiz for Small Business, Free cancellation on International Flights</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="appointment">
          <div className="container">
            <h2>Book an Appointment</h2>
            <p>To book an appointment, please call: <strong>123-456-7890</strong></p>
          </div>
        </section>

        <section id="contact" className="contact" style={{ backgroundColor: '#f7f7f7', padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ marginBottom: '30px', textAlign: 'center' }}>Contact Us</h2>
            <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="col-md-6" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '15px' }}>Address: 123 Main Street, City, State, Country</p>
                <p>Email: info@example.com</p>
              </div>
              <div className="col-md-6" style={{ textAlign: 'center' }}>
                <p style={{ marginBottom: '15px' }}>Phone: 123-456-7890</p>
                <p>Working Hours: Monday - Friday, 9AM - 5PM</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
        <h3 className="footer__title">Follow Us</h3>

        <div className="footer__social">
          <Link
            to="https://www.facebook.com/MakeMyTrip/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>

          <Link
            to="https://www.instagram.com/MakeMyTrip/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            to="https://twitter.com/MakeMyTrip/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
      </footer>

      </div>
    </>
  );
}

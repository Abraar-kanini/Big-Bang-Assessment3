import React, { useEffect, useState } from 'react';
import './Abraar.css';
import hero_banner from '../hero-banner.png';
import shape1 from '../shape-1.png';
import shape2 from '../shape-2.png';
import shape3 from '../shape-3.png';
import destination from '../destination-1.jpg';
import destination2 from '../destination-2.jpg';
import destination3 from '../destination-3.jpg';
import destination4 from '../destination-4.jpg';
import destination5 from '../destination-5.jpg';
import popular from '../popular-1.jpg';
import popular2 from '../popular-2.jpg';
import popular3 from '../popular-3.jpg';
import banner from '../about-banner.png';
import avatar from '../author-avatar.png';
import blog from '../blog-2.jpg';
import blog3 from '../blog-3.jpg';
import axios from 'axios';

const Tourest = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Make the API call when the component mounts
      axios.get('https://localhost:7125/api/Agency')
        .then(response => {
          // Handle the data returned from the API
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <div>
       <header class="header" data-header>
    <div class="container">

      <a href="#">
        <h1 class="logo">Tourest</h1>
      </a>

      <button class="nav-toggle-btn" data-nav-toggle-btn aria-label="Toggle Menu">
        <ion-icon name="menu-outline" class="open"></ion-icon>
        <ion-icon name="close-outline" class="close"></ion-icon>
      </button>

      <nav class="navbar">

        <ul class="navbar-list">

          <li>
            <a href="#" class="navbar-link">Home</a>
          </li>

          <li>
            <a href="#" class="navbar-link">About Us</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Tours</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Destinations</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Blog</a>
          </li>

          <li>
            <a href="#" class="navbar-link">Contact Us</a>
          </li>

        </ul>

        <a href="#" class="btn btn-secondary">Booking Now</a>

      </nav>

    </div>
  </header>

      <main>
        <article>

         
        <section class="section hero" style={{backgroundImage: `url('./assets/images/hero-bg-bottom.png') url('./assets/images/hero-bg-top.png')`}}>

        <div class="container">

          <img src={shape1} width="61" height="61" alt="Vector Shape" class="shape shape-1"/>

          <img src={shape2} width="56" height="74" alt="Vector Shape" class="shape shape-2"/>

          <img src= {shape3} width="57" height="72" alt="Vector Shape" class="shape shape-3"/>

          <div class="hero-content">

            <p class="section-subtitle">Explore Your Travel</p>

            <h2 class="hero-title">Trusted Travel Agency</h2>

            <p class="hero-text">
              I travel not to go anywhere, but to go. I travel for travel's sake the great affair is to move.
            </p>

            <div class="btn-group">
              <a href="#" class="btn btn-primary">Contact Us</a>

              <a href="#" class="btn btn-outline">Learn More</a>
            </div>

          </div>

          <figure class="hero-banner">
            <img src={hero_banner} width="686" height="812" loading="lazy" alt="hero banner"
              class="w-100"/>
          </figure>

        </div>
      </section>




      <section class="section destination">
        <div class="container">

          <p class="section-subtitle">Destinations</p>

          <h2 class="h2 section-title">Choose Your Place</h2>

          <ul class="destination-list">

            <li class="w-50">
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src={destination} width="1140" height="1100" loading="lazy"
                    alt="Malé, Maldives" class="img-cover"/>
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Malé</p>

                  <h3 class="h3 card-title">Maldives</h3>
                </div>

              </a>
            </li>

            <li class="w-50">
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src={destination2} width="1140" height="1100" loading="lazy"
                    alt="Bangkok, Thailand" class="img-cover"/>
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Bangkok</p>

                  <h3 class="h3 card-title">Thailand</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src={destination3}width="1110" height="480" loading="lazy"
                    alt="Kuala Lumpur, Malaysia" class="img-cover"/>
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Kuala Lumpur</p>

                  <h3 class="h3 card-title">Malaysia</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src={destination4} width="1110" height="480" loading="lazy"
                    alt="Kathmandu, Nepal" class="img-cover"/>
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Kathmandu</p>

                  <h3 class="h3 card-title">Nepal</h3>
                </div>

              </a>
            </li>

            <li>
              <a href="#" class="destination-card">

                <figure class="card-banner">
                  <img src={destination5} width="1110" height="480" loading="lazy"
                    alt="Jakarta, Indonesia" class="img-cover"/>
                </figure>

                <div class="card-content">
                  <p class="card-subtitle">Jakarta</p>

                  <h3 class="h3 card-title">Indonesia</h3>
                </div>

              </a>
            </li>

          </ul>

        </div>
      </section>

      <section class="section popular">
        <div class="container">

          <p class="section-subtitle">Featured Tours</p>

          <h2 class="h2 section-title">Most Popular Tours</h2>

          
          <ul className="popular-list">
        {data.map((agency) => (
          <li key={agency.agency_Id}>
            <div className="popular-card">
              <figure className="card-banner">
                <a href="#">
                  <img src={`https://localhost:7125/uploads/images/${agency.tourImagePath}`} width="740" height="518"  alt={agency.tour_place} className="img-cover" />
                </a>
                <span className="card-badge">
                  <ion-icon name="time-outline"></ion-icon>
                  <time dateTime={`P${agency.number_Of_Days}D`}>{agency.number_Of_Days} Days</time>
                </span>
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="card-price">From ${agency.rate_for_day}.00</div>
                  <div className="card-rating">
                    {[...Array(Math.min(5, parseInt(agency.agency_Rating)))].map((_, index) => (
                      <ion-icon name="star" key={index}></ion-icon>
                    ))}
                    {[...Array(Math.max(0, 5 - parseInt(agency.agency_Rating)))].map((_, index) => (
                      <ion-icon name="star-outline" key={index}></ion-icon>
                    ))}
                    <data value={agency.agency_Rating}>({agency.agency_Rating})</data>
                  </div>
                </div>
                <h3 className="card-title">
                  <a href="#">{agency.agency_Name}</a>
                </h3>
                <address className="card-location">{agency.tour_place}</address>
              </div>
            </div>
          </li>
        ))}

            <li>
              <div class="popular-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src={popular2} width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" class="img-cover"/>
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="P12D">12 Days</time>
                  </span>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-price">From $50.00</div>

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 class="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address class="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

            <li>
              <div class="popular-card">

                <figure class="card-banner">
                  <a href="#">
                    <img src={popular3} width="740" height="518" loading="lazy"
                      alt="Kuala Lumpur, Malaysia" class="img-cover"/>
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="P12D">12 Days</time>
                  </span>
                </figure>

                <div class="card-content">

                  <div class="card-wrapper">
                    <div class="card-price">From $50.00</div>

                    <div class="card-rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>

                      <data value="2">(2)</data>
                    </div>
                  </div>

                  <h3 class="card-title">
                    <a href="#">A good traveler has no fixed plans and is not intent on arriving.</a>
                  </h3>

                  <address class="card-location">Kuala Lumpur, Malaysia</address>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

      <section class="section about">
        <div class="container">

          <div class="about-content">

            <p class="section-subtitle">About Us</p>

            <h2 class="h2 section-title">Explore all tour of the world with us.</h2>

            <p class="about-text">
              Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
              randomised words
              which don't look even slightly believable.
            </p>

            <ul class="about-list">

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="compass"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Tour guide</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="briefcase"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Friendly price</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

              <li class="about-item">

                <div class="about-item-icon">
                  <ion-icon name="umbrella"></ion-icon>
                </div>

                <div class="about-item-content">
                  <h3 class="h3 about-item-title">Reliable tour</h3>

                  <p class="about-item-text">
                    Lorem Ipsum available, but the majority have suffered alteration in some.
                  </p>
                </div>

              </li>

            </ul>

            <a href="#" class="btn btn-primary">Booking Now</a>

          </div>

          <figure class="about-banner">
            <img src={banner} width="756" height="842" loading="lazy" alt="" class="w-100"/>
          </figure>

        </div>
      </section>

      <section class="section blog">
        <div class="container">

          <p class="section-subtitle">From The Blog Post</p>

          <h2 class="h2 section-title">Latest News & Articles</h2>

          <ul class="blog-list">

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={popular} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover"/>
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src={avatar} width="30" height="30" alt="Jony bristow"/>
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover"/>
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src={avatar} width="30" height="30" alt="Jony bristow"/>
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

            <li>
              <div class="blog-card">

                <figure class="card-banner">

                  <a href="#">
                    <img src={blog3} width="740" height="518" loading="lazy"
                      alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover"/>
                  </a>

                  <span class="card-badge">
                    <ion-icon name="time-outline"></ion-icon>

                    <time datetime="12-04">04 Dec</time>
                  </span>

                </figure>

                <div class="card-content">

                  <div class="card-wrapper">

                    <div class="author-wrapper">
                      <figure class="author-avatar">
                        <img src={avatar} width="30" height="30" alt="Jony bristow"/>
                      </figure>

                      <div>
                        <a href="#" class="author-name">Jony bristow</a>

                        <p class="author-title">Admin</p>
                      </div>
                    </div>

                    <time class="publish-time" datetime="10:30">10:30 AM</time>

                  </div>

                  <h3 class="card-title">
                    <a href="#">
                      A good traveler has no fixed plans and is not intent on arriving.
                    </a>
                  </h3>

                  <a href="#" class="btn-link">
                    <span>Read More</span>

                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>

                </div>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>

  <footer class="footer" style={{backgroundImage: `url('./assets/images/footer-bg.png')`}}>
    <div class="container">

      <div class="footer-top">

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Top destination</p>
          </li>

          <li>
            <a href="#" class="footer-link">Indonesia, Jakarta</a>
          </li>

          <li>
            <a href="#" class="footer-link">Maldives, Malé</a>
          </li>

          <li>
            <a href="#" class="footer-link">Australia, Canberra</a>
          </li>

          <li>
            <a href="#" class="footer-link">Thailand, Bangkok</a>
          </li>

          <li>
            <a href="#" class="footer-link">Morocco, Rabat</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Categories</p>
          </li>

          <li>
            <a href="#" class="footer-link">Travel</a>
          </li>

          <li>
            <a href="#" class="footer-link">Lifestyle</a>
          </li>

          <li>
            <a href="#" class="footer-link">Fashion</a>
          </li>

          <li>
            <a href="#" class="footer-link">Education</a>
          </li>

          <li>
            <a href="#" class="footer-link">Food & Drink</a>
          </li>

        </ul>

        <ul class="footer-list">

          <li>
            <p class="footer-list-title">Quick links</p>
          </li>

          <li>
            <a href="#" class="footer-link">About</a>
          </li>

          <li>
            <a href="#" class="footer-link">Contact</a>
          </li>

          <li>
            <a href="#" class="footer-link">Tours</a>
          </li>

          <li>
            <a href="#" class="footer-link">Booking</a>
          </li>

          <li>
            <a href="#" class="footer-link">Terms & Conditions</a>
          </li>

        </ul>

        <div class="footer-list">

          <p class="footer-list-title">Get a newsletter</p>

          <p class="newsletter-text">
            For the latest deals and tips, travel no further than your inbox
          </p>

          <form action="" class="newsletter-form">
            <input type="email" name="email" required placeholder="Email address" class="newsletter-input"/>

            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>

        </div>

      </div>

      <div class="footer-bottom">

        <a href="#" class="logo">Tourest</a>

        <p class="copyright">
          &copy; 2022 <a href="#" class="copyright-link">codewithsadee</a>. All Rights Reserved
        </p>

        <ul class="social-list">

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" class="social-link">
              <ion-icon name="logo-google"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </div>
  </footer>

      {/* #GO TO TOP */}
      <a href="#top" className="go-top" data-go-top aria-label="Go To Top">
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </div>
  );
};

export default Tourest;

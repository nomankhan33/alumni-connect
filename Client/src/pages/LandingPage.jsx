import {React, useState,useEffect,useRef} from 'react'
import AOS from 'aos'
import "./LandingPage.css";
import 'aos/dist/aos.css';
import heroImg from '../images/hero-img.png';
import logo from "../images/logo_wo (2).png";
import whyUs from '../images/why-us.png'
export default function LandingPage() {
    const inputEl = useRef(null);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            mirror: false}
        );
      }, [])
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
      }

  /**
   * Back to top button
   */
  
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
    
  return (
   <>
   <div>
   <header id="header" className="fixed-top">
  
<div className="navbar">
                    <div className="navbar-left">
                        <img className="logo_image" src={logo} width="80px" alt="Logo" />
                        <h1 className="nav-heading">CONNECT JAMIA</h1>
                    </div>
                    <div className="navbar-right">
                    </div>
            </div>
            <div>
   
      </div>
    </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Stay Connected with Jamia Millia Islamia</h1>
            <h2>Where Students and Alumni Meet to Exchange Ideas and Build Connections</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="/login" className="btn-get-started scrollto">
                Login
              </a>
              <a href="/login" className="btn-get-started scrollto ms-2">
                Sign Up
              </a>
            </div>
          </div>

          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={heroImg} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </section>
  {/* <!-- End Hero --> */}

  <main id="main">
  <section id="about" className="about">
  <div className="container" data-aos="fade-up">

    <div className="section-title">
      <h2>About Us</h2>
    </div>

    <div className="row content">
      <div className="col-lg-6">
        <p>
        Welcome to Connect Jamia, a platform dedicated to connecting the students of Jamia Millia Islamia with alumni from a diverse range of fields. Our mission is to provide a space where students can ask questions, receive guidance and mentorship, and expand their professional network.
        </p>
        <ul>
          <li><i className="ri-check-double-line"></i>Our platform is easy to use and 100% secure.</li>
        </ul>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">
        <p>
        At Connect Jamia, we are committed to fostering a supportive and inclusive community. We believe that by sharing our knowledge and experiences, we can help each other succeed. We also believe in the power of networking, and we hope that our platform can help you build lasting connections that will benefit you throughout your career.
        </p>
        {/* <a href="# " className="btn-learn-more">Learn More</a> */}
      </div>
    </div>

  </div>
</section>

<section id="why-us" className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row">
      <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
        <div className="content">
          <h3>Discover the Benefits of Using Connect Jamia to<strong> Connect with Alumni </strong></h3>
    
        </div>
        <div className="accordion-list">
          <ul>
            <li>
              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Why should I use Connect Jamia to connect with alumni? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                <p>Connect Jamia is a dedicated platform that allows you to connect with alumni from Jamia Millia Islamia. By using our website, you can get answers to your questions, receive guidance and mentorship, and expand your professional network. Our platform is easy to use, secure, and provides a wealth of information that can help you achieve your goals.</p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> How is Connect Jamia different from other networking platforms? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                <p>Unlike other generic networking platforms, Connect Jamia is tailored specifically to the Jamia Millia Islamia community. Our website is designed to help students and alumni connect, share knowledge, and build meaningful relationships. We also prioritize security and privacy, so you can be confident that your information is safe with us.</p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span>Can alumni benefit from using Connect Jamia too?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                <p>Absolutely! Connect Jamia is a two-way platform where alumni can also engage with current students and other alumni. By sharing your knowledge and experience, you can help the next generation of Jamia Millia Islamia students succeed. Additionally, you can expand your own network and stay connected with your alma mater.</p>
              </div>
            </li>
            <li>
              <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed"><span>04</span>What kind of questions can I ask on Connect Jamia?<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                <p>You can ask any question related to your academic or professional pursuits. Our alumni come from diverse backgrounds and fields, so you can expect a range of expertise and knowledge. You can ask for advice on your career path, learn about job opportunities, get feedback on your resume or portfolio, and much more.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: whyUs}} data-aos="zoom-in" data-aos-delay="150">
      <img src={whyUs} className="img-fluid animated" alt="" />&nbsp;</div>
    </div>
  </div>
  </section>
  <section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
  <div className="section-title">
  <h2>Contact</h2>
  <p>We love hearing from our users! If you have any questions, comments, or feedback about Connect Jamia, please don't hesitate to get in touch with us. You can contact us by filling out the form below, or by emailing us at our email. We'll do our best to respond to your inquiry as soon as possible.</p>
</div>

<div className="row">

  <div className="col d-flex align-items-stretch">
    <div className="info">
      <div className="address">
        <i className="bi bi-geo-alt"></i>
        <h4>Location:</h4>
        <p>Department of Comp. Engg., FET, Jamia Millia Islamia</p>
      </div>

      <div className="email">
        <i className="bi bi-envelope"></i>
        <h4>Email:</h4>
        <p>jmiconn123@gmail.com</p>
      </div>

      <div className="phone">
        <i className="bi bi-phone"></i>
        <h4>Call:</h4>
        <p>+91 6203218248</p>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3122669639183!2d77.27663307589981!3d28.5603843873525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38ccbae70ef%3A0x88bbd6466e21a864!2sDepartment%20of%20Computer%20Engineering!5e0!3m2!1sen!2sus!4v1682626627564!5m2!1sen!2sus" frameBorder="0" style={{ border: "0", width: "100%", height: "290px" }} allowFullScreen></iframe>
    </div>

  </div>

</div>
  </div>
</section>
  {/* end why us */}
    </main>
  {/* <!-- End #main --> */}

  {/* <!-- ======= Footer ======= --> */}
  <footer id="footer">
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>Connect Jamia</span></strong>. All Rights Reserved
      </div>
    
    </div>
  </footer>
  {/* <!-- End Footer --> */}

  <a href="# " class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

</div>
   </>
  )
}

import React from "react";

//importing photo files
import power from ".././assets/img/power.jpg";
import faith from ".././assets/img/faith.jpg";
import prayer from ".././assets/img/prayer.jpg";
import wedding from ".././assets/img/wedding.jpg";
import design from ".././assets/img/design.jpg";

//importing css files
import ".././assets/css/style.css";

//importing vendor files
import ".././assets/vendor/bootstrap/css/bootstrap.min.css";
import ".././assets/vendor/bootstrap-icons/bootstrap-icons.css";
import ".././assets/vendor/boxicons/css/boxicons.min.css";
import ".././assets/vendor/glightbox/css/glightbox.min.css";
import ".././assets/vendor/remixicon/remixicon.css";
import ".././assets/vendor/swiper/swiper-bundle.min.css";

function HomeScreen() {
  return (
    <div>
      <header
        id="header"
        className="fixed-top text-center"
        style={{ background: "transparent" }}
      >
        <div
          style={{ margin: "0 auto" }}
          className="container d-flex align-items-center justify-content-center"
        >
          <h1 className="logo">
            <a
              href="index.html"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              GOD OF WONDERS
            </a>
          </h1>
        </div>
      </header>

      {/* main body screen */}
      <header id="hero" className="d-flex align-items-center">
        <div
          style={{ margin: "0 auto" }}
          className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex flex-column"
        >
          <h1 style={{ margin: "0 auto", fontWeight: "bold", color: "#fff" }}>
            God Of Wonders
          </h1>
          <ul>
            <p
              style={{
                alignItems: "center",
                margin: "0 auto",
                textAlign: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              God Of Wonders is a leading magazine production company in Lagos.
              We specialize in creating visually stunning and engaging magazines
              for various industries. Our team of talented designers and writers
              are committed to producing high-quality content that captivates
              readers. Experience the wonders of our magazine production
              services today.
            </p>
          </ul>
        </div>
      </header>

      {/* Services */}
      <header className="services" style={{ marginTop: 150 }}>
        <div className="container" data-aos="fade-up">
          <div class="section-title">
            <h2
              style={{ textDecoration: "none", color: "black" }}
              id="services"
            >
              {" "}
              The Word Of God{" "}
            </h2>
          </div>

          <div class="row">
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <img
                  src={power}
                  alt="power"
                  style={{ width: "60%", height: "40%", borderRadius: "50%" }}
                />

                <h4>
                  <a
                    style={{ textDecoration: "none", fontSize: "15px" }}
                    href="mindfulness.html"
                  >
                    {" "}
                    God of miracle{" "}
                  </a>
                </h4>
                <p style={{ color: "grey" }}>
                  What God cannot do does not exist. In Genesis 18:14, God
                  visited sarah and told her she will bear a son . Sarah did not
                  believe she could bear a son at that age cause she was old but
                  the God of miracle gave her a son.
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <img
                  src={faith}
                  alt="faith"
                  style={{ width: "60%", height: "40%", borderRadius: "50%" }}
                />
                <h4>
                  <a
                    style={{ textDecoration: "none", fontSize: "15px" }}
                    href="mindfulness.html"
                  >
                    Faith
                  </a>
                </h4>
                <p style={{ color: "grey" }}>
                  Once we pray and have faith there is nothing we asked that God
                  can not do all we need is just to believe that what we asked
                  for has been answer Hebrew 11:6 said but without faith it is
                  impossible to please him:for the that cometh to God must
                  believe that he is,and that he is a rewarder of them that
                  diligently seek him
                </p>
              </div>
            </div>

            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <img
                  src={prayer}
                  alt="prayer"
                  style={{ width: "60%", height: "40%", borderRadius: "50%" }}
                />
                <h4>
                  <a
                    style={{ textDecoration: "none", fontSize: "15px" }}
                    href="mindfulness.html"
                  >
                    Prayer
                  </a>
                </h4>
                <p style={{ color: "grey" }}>
                  Be a prayer addict because there is nothing i mean nothing
                  prayer can not do through prayer we can change the plan of
                  devil toward us the devil can do every thing but one thing he
                  can't do is to pray devil does not know how to pray so for us
                  to have victory over devil we need to be a prayer addict.
                </p>
              </div>
            </div>

            {/* fourth card */}
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <img
                  src={wedding}
                  alt="wedding"
                  style={{ width: "40%", height: "30%", borderRadius: "50%" }}
                />
                <h4>
                  <a
                    style={{ textDecoration: "none", fontSize: "15px" }}
                    href="mindfulness.html"
                  >
                    Magazine Production
                  </a>
                </h4>
                <p style={{ color: "grey" }}>
                  At God Of Wonders, we specialize in professional magazine
                  production services. Whether you need a magazine for your
                  business, organization, or personal use, our team of skilled
                  designers and writers will create an exceptional publication
                  tailored to your specific requirements. From concept
                  development to final printing, we oversee every step of the
                  production process to ensure high-quality magazines that
                  captivate your target audience.
                </p>
              </div>
            </div>

            {/* Fifth card */}
            <div
              class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <img
                  src={design}
                  alt="design"
                  style={{ width: "40%", height: "30%", borderRadius: "50%" }}
                />
                <h4>
                  <a
                    style={{ textDecoration: "none", fontSize: "15px" }}
                    href="mindfulness.html"
                  >
                    Magazine Design and Layout
                  </a>
                </h4>
                <p style={{ color: "grey" }}>
                  At God Of Wonders, we specialize in creating visually stunning
                  magazine designs and layouts. Our talented team of designers
                  will work closely with you to bring your magazine vision to
                  life. From choosing the right fonts and colors to creating
                  eye-catching graphical elements, we ensure that your magazine
                  stands out from the crowd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* main */}
      <main id="main">
        {/* Testimony cards */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2 style={{ color: "black" }}> A living testimony </h2>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-4 box">
                <h3> Testimony </h3>
                <ul>
                  <p>
                    “There are different ways God has demonstrated his love
                    toward me, i remember when i was sick and i thought it was
                    all over and God came and healed me even when i don't
                    deserve to be loved God still show me that he cares for me
                    when i had no meaning he came through for me he came and
                    pick me up and said daughter am with you he gave me a reason
                    to live again.”
                  </p>
                </ul>
              </div>

              <div className="col-lg-4 box featured">
                <h3> Our Plan Is Not The Plan Of God </h3>
                <ul>
                  “I remembered when i was seeking for admission and almost all
                  my friends we graduated together from secondary school has
                  gain admission and i was still at home looking up to God to
                  provide one for me at that time i was planning to go to a
                  particular school but i did not know that the plan God had for
                  me was totally different from the one i had for myself
                  sometime is just good to let God lead you.”
                </ul>
              </div>

              <div className="col-lg-4 box">
                <h3> God of provision </h3>
                <ul>
                  “God has been so good to me and my family even before i pray
                  for something God is always ready to answer no matter how big
                  is the situation I found myself once I pray and believe, God
                  in his miraculous ways will always provide solution to
                  whatever challenges am facing. ”
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div class="container">
            <div class="section-title">
              <h2 style={{ color: "black" }}>Frequently Asked Questions</h2>
            </div>

            <ul class="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  class="collapsed question"
                  href="#faq1"
                >
                  What kind of magazines does God Of Wonders produce?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    God Of Wonders produces a wide range of magazines, including
                    lifestyle magazines, fashion magazines, business magazines,
                    and more. We specialize in creating high-quality
                    publications that are both informative and engaging.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  class="collapsed question"
                >
                  What sets God Of Wonders apart from other magazine production
                  companies? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    At God Of Wonders, we pride ourselves on our attention to
                    detail and our commitment to excellence. We don't just
                    create magazines, we create works of art that are designed
                    to captivate and inspire. We work closely with our clients
                    to ensure that every aspect of their publication is perfect,
                    from the content to the layout to the printing.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  class="collapsed question"
                >
                  How can I get started with God Of Wonders?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Getting started with God Of Wonders is easy. Simply contact
                    us to discuss your project and we'll help you every step of
                    the way. We'll work with you to develop a customized plan
                    that meets your specific needs, from concept development to
                    design to production and distribution. We're here to help
                    you create a magazine that stands out from the crowd and
                    makes an impact.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  class="collapsed question"
                >
                  How can I request a quote for a magazine production project?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    To request a quote for a magazine production project, please
                    visit our website and fill out the contact form or call our
                    office directly. Our team will be happy to discuss your
                    requirements and provide you with a customized quote.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact section */}
        <header id="contact" className="contact section-bg">
          <section id="contact" class="contact section-bg">
            <div class="container">
              <div class="section-title">
                <h2 style={{ color: "black" }}> Contact Us </h2>
                <p style={{ color: "grey" }}>
                  Have a question, need assistance? We're just a message away!
                </p>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="info-box">
                        <i class="bx bx-map"></i>
                        <h3>Our Address</h3>
                        <p>Lagos, LA,</p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-envelope"></i>
                        <h3>Email Us</h3>
                        <p> contactus@godofwonders.com </p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="info-box mt-4">
                        <i class="bx bx-phone-call"></i>
                        <h3>Call Us</h3>
                        <p> +1 (551) 318-6259 </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 mt-4 mt-lg-0">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    class="php-email-form"
                  >
                    <div class="row">
                      <div class="form-group mt-3">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="Your Name *"
                          required
                        />
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email * "
                        required
                      />
                    </div>
                    <div class="form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message *"
                        required
                      ></textarea>
                    </div>
                    <div class="my-3">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </header>
      </main>

      {/* Footer */}
      <footer id="footer">
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span> God of wonders </span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="facebook">
              <i className="bx bxl-facebook"></i>
            </a>

            <a href="#" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>

            <a href="#" className="instagram">
              <i className="bx bxl-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;

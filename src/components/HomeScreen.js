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
              <h2> A living testimony </h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row no-gutters">
              <div className="col-lg-4 box">
                <h3>Free</h3>
                <h4>
                  $0<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nulla at volutpat diam
                    uteera
                  </li>
                  <li className="na">
                    <i className="bx bx-x"></i>{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bx bx-x"></i>{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>

              <div className="col-lg-4 box featured">
                <h3>Business</h3>
                <h4>
                  $29<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nulla at volutpat diam
                    uteera
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Pharetra massa massa
                    ultricies
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>

              <div className="col-lg-4 box">
                <h3>Developer</h3>
                <h4>
                  $49<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check"></i> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Nulla at volutpat diam
                    uteera
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Pharetra massa massa
                    ultricies
                  </li>
                  <li>
                    <i className="bx bx-check"></i> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" className="btn-buy">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq">
          <div class="container">
            <div class="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>

            <ul class="faq-list">
              <li>
                <div
                  data-bs-toggle="collapse"
                  class="collapsed question"
                  href="#faq1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis
                    lectus magna fringilla urna porttitor rhoncus dolor purus
                    non.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq2"
                  class="collapsed question"
                >
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq3"
                  class="collapsed question"
                >
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis
                    sed odio morbi quis
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq4"
                  class="collapsed question"
                >
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq4" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq5"
                  class="collapsed question"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq5" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in
                  </p>
                </div>
              </li>

              <li>
                <div
                  data-bs-toggle="collapse"
                  href="#faq6"
                  class="collapsed question"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq6" class="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo.
                    Mauris vitae ultricies leo integer malesuada nunc vel.
                    Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                    eget lorem dolor sed. Ut venenatis tellus in metus vulputate
                    eu scelerisque. Pellentesque diam volutpat commodo sed
                    egestas egestas fringilla phasellus faucibus. Nibh tellus
                    molestie nunc non blandit massa enim nec.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <header id="contact" className="contact section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      <i className="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>
                        info@example.com
                        <br />
                        contact@example.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>
                        +1 5589 55488 55
                        <br />
                        +1 6678 254445 41
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}

export default HomeScreen;

import Navbar from "../components/main/navbar";

export default function Contact() {
    return (
        <>
            <Navbar></Navbar>
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <header class="contact-hed section-padding pb-0">
                            <div class="container">
                                <div class="caption mb-80 text-center">
                                    <h1>Get In Touch</h1>
                                </div>
                            </div>
                            <div class="container-fluid">
                                <div class="google-map">
                                    <iframe
                                        id="gmap_canvas"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.2269178929178!2d29.029688076021834!3d41.107735013294985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5377e301e43%3A0xb7a2adf959a3368b!2sCopeTract!5e0!3m2!1str!2str!4v1722969082444!5m2!1str!2str"
                                    ></iframe>
                                </div>
                            </div>
                        </header>

                        <section class="contact-pg section-padding">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-5 valign">
                                        <div class="full-width md-mb80">
                                            <div class="sec-head md-mb80">
                                                <h2 class="text-u">
                                                    Let's make your <br /> brand{" "}
                                                    <span class="fw-200">
                                                        brilliant!
                                                    </span>
                                                </h2>
                                                <p class="mt-20 mb-20">
                                                    If you would like to work
                                                    with us or just want to get
                                                    in touch, we’d love to hear
                                                    from you!
                                                </p>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="morinfo mt-30">
                                                            <h6 class="mb-15">
                                                                Address
                                                            </h6>
                                                            <p>
                                                                Teknokent,
                                                                Reşitpaşa Mah.
                                                                Katar Cad, Arı
                                                                Çk. No:3 Binası
                                                                B109, 34485
                                                                Sarıyer/İstanbul
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="morinfo mt-30">
                                                            <h6 class="mb-15">
                                                                Email
                                                            </h6>
                                                            <p>
                                                                info@copeai.com
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="phone fz-30 fw-600 mt-30 underline main-color">
                                                    <a href="tel:+905425042232">
                                                        +90 542 504 2232
                                                    </a>
                                                </div>
                                            </div>
                                            {/* <ul class="rest social-text d-flex mt-60 fz-16">
                                                <li class="mr-30">
                                                    <a
                                                        href="#0"
                                                        class="hover-this"
                                                    >
                                                        <span class="hover-anim">
                                                            Facebook
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="mr-30">
                                                    <a
                                                        href="#0"
                                                        class="hover-this"
                                                    >
                                                        <span class="hover-anim">
                                                            Twitter
                                                        </span>
                                                    </a>
                                                </li>
                                                <li class="mr-30">
                                                    <a
                                                        href="#0"
                                                        class="hover-this"
                                                    >
                                                        <span class="hover-anim">
                                                            LinkedIn
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href="#0"
                                                        class="hover-this"
                                                    >
                                                        <span class="hover-anim">
                                                            Instagram
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div class="col-lg-6 offset-lg-1 valign">
                                        <div class="full-width">
                                            <div class="sec-head mb-50">
                                                <h6 class="sub-head">
                                                    Send a{" "}
                                                    <span class="fw-200">
                                                        message
                                                    </span>
                                                </h6>
                                            </div>
                                            <form
                                                id="contact-form"
                                                method="post"
                                                action="contact.php"
                                            >
                                                <div class="messages"></div>

                                                <div class="controls row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group mb-30">
                                                            <input
                                                                id="form_name"
                                                                type="text"
                                                                name="name"
                                                                placeholder="Name"
                                                                required="required"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <div class="form-group mb-30">
                                                            <input
                                                                id="form_email"
                                                                type="email"
                                                                name="email"
                                                                placeholder="Email"
                                                                required="required"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form-group mb-30">
                                                            <input
                                                                id="form_subject"
                                                                type="text"
                                                                name="subject"
                                                                placeholder="Subject"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <textarea
                                                                id="form_message"
                                                                name="message"
                                                                placeholder="Message"
                                                                rows="4"
                                                                required="required"
                                                            ></textarea>
                                                        </div>
                                                        <div class="mt-30">
                                                            <button
                                                                type="submit"
                                                                class="butn butn-md butn-bord butn-rounded"
                                                            >
                                                                <div class="d-flex align-items-center">
                                                                    <span>
                                                                        Let's
                                                                        Talk
                                                                    </span>
                                                                    <span class="icon ml-10">
                                                                        <img
                                                                            src="/public/assets/imgs/icons/arrow-top-right.svg"
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer class="footer-sa pb-40">
                        <div class="container section-padding bord-thin-top-light">
                            <div class="contact-info">
                                <div class="row">
                                    <div class="col-lg-5">
                                        <a href="#" class="logo md-mb50">
                                            <img
                                                src="assets/imgs/copeai_white_long_logo.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="item">
                                                    <span class="sub-color">
                                                        location
                                                    </span>
                                                    <p>
                                                        Teknokent, Reşitpaşa
                                                        Mah. Katar Cad, Arı Çk.
                                                        No:3 Binası B109, 34485
                                                        Sarıyer/İstanbul
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-6 d-flex justify-content-end justify-end">
                                                <div class="item">
                                                    <span class="sub-color">
                                                        inquiry
                                                    </span>
                                                    <p>info@copeai.com</p>
                                                    <p>+90 542 504 2232</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div class="col-lg-6 offset-lg-5">
                                        <div class="social-icon">
                                            <a href="#0">
                                                <i class="fa-brands fa-x-twitter"></i>
                                            </a>
                                            <a href="#0">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                            <a href="#0">
                                                <i class="fa-brands fa-dribbble"></i>
                                            </a>
                                            <a href="#0">
                                                <i class="fa-brands fa-behance"></i>
                                            </a>
                                            <a href="#0">
                                                <i class="fa-brands fa-github"></i>
                                            </a>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="sub-footer">
                            <div class="container bord-thin-top-light pt-50">
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="copy sub-color md-mb30">
                                            <p>
                                                © 2024 <a href="#0">CopeAI</a>.
                                                All Right Reserved
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 d-flex justify-content-end">
                                        <div class="links sub-color d-flex justify-content-between">
                                            <a href="/">Home</a>
                                            <a href="/pricing">Pricing</a>
                                            <a href="/faq">FAQ</a>
                                            <a href="/contact" class="active">
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}

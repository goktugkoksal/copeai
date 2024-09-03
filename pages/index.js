import Head from "next/head";
import Image from "next/image";
import Footer from "../components/main/footer";
import Navbar from "../components/main/navbar";

export default function Home() {
    return (
        <>
            <Navbar></Navbar>

            <div class="hamenu">
                <div class="close-menu cursor-pointer ti-close"></div>
                <div class="container-fluid rest d-flex">
                    <div class="menu-links">
                        <ul class="main-menu rest">
                            <li>
                                <div class="o-hidden">
                                    <div class="link cursor-pointer dmenu">
                                        <span
                                            class="fill-text"
                                            data-text="Home"
                                        >
                                            Home
                                        </span>
                                        <i></i>
                                    </div>
                                </div>
                                <div class="sub-menu">
                                    <ul>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Startup Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Creative Studio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Creative Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Digital Marketing
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Modern Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Digital Studio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Modern Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" class="sub-link">
                                                Creative Agency 2
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="o-hidden">
                                    <div class="link cursor-pointer dmenu">
                                        <span
                                            class="fill-text"
                                            data-text="Pages"
                                        >
                                            Pages
                                        </span>
                                        <i></i>
                                    </div>
                                </div>
                                <div class="sub-menu">
                                    <ul>
                                        <li>
                                            <a
                                                href="../inner_pages/about.html"
                                                class="sub-link"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/services.html"
                                                class="sub-link"
                                            >
                                                Our Services
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/service-details.html"
                                                class="sub-link"
                                            >
                                                Services Details
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/team.html"
                                                class="sub-link"
                                            >
                                                Our Team
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/pricing.html"
                                                class="sub-link"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/faqs.html"
                                                class="sub-link"
                                            >
                                                FAQS
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/contact.html"
                                                class="sub-link"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="o-hidden">
                                    <div class="link cursor-pointer dmenu">
                                        <span
                                            class="fill-text"
                                            data-text="Portfolio"
                                        >
                                            Portfolio
                                        </span>
                                        <i></i>
                                    </div>
                                </div>
                                <div class="sub-menu">
                                    <ul>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-standard.html"
                                                class="sub-link"
                                            >
                                                Standard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-gallery.html"
                                                class="sub-link"
                                            >
                                                Gallery
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-cards.html"
                                                class="sub-link"
                                            >
                                                Card
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-layout2.html"
                                                class="sub-link"
                                            >
                                                Grid 2 Column
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-layout3.html"
                                                class="sub-link"
                                            >
                                                Gid 3 Column
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/portfolio-layout4.html"
                                                class="sub-link"
                                            >
                                                Grid 4 Column
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/project-details.html"
                                                class="sub-link"
                                            >
                                                Project Details
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="o-hidden">
                                    <div class="link cursor-pointer dmenu">
                                        <span
                                            class="fill-text"
                                            data-text="Blog"
                                        >
                                            Blog
                                        </span>
                                        <i></i>
                                    </div>
                                </div>
                                <div class="sub-menu">
                                    <ul>
                                        <li>
                                            <a
                                                href="../inner_pages/blog-grid.html"
                                                class="sub-link"
                                            >
                                                Blog Grid
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/blog-standard.html"
                                                class="sub-link"
                                            >
                                                Blog Standard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../inner_pages/blog-details.html"
                                                class="sub-link"
                                            >
                                                Blog Details
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="o-hidden">
                                    <a href="#" class="link">
                                        <span
                                            class="fill-text"
                                            data-text="Contact Us"
                                        >
                                            Contact Us
                                        </span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="cont-info valign">
                        <div class="text-center full-width">
                            <div class="logo">
                                <img
                                    src="../common/imgs/Logo-light.svg"
                                    alt=""
                                />
                            </div>
                            <div class="social-icon mt-40">
                                <a href="#">
                                    {" "}
                                    <i class="fab fa-facebook-f"></i>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i class="fab fa-x-twitter"></i>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i class="fab fa-linkedin-in"></i>{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i class="fab fa-instagram"></i>{" "}
                                </a>
                            </div>
                            <div class="item mt-30">
                                <h5>
                                    541 Melville Geek, <br />
                                    Palo Alto, CA 94301
                                </h5>
                            </div>
                            <div class="item mt-10">
                                <h5>
                                    <a href="#0">Hello@email.com</a>
                                </h5>
                                <h5 class="underline">
                                    <a href="#0">+1 840 841 25 69</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <header class="header-dm section-padding">
                            <div class="container-xl position-re">
                                <div class="row">
                                    <div class="col-lg-9">
                                        <div class="caption">
                                            <h1>
                                                AI tools tailored just for{" "}
                                                <br />
                                                your needs
                                            </h1>
                                        </div>
                                        <div class="row md-hide">
                                            <div class="col-lg-6 imgs-cube">
                                                {/* <div class="imgs">
                                                    <div class="circle">
                                                        <img
                                                            src="assets/imgs/header/circle-badge.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div> */}
                                                <div class="img fit-img radius-30 mt-50">
                                                    <img
                                                        src="assets/imgs/header/1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mimg fit-img">
                                    <div class="shaps top">
                                        <div class="shap-right-top">
                                            <svg
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-11 h-11"
                                            >
                                                <path
                                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                    fill="#0e0f11"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="shap-left-bottom">
                                            <svg
                                                viewBox="0 0 11 11"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="w-11 h-11"
                                            >
                                                <path
                                                    d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                    fill="#0e0f11"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <img
                                        src="assets/imgs/header/2.jpg"
                                        alt=""
                                    />
                                    <div class="text">
                                        {/* <span class="fz-12 text-u mb-10">
                                            Since <br />
                                            2002
                                        </span> */}
                                        <p>
                                            We have professional team <br />
                                            working with passion
                                        </p>
                                        <div class="shaps bottom">
                                            <div class="shap-left-top">
                                                <svg
                                                    viewBox="0 0 11 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-11 h-11"
                                                >
                                                    <path
                                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                        fill="#0e0f11"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div class="shap-right-bottom">
                                                <svg
                                                    viewBox="0 0 11 11"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-11 h-11"
                                                >
                                                    <path
                                                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                                                        fill="#0e0f11"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <section class="intro-dm">
                            <div class="container">
                                <div class="sec-head mb-100">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <h6 class="sub-head">
                                                Who we are?
                                            </h6>
                                        </div>
                                        <div class="col-lg-8">
                                            <h3 class="text-indent">
                                                As a tight-knit team of experts,
                                                we develop cutting-edge AI
                                                solutions and LLM models,
                                                creating intelligent tools that
                                                drive business innovation and
                                                growth.
                                            </h3>
                                            <a href="#" class="crv-butn mt-40">
                                                <div class="d-flex">
                                                    <span class="text">
                                                        More about us
                                                    </span>
                                                    <span class="icon">
                                                        <img
                                                            src="assets/imgs/icons/arrow-top-right.svg"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="clients-dm">
                            <div class="main-marq shadow-off">
                                <div class="slide-har st1">
                                    <div class="box">
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/1.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/2.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/3.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/4.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/5.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/1.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/2.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/3.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/4.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div class="item">
                                            <img
                                                src="assets/imgs/brands/5.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <section class="works-dm section-padding">
                            <div class="container">
                                <div class="gallery row md-marg">
                                    <div class="items col-lg-6 order-md-2">
                                        <div class="item">
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/works/2.jpg"
                                                    alt=""
                                                />
                                                <div class="tags">
                                                    <a href="#0">Development</a>
                                                    <a href="#0">UI/UX</a>
                                                    <a href="#0">
                                                        illustration
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="cont mt-30">
                                                <div class="info sub-color mb-10">
                                                    <span>2023</span>
                                                    <span class="dot"></span>
                                                    <span>UiThemez</span>
                                                </div>
                                                <h6>
                                                    <a href="../inner_pages/project-details.html">
                                                        Archin Architecture
                                                        Studio
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="items col-lg-6 order-md-1">
                                        <div class="sec-head">
                                            <h6 class="sub-head mb-15">
                                                Featured Works
                                            </h6>
                                            <h2 class="fz-60">
                                                Take a look at <br />
                                                our projects
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="items col-lg-6 order-md-2">
                                        <div class="item">
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/works/1.jpg"
                                                    alt=""
                                                />
                                                <div class="tags">
                                                    <a href="#0">Development</a>
                                                    <a href="#0">UI/UX</a>
                                                    <a href="#0">
                                                        illustration
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="cont mt-30">
                                                <div class="info sub-color mb-10">
                                                    <span>2023</span>
                                                    <span class="dot"></span>
                                                    <span>UiThemez</span>
                                                </div>
                                                <h6>
                                                    <a href="#">
                                                        Unerio Residential
                                                        Complex Landing page
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="items col-lg-6 order-md-2">
                                        <div class="item">
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/works/3.jpg"
                                                    alt=""
                                                />
                                                <div class="tags">
                                                    <a href="#0">Development</a>
                                                    <a href="#0">UI/UX</a>
                                                    <a href="#0">
                                                        illustration
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="cont mt-30">
                                                <div class="info sub-color mb-10">
                                                    <span>2023</span>
                                                    <span class="dot"></span>
                                                    <span>UiThemez</span>
                                                </div>
                                                <h6>
                                                    <a href="#">
                                                        Jorger Clarkson -
                                                        Architect Personal
                                                        Portfolio
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="items col-lg-6 order-md-2">
                                        <div class="item">
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/works/4.jpg"
                                                    alt=""
                                                />
                                                <div class="tags">
                                                    <a href="#0">Development</a>
                                                    <a href="#0">UI/UX</a>
                                                    <a href="#0">
                                                        illustration
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="cont mt-30">
                                                <div class="info sub-color mb-10">
                                                    <span>2023</span>
                                                    <span class="dot"></span>
                                                    <span>UiThemez</span>
                                                </div>
                                                <h6>
                                                    <a href="#">
                                                        Newz - Magazine Site
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="items col-lg-6 order-md-2">
                                        <a href="#" class="crv-butn mt-100">
                                            <div class="d-flex">
                                                <span class="text">
                                                    View all works
                                                </span>
                                                <span class="icon">
                                                    <img
                                                        src="assets/imgs/icons/arrow-top-right.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        <section class="services-sa section-padding">
                            <div class="container">
                                <div class="sec-head mb-100">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h6 class="sub-head">
                                                Our Services
                                            </h6>
                                        </div>
                                        {/* <div class="col-lg-7">
                                            <h4>
                                                As a tight-knit team of experts,
                                                we create memorable and
                                                emotional websites,
                                                <span class="sub-color inline">
                                                    digital experiences, and
                                                    native apps.
                                                </span>
                                            </h4>
                                            <a
                                                href="#"
                                                class="butn butn-md butn-bord butn-rounded mt-40"
                                            >
                                                <div class="d-flex align-items-center">
                                                    <span>Learn More</span>
                                                    <span class="icon pe-7s-angle-right ml-10 fz-30"></span>
                                                </div>
                                            </a>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="item md-mb50">
                                            <div class="cont">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <h6>
                                                            ChatBot and <br />{" "}
                                                            WebSearch
                                                        </h6>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/bezier-curve-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text">
                                                    <p>
                                                        We develop intelligent
                                                        ChatBots and advanced
                                                        WebSearch that enhance
                                                        user interaction and
                                                        streamline customer
                                                        support, ensuring your
                                                        clients find exactly
                                                        what they need with
                                                        minimal effort.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/services/1.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="item md-mb50">
                                            <div class="cont">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <h6>
                                                            Company-Specific{" "}
                                                            <br /> AI-Tools
                                                        </h6>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/code-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text">
                                                    <p>
                                                        Our team crafts bespoke
                                                        AI tools tailored to
                                                        your company’s unique
                                                        needs, integrating
                                                        seamlessly with existing
                                                        systems to automate
                                                        processes, enhance
                                                        decision-making, and
                                                        drive innovation.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="img fit-img radius-30">
                                                <img
                                                    src="assets/imgs/services/company_specific.jpg"
                                                    class="services_img"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="item">
                                            <div class="cont justify-content-center">
                                                <div class="d-flex align-items-center">
                                                    <div>
                                                        <h6>
                                                            Creating Images,{" "}
                                                            <br /> Contracts and
                                                            More
                                                        </h6>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/chart-line-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text">
                                                    <p>
                                                        Utilizing
                                                        state-of-the-art AI, we
                                                        generate custom images,
                                                        draft precise contracts,
                                                        and offer comprehensive
                                                        creative solutions that
                                                        empower your brand to
                                                        stand out in a
                                                        competitive market.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="img">
                                                <img
                                                    src="assets/imgs/services/3.png"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/* <section class="services-dm sub-bg radius-30 section-padding">
                            <div class="container section-padding pt-0">
                                <div class="sec-head mb-100">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <h6 class="sub-head">
                                                Our Service Expertise
                                            </h6>
                                        </div>
                                        <div class="col-lg-5">
                                            <h3 class="text-indent md-mb15">
                                                We help you to build a creative
                                                digital business
                                            </h3>
                                        </div>
                                        <div class="col-lg-3">
                                            <div class="text">
                                                <p>
                                                    We are a digital marketing
                                                    agency with expertise, and
                                                    we’re on a mission to help
                                                    you take the next step in
                                                    your business.
                                                </p>
                                                <a
                                                    href="#"
                                                    class="crv-butn mt-40"
                                                >
                                                    <div class="d-flex">
                                                        <span class="text">
                                                            Learn More
                                                        </span>
                                                        <span class="icon">
                                                            <img
                                                                src="assets/imgs/icons/arrow-top-right.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-end">
                                    <div class="col-lg-9">
                                        <div class="item d-flex align-items-center">
                                            <div class="title">
                                                <h2>Branding</h2>
                                            </div>
                                            <div class="text ml-auto">
                                                <div class="d-flex align-items-center">
                                                    <p>
                                                        Brand Identity, Stragegy
                                                        & Consult, <br />
                                                        Position, Rebrand
                                                    </p>
                                                    <div>
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/crown-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item d-flex align-items-center">
                                            <div class="title">
                                                <h2>Design</h2>
                                            </div>
                                            <div class="text ml-auto">
                                                <div class="d-flex align-items-center">
                                                    <p>
                                                        Brand Identity, Stragegy
                                                        & Consult, <br />
                                                        Position, Rebrand
                                                    </p>
                                                    <div>
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/bezier-curve-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item d-flex align-items-center">
                                            <div class="title">
                                                <h2>Code</h2>
                                            </div>
                                            <div class="text ml-auto">
                                                <div class="d-flex align-items-center">
                                                    <p>
                                                        Brand Identity, Stragegy
                                                        & Consult, <br />
                                                        Position, Rebrand
                                                    </p>
                                                    <div>
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/code-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item d-flex align-items-center">
                                            <div class="title">
                                                <h2>Growth</h2>
                                            </div>
                                            <div class="text ml-auto">
                                                <div class="d-flex align-items-center">
                                                    <p>
                                                        Brand Identity, Stragegy
                                                        & Consult, <br />
                                                        Position, Rebrand
                                                    </p>
                                                    <div>
                                                        <div class="icon invert">
                                                            <img
                                                                src="assets/imgs/icons/chart-line-solid.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        {/* <section class="intro-vid ontop">
                            <div class="container">
                                <div
                                    class="bg-img"
                                    data-background="assets/imgs/intro.jpg"
                                >
                                    <div class="states">
                                        <div class="imgs mb-30">
                                            <div class="img fit-img">
                                                <img
                                                    src="assets/imgs/testim/avatar1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <a href="#0" class="icon">
                                                <img
                                                    src="assets/imgs/icons/arrow-top-right.svg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <h3 class="mb-15">7k+ Clients</h3>
                                        <p>
                                            Approaches are prominently featured
                                            on many architect websites.
                                        </p>
                                    </div>
                                    <div class="play-button">
                                        <a
                                            href="https://youtu.be/AzwC6umvd1s"
                                            class="vid"
                                        >
                                            <i class="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section> */}

                        {/* <section class="testimonials-dm section-padding pb-0">
                            <div class="container">
                                <div class="sec-head mb-100">
                                    <div class="row">
                                        <div class="col-lg-5">
                                            <h6 class="sub-head">
                                                What clients say?
                                            </h6>
                                        </div>
                                        <div class="col-lg-7">
                                            <h3 class="text-indent">
                                                We're trusted by the <br />
                                                most important teams.
                                            </h3>
                                            <div class="states d-flex mt-40">
                                                <div>
                                                    <h6>
                                                        <i class="fa-solid fa-check"></i>
                                                        7k+ Customers
                                                    </h6>
                                                </div>
                                                <div class="ml-80">
                                                    <h6>
                                                        <i class="fa-solid fa-check"></i>
                                                        99% Satisfaction
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper process-swiper swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <div class="d-flex mb-30">
                                                    <div class="img">
                                                        <div class="fit-img">
                                                            <img
                                                                src="assets/imgs/testim/avatar1.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <span class="sub-color">
                                                            Design quality
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5>
                                                    “Their services aren’t
                                                    cookie-cutter and are truly
                                                    specific to us.”
                                                </h5>
                                                <div class="d-flex mt-30">
                                                    <span class="sub-color">
                                                        Aaron Beck
                                                    </span>
                                                    <div class="stars ml-auto">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <div class="d-flex mb-30">
                                                    <div class="img">
                                                        <div class="fit-img">
                                                            <img
                                                                src="assets/imgs/testim/avatar2.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <span class="sub-color">
                                                            Design quality
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5>
                                                    “Their services aren’t
                                                    cookie-cutter and are truly
                                                    specific to us.”
                                                </h5>
                                                <div class="d-flex mt-30">
                                                    <span class="sub-color">
                                                        Aaron Beck
                                                    </span>
                                                    <div class="stars ml-auto">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <div class="d-flex mb-30">
                                                    <div class="img">
                                                        <div class="fit-img">
                                                            <img
                                                                src="assets/imgs/testim/avatar3.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <span class="sub-color">
                                                            Design quality
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5>
                                                    “Their services aren’t
                                                    cookie-cutter and are truly
                                                    specific to us.”
                                                </h5>
                                                <div class="d-flex mt-30">
                                                    <span class="sub-color">
                                                        Aaron Beck
                                                    </span>
                                                    <div class="stars ml-auto">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <div class="d-flex mb-30">
                                                    <div class="img">
                                                        <div class="fit-img">
                                                            <img
                                                                src="assets/imgs/testim/avatar4.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <span class="sub-color">
                                                            Design quality
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5>
                                                    “Their services aren’t
                                                    cookie-cutter and are truly
                                                    specific to us.”
                                                </h5>
                                                <div class="d-flex mt-30">
                                                    <span class="sub-color">
                                                        Aaron Beck
                                                    </span>
                                                    <div class="stars ml-auto">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="item">
                                                <div class="d-flex mb-30">
                                                    <div class="img">
                                                        <div class="fit-img">
                                                            <img
                                                                src="assets/imgs/testim/avatar3.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="ml-auto">
                                                        <span class="sub-color">
                                                            Design quality
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5>
                                                    “Their services aren’t
                                                    cookie-cutter and are truly
                                                    specific to us.”
                                                </h5>
                                                <div class="d-flex mt-30">
                                                    <span class="sub-color">
                                                        Aaron Beck
                                                    </span>
                                                    <div class="stars ml-auto">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                </div>
                            </div>
                        </section> */}

                        <section class="marq-sa section-padding">
                            <div class="main-marq shadow-off">
                                <div class="slide-har st1">
                                    <div class="box">
                                        <div class="item">
                                            <h2>
                                                <span>Chat Bot</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>
                                                    Company-Specific AI-Tools
                                                </span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Flexiable Price</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Web Search</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>
                                                    Company-Specific AI-Tools
                                                </span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Flexiable Price</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="box">
                                        <div class="item">
                                            <h2>
                                                <span>Web Search</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>
                                                    Company-Specific AI-Tools
                                                </span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Flexiable Price</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Chat Bot</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Web Search</span>
                                            </h2>
                                        </div>
                                        <div class="item">
                                            <h2>
                                                <span>Flexiable Price</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <section class="blog-sa">
                            <div class="container section-padding">
                                <div class="sec-head mb-100">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <h6 class="sub-head">
                                                Latest Articles
                                            </h6>
                                        </div>
                                        <div class="col-lg-8">
                                            <h3 class="text-indent">
                                                The place that we share
                                                everything related to design
                                                trends, tips and more.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="item md-mb50">
                                            <div class="img fit-img">
                                                <img
                                                    src="assets/imgs/blog/1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="cont mt-30">
                                                <h6>
                                                    <a href="#">
                                                        Hubfolio agency
                                                        revolutionizes work with
                                                        the
                                                        <br />
                                                        power of AI-Driven
                                                    </a>
                                                </h6>
                                                <div class="info d-flex align-items-center mt-20">
                                                    <a href="#0" class="tag">
                                                        <span>
                                                            Design Trends
                                                        </span>
                                                    </a>
                                                    <a href="#0" class="date">
                                                        <span>
                                                            / May 15, 2024
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="item">
                                            <div class="img fit-img">
                                                <img
                                                    src="assets/imgs/blog/2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="cont mt-30">
                                                <h6>
                                                    <a href="#">
                                                        Common UX painpoints in
                                                        Dashboard-related <br />
                                                        projects
                                                    </a>
                                                </h6>
                                                <div class="info d-flex align-items-center mt-20">
                                                    <a href="#0" class="tag">
                                                        <span>Experience</span>
                                                    </a>
                                                    <a href="#0" class="date">
                                                        <span>
                                                            / May 15, 2024
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                    </main>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

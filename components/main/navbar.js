export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="logo" href="/">
                        <img
                            src="/assets/imgs/copeai_logo_white.png"
                            class="logo_img"
                            alt="logo"
                        />
                    </a>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/pricing">
                                    Pricing
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/faq">
                                    FAQ
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav d-flex align-items-center">
                        <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#getdemoModal"
                            class="butn butn-rounded"
                        >
                            <div class="d-flex align-items-center">
                                <span>Request Demo</span>
                                <span class="icon ml-10">
                                    <img
                                        src="assets/imgs/icons/arrow-top-right.svg"
                                        alt=""
                                    />
                                </span>
                            </div>
                        </a>
                        {/* <div class="menu-icon cursor-pointer">
                            <span class="icon ti-align-right">
                                <img src="" alt="" />
                            </span>
                        </div> */}
                    </div>
                </div>
            </nav>

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
                                            <a
                                                href="../startup_agency/index.html"
                                                class="sub-link"
                                            >
                                                Startup Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../creative-studio/index.html"
                                                class="sub-link"
                                            >
                                                Creative Studio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../creative_agency/index.html"
                                                class="sub-link"
                                            >
                                                Creative Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../digital-marketing/index.html"
                                                class="sub-link"
                                            >
                                                Digital Marketing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../modern_portfolio/index.html"
                                                class="sub-link"
                                            >
                                                Modern Portfolio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../digital_studio/index.html"
                                                class="sub-link"
                                            >
                                                Digital Studio
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../modern_agency/index.html"
                                                class="sub-link"
                                            >
                                                Modern Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="../creative_agency2/index.html"
                                                class="sub-link"
                                            >
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
                                    <a
                                        href="../inner_pages/contact.html"
                                        class="link"
                                    >
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
                                    541 Melville Geek, <br /> Palo Alto, CA
                                    94301
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

            <div
                class="modal fade modalZIndex"
                id="getdemoModal"
                tabindex="-1"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div class="container">
                        <div class="user-data-form modal-content">
                            <button
                                type="button"
                                class="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            <div class="form-wrapper m-auto">
                                <div class="tab-content mt-30">
                                    <div
                                        class="tab-pane show active"
                                        role="tabpanel"
                                        id="fc1"
                                    >
                                        <div class="text-center mb-20">
                                            <h2>Demo Request</h2>
                                        </div>
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-6">
                                                    <div class="input-group-meta position-relative mb-25">
                                                        <label>Name*</label>
                                                        <input type="email" />
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="input-group-meta position-relative mb-25">
                                                        <label>Surname*</label>
                                                        <input type="email" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="input-group-meta position-relative mb-20">
                                                        <label>
                                                            Company Name*
                                                        </label>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="input-group-meta position-relative mb-20">
                                                        <label>
                                                            Your Title*
                                                        </label>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="input-group-meta position-relative mb-25">
                                                        <label>Email*</label>
                                                        <input
                                                            type="email"
                                                            placeholder="Youremail@gmail.com"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="input-group-meta position-relative mb-20">
                                                        <label>
                                                            Phone Number*
                                                        </label>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <button class="getdemo-butn butn-rounded w-100 tran3s d-block mb-20 mt-20">
                                                        Send Demo Request
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="logo" href="#">
                    <img
                        src="assets/imgs/copeai_long_logo.png"
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
                            <a class="nav-link active" href="/">
                                Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Pricing
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/faq">
                                FAQ
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="topnav d-flex align-items-center">
                    <a href="#" class="butn butn-rounded">
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
    );
}

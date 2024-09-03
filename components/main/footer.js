export default function Footer() {
    return (
        <footer class="footer-sa pb-80">
            <div class="container section-padding">
                <div class="sec-head mb-80">
                    <div class="row">
                        <div class="col-lg-5">
                            <a href="/" class="logo md-mb80">
                                <img src="assets/imgs/copeai_white_long_logo.png" alt="" />
                            </a>
                        </div>
                        <div class="col-lg-6">
                            <h3 class="text-indent">
                                We hope to empower user and simplify their
                                everyday lives.
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="contact-info">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="item">
                                        <span class="sub-color">location</span>
                                        <p>
                                            Teknokent, Reşitpaşa Mah. Katar Cad,
                                            Arı Çk. No:3 Binası B109, 34485
                                            Sarıyer/İstanbul
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 d-flex justify-content-end justify-end">
                                    <div class="item">
                                        <span class="sub-color">inquiry</span>
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
                            <div class="copy sub-color md-mb50">
                                <p>
                                    © 2024
                                    <a href="#0">CopeAI</a>. All Right
                                    Reserved
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 d-flex justify-content-end">
                            <div class="links sub-color d-flex justify-content-between">
                                <a href="/" class="active">
                                    Home
                                </a>
                                <a href="/pricing">Pricing</a>
                                <a href="/faq">FAQ</a>
                                <a href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

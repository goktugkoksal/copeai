import "/public/css/plugins.css";
import "/public/assets/css/home7-style.css";
import "/styles/common_style.css";
import "/public/assets/css/inner_pages.css";

import Script from "next/script";
import Layout from "/states/layout";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Script
                src="js/lib/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="js/lib/jquery-migrate-3.4.0.min.js"
                strategy="beforeInteractive"
            ></Script>

            <Script src="js/lib/plugins.js"></Script>

            <Script src="js/gsap_lib/gsap.min.js"></Script>
            <Script src="js/gsap_lib/ScrollSmoother.min.js"></Script>
            <Script src="js/gsap_lib/ScrollTrigger.min.js"></Script>
            <Script src="js/gsap_lib/SplitText.min.js"></Script>

            <Script
                src="js/common_scripts.js"
                strategy="afterInteractive"
            ></Script>

            <Script
                src="assets/js/scripts.js"
                strategy="afterInteractive"
            ></Script>
            <Script src="assets/js/inner_pages.js"></Script>

            <Script src="js/gsap_lib/matter.js"></Script>
            <Script src="js/gsap_lib/throwable.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></Script>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></Script>
        </Layout>
    );
}

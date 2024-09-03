
import "/public/css/plugins.css";
import "/public/assets/css/home7-style.css"
import "/styles/common_style.css"

import Script from "next/script";
import Layout  from "/states/layout";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Script
                src="public/js/lib/jquery-3.6.0.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="public/js/lib/jquery-migrate-3.4.0.min.js"
                strategy="beforeInteractive"
            ></Script>

            <Script
                src="public/js/lib/plugins.js"
                strategy="beforeInteractive"
            ></Script>

            <Script
                src="public/js/gsap_lib/gsap.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="public/js/gsap_lib/ScrollSmoother.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="public/js/gsap_lib/ScrollTrigger.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="public/js/gsap_lib/SplitText.min.js"
                strategy="beforeInteractive"
            ></Script>

            <Script
                src="public/js/common_scripts.js"
                strategy="beforeInteractive"
            ></Script>

            <Script
                src="public/assets/js/scripts.js"
                strategy="beforeInteractive"
            ></Script>
        </Layout>
    );
}

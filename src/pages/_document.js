// eslint-disable-next-line @next/next/no-document-import-in-page
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Link to manifest.json */}
                <link rel="manifest" href="/manifest.json" />

                {/* Add icons */}
                <link rel="apple-touch-icon" href="/icon-192x192.png" />

                {/* Meta tags for theme color */}
                <meta name="theme-color" content="#000000" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

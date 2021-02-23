import Document, { HTML, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
    render() {
        return (
            <HTML>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </HTML>
        );
    }
}
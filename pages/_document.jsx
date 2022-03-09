import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}
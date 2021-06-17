import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';
export default function Layout({children}) {
	return (
		<div>
			<Head>
        <meta name="description" content="endepointe.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Open+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Bungee+Outline&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
				</Head>
			<Navbar/>
			{children}
			<Footer/>
		</div>
	)
}

import type {NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
    return (
        <div className={'bg-black p-10 pt-20 min-h-screen'}>
            <Head>
                <title>Anshuman Bhardwaj</title>
                <meta name="description" content="Anshuman Bhardwaj"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={'w-2/3 mx-auto'}>
                <h1 className={'text-gray-100 text-5xl'}>Hi, I&apos;m Anshuman</h1>
                <p className={'text-gray-300 text-lg mt-10 w-2/3'}> I love sammy🐶, music (Bollywood & Enrique) and gaming (MOHW and DMC). <br/> Like Batman 🦇, I work late
                    at night. I like teaching and sharing what I learned mostly the hard way. Other than that I build
                    tools for humans 😎.
                </p>
            </main>
        </div>
    )
}

export default Home

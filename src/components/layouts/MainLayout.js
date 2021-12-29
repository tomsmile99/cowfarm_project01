import Head from 'next/head'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
import { motion } from "framer-motion";

const isVisible = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
}

const MainLayout = ({children, pageTitle, description, KeyWords, ...props}) => {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta httpEquiv="Content-Language" content="th" />
                <meta name="KeyWords" content={KeyWords} />	
                <meta name="author" content="Tomsmile" />
                <meta name="google-site-verification" content="xWDq6KBs5hxoNdA0AX8Zm29nSQsKc1vO5SU_bIk_slM" />
            </Head>
            <Navbar/>
                <motion.main initial="initial" animate="animate" variants={isVisible}> 
                    {children}
                </motion.main>
            <Footer />
        </>
    )
}

export default MainLayout

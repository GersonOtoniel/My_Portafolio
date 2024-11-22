import { motion } from "framer-motion"
import { Helmet, HelmetProvider } from "react-helmet-async"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 20 },
    exit: { opacity: 0, x: -0, y: 20 },
  }

const Layout = ({children, title}) => {
    const t = `${title} - Gerson González`

    return(
        <HelmetProvider>
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                //whileHover="hover"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative'}}
            >
                <>
                {title && (
                    <Helmet>
                        <title>{t}</title>

                    </Helmet>
                )}
                {children}
                </>
            </motion.article>
        </HelmetProvider>
    )
}

export default Layout
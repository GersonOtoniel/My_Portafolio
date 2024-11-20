import { motion } from "framer-motion"
import { Helmet } from 'react-helmet'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 20 },
    exit: { opacity: 0, x: -0, y: 20 },
    hover: {scale:1.05}
  }

const Layout = ({children, title}) => {
    const t = `${title} - Gerson González`

    return(
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            whileHover="hover"
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
    )
}

export default Layout
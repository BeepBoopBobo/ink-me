import React from "react";
import styles from './ArtistCard.module.css';
import { FaInstagram, FaTiktok, FaYoutube, FaImages } from 'react-icons/fa';
import { motion } from 'framer-motion/dist/framer-motion';

const variants = {
    hiddenRight: { x: -100, opacity: 0 },
    hiddenLeft: { x: 100, opacity: 0 },
    swipeIn: { x: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.3 } }
}


const ArtistCard = (props) => {

    return <div className={styles.cardContainer}>
        {props.index % 2 ? <>
            <div className={styles.cardDescriptionLeft}>
                <motion.div className={styles.cardName}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.6 } }}
                    viewport={{ once: true }}>
                    {props.name}
                </motion.div>
                <div className={styles.tags}>
                    {props.tags.map((item, index) =>
                        <motion.span className={styles.cardTag}
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.6 + (0.1 * index) } }}
                            viewport={{ once: true }}>#{item}
                        </motion.span>)}
                </div>
                <motion.div className={styles.biography}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1 } }}
                    viewport={{ once: true }}>{props.bio}
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1.2 } }}
                    viewport={{ once: true }}>
                    <a href='#' className={styles.galeryLink}><FaImages /> Moje tvorba</a></motion.div>
                <motion.div className={styles.socials}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1.4 } }}
                    viewport={{ once: true }}>
                    {props.instagram !== '' ? <a href={`https://www.instagram.com/${props.instagram}`} className={styles.socialLink}><FaInstagram /> {props.instagram}</a> : null}
                    {props.tikTok !== '' ? <a href={`https://www.tiktok.com/@${props.tikTok}`} className={styles.socialLink}> <FaTiktok /> {props.tikTok}</a> : null}
                    {props.youTube !== '' ? <a href={`https://www.youtube.com/c/${props.youTube}`} className={styles.socialLink}><FaYoutube /> {props.youTube}</a> : null}
                </motion.div>
            </div>

            <motion.div className={styles.cardPicture}
                initial='hiddenLeft'
                whileInView='swipeIn'
                viewport={{ once: true }}
                variants={variants}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </motion.div>

        </> : <>

            <motion.div className={styles.cardPicture}
                initial='hiddenRight'
                whileInView='swipeIn'
                viewport={{ once: true }}
                variants={variants}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </motion.div>

            <div className={styles.cardDescription}>
                <motion.div className={styles.cardName}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.6 } }}
                    viewport={{ once: true }}>
                    {props.name}
                </motion.div>
                <div className={styles.tags}>
                    {props.tags.map((item, index) =>
                        <motion.span className={styles.cardTag}
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 0.6 + (0.1 * index) } }}
                            viewport={{ once: true }}>
                            #{item}
                        </motion.span>)}
                </div>
                <motion.div className={styles.biography}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1 } }}
                    viewport={{ once: true }}>
                    {props.bio}
                </motion.div>
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1.2 } }}
                    viewport={{ once: true }}>
                    <a href='#' className={styles.galeryLink}><FaImages /> Moje tvorba</a></motion.div>
                <motion.div className={styles.socials}
                    initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 0.8, delay: 1.4 } }}
                    viewport={{ once: true }}>
                    {props.instagram !== '' ? <a href={`https://www.instagram.com/${props.instagram}`} className={styles.socialLink}><FaInstagram /> {props.instagram}</a> : null}
                    {props.tikTok !== '' ? <a href={`https://www.tiktok.com/@${props.tikTok}`} className={styles.socialLink}> <FaTiktok /> {props.tikTok}</a> : null}
                    {props.youTube !== '' ? <a href={`https://www.youtube.com/c/${props.youTube}`} className={styles.socialLink}><FaYoutube /> {props.youTube}</a> : null}
                </motion.div>
            </div>
        </>
        }
    </div>
}

export default ArtistCard;
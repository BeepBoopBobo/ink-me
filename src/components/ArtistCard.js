import React from "react";
import styles from './ArtistCard.module.css';
import { FaInstagram, FaTiktok, FaYoutube, FaImages } from 'react-icons/fa';

const ArtistCard = (props) => {
    return <div className={styles.cardContainer}>
        {props.index % 2 ? <>
            <div className={styles.cardDescriptionLeft}>
                <div className={styles.cardName}>{props.name}</div>
                <div className={styles.tags}>
                    {props.tags.map(item => <span className={styles.cardTag}>#{item}</span>)}
                </div>
                <div className={styles.biography}>{props.bio}</div>
                <a href='#' className={styles.galeryLink}><FaImages /> Moje tvorba</a>
                <div className={styles.socials}>
                    {props.instagram !== '' ? <a href={`https://www.instagram.com/${props.instagram}`} className={styles.socialLink}><FaInstagram /> {props.instagram}</a> : null}
                    {props.tikTok !== '' ? <a href={`https://www.tiktok.com/@${props.tikTok}`} className={styles.socialLink}> <FaTiktok /> {props.tikTok}</a> : null}
                    {props.youTube !== '' ? <a href={`https://www.youtube.com/c/${props.youTube}`} className={styles.socialLink}><FaYoutube /> {props.youTube}</a> : null}
                </div>
            </div>
            <div className={styles.cardPicture}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </div>
        </> : <>
            <div className={styles.cardPicture}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </div>
            <div className={styles.cardDescription}>
                <div className={styles.cardName}>{props.name}</div>
                <div className={styles.tags}>
                    {props.tags.map(item => <span className={styles.cardTag}>#{item}</span>)}
                </div>
                <div className={styles.biography}>{props.bio}</div>
                <a href='#' className={styles.galeryLink}><FaImages /> Moje tvorba</a>
                <div className={styles.socials}>
                    {props.instagram !== '' ? <a href={`https://www.instagram.com/${props.instagram}`} className={styles.socialLink}><FaInstagram /> {props.instagram}</a> : null}
                    {props.tikTok !== '' ? <a href={`https://www.tiktok.com/@${props.tikTok}`} className={styles.socialLink}> <FaTiktok /> {props.tikTok}</a> : null}
                    {props.youTube !== '' ? <a href={`https://www.youtube.com/c/${props.youTube}`} className={styles.socialLink}><FaYoutube /> {props.youTube}</a> : null}
                </div>
            </div>
        </>
        }
    </div>
}

export default ArtistCard;
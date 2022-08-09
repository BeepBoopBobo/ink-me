import React from "react";
import styles from './ArtistCard.module.css';


const ArtistCard = (props) => {
    return <div className={styles.cardContainer}>
        {props.index % 2 ? <>
            <div className={styles.cardDescriptionLeft}>
                <h2>{props.name}</h2>
                {props.tags.map(item => <span className={styles.cardTag}>{item}</span>)}
                {props.bio}
            </div>
            <div className={styles.cardPicture}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </div>
        </> : <>
            <div className={styles.cardPicture}>
                <img className={styles.Picture} src={props.image} alt={`Artist ${props.name}`} />
            </div>
            <div className={styles.cardDescription}>
                <h2>{props.name}</h2>
                {props.tags.map(item => <span className={styles.cardTag}>{item}</span>)}
                {props.bio}
            </div>
        </>
        }
    </div>
}

export default ArtistCard;
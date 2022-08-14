import React from "react";
import { artists } from '../../Data';
import ArtistCard from "../ArtistCard";

const AboutUs = () => {
    return <>
        {artists.map((item, index) =>

            <ArtistCard
                index={index}
                name={item.name}
                image={item.image}
                bio={item.bio}
                tags={item.tags}
                youTube={item.youTube}
                tikTok={item.tikTok}
                instagram={item.instagram}
            >
            </ArtistCard>
        )}
    </>

}
export default AboutUs;
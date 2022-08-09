import React from "react";
import { artists } from '../../Artists';
import ArtistCard from "../ArtistCard";

const AboutUs = () => {
    return <>
        {artists.map((item, index) =>
            <ArtistCard
                index={index}
                name={item.name}
                bio={item.bio}
                image={item.image}
                tags={item.tags}>
            </ArtistCard>
        )}
    </>

}
export default AboutUs;
import React, { useState,useEffect } from 'react';
import NetworkDetector from '../HOC/NetworkDetector';

const ListImages = () => {
    const [images,setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, [])

    const fetchImages = async () => {
        const result = await fetch("https://api.slingacademy.com/v1/sample-data/photos");
        const data = await result.json();
        setImages(data.photos);
    }
    return(
        <div className='image-list'>
            {images.map(data => <img src={data["url"]} alt={data["title"]} key={data["id"]} className="image" />)}
        </div>
    )
}

export default NetworkDetector(ListImages);
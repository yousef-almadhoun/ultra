import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Portfolio, PortfolioTitle, PortfolioTitleSpan, PortfolioList, PortfolioItem, ImageWrapper, Image, Overlay, OverlaySpan } from './style'

const Protfolio = () => {

    const [ images, setImages ] = useState([]);

    useEffect(() => {
      axios.get('js/data.json').then(res => {
        setImages(res.data.portfolio);
      });
    }, []);

    const portfolioImages = images.map((imageItem) => {
      return(
        <ImageWrapper key={imageItem.id}>
          <Image src={imageItem.image} alt="" />
          <Overlay>
              <OverlaySpan>
                  Show Image
              </OverlaySpan>
          </Overlay>
        </ImageWrapper>
      );
    });

    return (
      <Portfolio>
      <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
      <PortfolioList>
          <PortfolioItem active >All</PortfolioItem>
          <PortfolioItem>HTML</PortfolioItem>
          <PortfolioItem>Photoshop</PortfolioItem>
          <PortfolioItem>Wordpress</PortfolioItem>
          <PortfolioItem>Mobile</PortfolioItem>
      </PortfolioList>
      
      <div className="box">
        { portfolioImages }
      </div>
  </Portfolio>
    );
}

export default Protfolio;
import React from 'react';
// import Img from '@Components/atoms/image'
import Badge from '@Components/atoms/badge';
import Button from '@Components/atoms/button';
import Card from '@Components/atoms/card';
import ContentProduct from '@Components/molecules/content-product';
import CardProduct from '@Components/organisms/card-product';
function Home() {
  return (
    <div className="Home" style={{maxWidth:'400px'}}>
      <Badge label='uwei'/>
      <Button />
      <Card/>
      <ContentProduct discount={50}  price={100000} title='ss'/>
      <CardProduct type='active' discount={50} imgSrc='https://res.cloudinary.com/demo/image/fetch/https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg' price={100000} title='ss'/>
    </div>
  );
}

export default Home;


// import ExampleCarouselImage from 'components/ExampleCarouselImage';

'use client';
import { Carousel } from 'flowbite-react';
const Merch=()=>{
    return (
        <>
        <div className="ourmerch container">
            <div className="content flex4 container2">
                <div className="heading2" >
                    <h1 className='text-white' style={{fontFamily: 'Track'}}>OUR</h1>
                    <h1 className='green' style={{fontFamily: 'Track'}}>MERCH</h1>
                </div>
                <div className="merchDesigns">
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
  <Carousel slideInterval={5000}>
    <img src="/images/image1.png" alt="..." className="w-full h-full object-cover" />
    <img src="/images/image2.png" alt="..." className="w-full h-full object-cover" />
  </Carousel>
</div>
    </div>
</div>
                </div>
          
        
        
        </>
    )
}

export default Merch;
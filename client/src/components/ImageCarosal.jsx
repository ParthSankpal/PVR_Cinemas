import React, { useEffect, useRef, useState } from "react";

const ImageCarosal = () => {

    const images = [
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/INOXItalianFoodFest_99039_LjShs4To.jpg",
        
        'https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/Kotak-banners_1440x340_41227_gp9mZ7EE.jpg',
        "https://originserver-static1-uat.pvrcinemas.com/pvrcms/banners/EROSLaunchweb_4611_mTAOyumR.jpg"
      ];
    
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const intervalRef = useRef(null);
    
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex(prevIndex => {
            if (prevIndex === images.length - 1) {
              setTimeout(() => setCurrentImageIndex(0), 1000); 
              return prevIndex;
            }
            return prevIndex + 1;
          });
        }, 3000); 
    
        return () => clearInterval(interval);
      }, [images.length]);


  return (
    <>
        
        <div className="overflow-hidden mt-14">
  <div
    className="flex transition-transform duration-1000"
    style={{
      width: `calc(100% * ${images.length})`, 
      transform: `translateX(-${currentImageIndex * 100 / images.length}%)`, 
    }}
  >
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index + 1}`}
        className="block w-full h-[100px] sm:h-[340px]" 
        style={{ width: `calc(100% / ${images.length})` }} 
      />
    ))}
  </div>
</div>

    </>
  );
};

export default ImageCarosal;

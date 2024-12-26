import banner from'../../../assets/banner/banner.png';

export default function VideoSection() {
  return (
    
    <div className="container mx-auto">
      <div className="relative py-5 mt-5 mb-4 pt-5 lg:container lg:m-auto">
  
      <video width="100%" className="w-full rounded-lg" controls>
          <source 
            src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>


    </div>
   
   </div>
  );
}

import banner from'../../../assets/banner/banner.png';

export default function reeling() {

  const videoData = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
    {
      id: 2,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
    {
      id: 3,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
    {
      id: 4,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
    {
      id: 5,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
    {
      id: 6,
      src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
    },
  ];

  return (
    
    <div className="container mx-auto">
         
   

<div className="grid grid-flow-col md:gap-4 auto-cols-[minmax(145px,1fr)] overflow-x-auto
 scrollbar-hide auto-cols-[minmax(145px,1fr)]">
  
  {videoData.map((video) => (
        <div key={video.id} className="relative cursor-pointer">
          <video
            src={video.src}
            className="w-32 h-56 object-cover rounded-lg md:w-[194px] md:h-[337px]"
            muted
            loop
            autoPlay
          ></video>
        </div>
      ))}

  </div>


    </div>
  );
}

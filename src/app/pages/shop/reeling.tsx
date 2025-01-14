import { useGetStoriesQuery } from "~/store/api/storiesApi";
import banner from "../../../assets/banner/banner.png";

export default function reeling() {
  const { data: stories } = useGetStoriesQuery({});
  // console.log("Stories Details", stories);

  // const videoData = [
  //   {
  //     id: 1,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  //   {
  //     id: 2,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  //   {
  //     id: 3,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  //   {
  //     id: 4,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  //   {
  //     id: 5,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  //   {
  //     id: 6,
  //     src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ab2ce36f-9379-4bec-a5be-8a09d9a41318.mov",
  //   },
  // ];

  return (
    <div className="container mx-auto">
      <div className="scrollbar-hide grid auto-cols-[minmax(145px,1fr)] grid-flow-col overflow-x-auto md:gap-4">
        {stories?.map((video) => (
          <div key={video.id} className="relative cursor-pointer">
            <video
              src={video?.path}
              className="h-56 w-32 rounded-lg object-cover md:h-[337px] md:w-[194px]"
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

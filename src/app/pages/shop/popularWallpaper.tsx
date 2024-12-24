import banner from'../../../assets/banner/banner.png';
// import { Card } from '~/components/ui/card'; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';

export default function PopularWallpaper() {
  return (
    <div className="container mx-auto text-center mt-5">
     <h3 className='text-xl font-semibold lg:text-[27px] 3xl:text-3xl font-poppins ' >Popular Wallpaper</h3>
    <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">

            <div className="card-wrapper">
                  {/* <Card   CardHeader={"tesing"} CardFooter={"tesing"} CardTitle={"tesing"} CardDescription={"tesing"} CardContent={"tesing"}></Card> */}
  <Card className="custom-card-class   h-52 md:h-80 w-auto items-center justify-center">
      <CardHeader>
        <CardTitle className="text-blue-500">Card Title 1</CardTitle>
        <CardDescription>This is a description of the card.2</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card.3</p>
      </CardContent>
      <CardFooter>
        <button className="btn-primary">Click Me</button>
      </CardFooter>
    </Card>
            </div>
            </div>
    </div>
  );
}

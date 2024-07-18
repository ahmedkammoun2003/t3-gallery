import Link from "next/link";

export default function HomePage() {
  const mockURL = [
    "https://utfs.io/f/23776405-8995-496c-94ec-e17d516d5c58-4z6ij9.png"
  ];
  const mockimages = mockURL.map((url,index)=>({
    id: index + 1 ,
    url
  }));
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockimages,...mockimages,...mockimages].map((image)=>(
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      hello gallery in progress
    </main>
  );
}

import { db } from "~/server/db";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const mockURL = [
    "https://utfs.io/f/23776405-8995-496c-94ec-e17d516d5c58-4z6ij9.png"
  ];
  const mockimages = mockURL.map((url,index)=>({
    id: index + 1 ,
    url
  }));
  const posts = await db.query.posts.findMany();
  console.log(posts);
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        <div className="">{posts.map((post)=>(
          <div key={post.id}>{post.name}</div>
        ))}</div>
        {[...mockimages,...mockimages,...mockimages].map((image,index)=>(
          <div key={index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      hello gallery in progress
    </main>
  );
}

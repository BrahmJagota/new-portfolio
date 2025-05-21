// export default function Project ({right}: {right?: boolean}) {
//     return (
//         <div className={`flex gap-4 h-75 p-4 ${right ? "flex-row-reverse" : ""}`}>
//             <div className="h-full w-1/3 rounded-lg bg-blue-500"> </div>
//             <div className="h-full flex-1 flex flex-col ">
//                 <h3 className="!text-xl font-bold">Tunify</h3>
//                 <p className="text-sm">Meet Tunify, your go-to music platform! 🎵 Securely upload, purchase, and download music with ease. Scalable file storage? Thanks to AWS S3! Smooth payment experience? Razorpay’s got you covered. With Google OAuth and JWT, your sessions are always secure. 🚀</p>

//             </div>
//         </div>
//     )
// }

interface ProjectProps {
    title: string;
    description: string;
    techUsed: string[];
    img: string;
    link: string;
}

export default function Project ({title, description, techUsed, img, link}: ProjectProps) {
    return (
        <a href={link} target="_blank" className="relative w-full m-4 py-8 group cursor-pointer">
  <div className="lg:absolute right-10 hidden md:block top-1/2 -translate-y-1/2 z-10 h-0 w-72 bg-red-400 md:group-hover:h-[200%] duration-300">
    <img
      src={img}
      alt="image"
      loading="lazy"
      width={1000}
      height={1000}
      className="h-full w-full object-cover"
    />
  </div>

  <h2 className="text-xl font-bold">{title}</h2>

  <p className="text-gray-400 text-sm md:w-2/3">{description}</p>

  <div className="flex gap-2 mt-2 flex-wrap">
    {techUsed.map((tech, index) => (
      <small key={index} className="border px-3 rounded-full">{tech}</small>
    ))}
  </div>
</a>

    )
}
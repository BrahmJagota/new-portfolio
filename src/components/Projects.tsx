import Project from './Project';
import whiteboard from '../assets/whiteboard.png';
import blind from '../assets/blind.png';
import music from '../assets/music.png';
export default function () {
    return (
        <div className="max-w-screen w-full md:w-4/5 mt-20 mx-auto flex flex-col">
            <Project title="Tunify" description="Meet Tunify, your go-to music platform! 🎵 Securely upload, purchase, and download music with ease. Scalable file storage? Thanks to AWS S3! Smooth payment experience? Razorpay’s got you covered. With Google OAuth and JWT, your sessions are always secure. 🚀" techUsed={["ReactJs", "TailwindCSS","Express", "AWS S3", "Mongodb", "Razorpay", "OAuth"]} img={music} link="https://github.com/BrahmJagota/tunify" />
            <hr />
            <Project title="Blind" description="Stay anonymous and connect with fellow college students on Blind. 💬 Create public or private chat rooms, enjoy real-time messaging, and keep things secure with verified college signups. A safe space to chat and share! 🎭" techUsed={["ReactJs", "Express", "Mongodb", "Socket.io"]} img={blind} link="https://github.com/BrahmJagota/blind"/>
            <hr />
            <Project title="Collaborative-Whiteboard" description="Let’s brainstorm together! ✏️ The Collaborative Whiteboard lets teams draw, share ideas, and collaborate in real time. Seamless updates with Socket.io and drawing tools powered by the Canvas API make it the perfect virtual canvas. 🖌️" techUsed={["ReactJs", "Express", "Mongodb", "Socket.io", "Canvas API "]} img={whiteboard} link="https://github.com/BrahmJagota/collaborative-whiteboard" />
        </div>
    )
}
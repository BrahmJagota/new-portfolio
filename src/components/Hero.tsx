import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mybg from "../assets/mybg.png";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveringVisiblePixel, setHoveringVisiblePixel] = useState(false);
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const [showSVG, setShowSVG] = useState(true);
  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.to(".vi-mask-group", {
      scale: 15,
      duration: 4,
      ease: "Power4.easeInOut",
      transformOrigin: "75% 50%",
    }).to(".vi-mask-group", {
      rotate: 90,
      yPercent: -170,
      xPercent: -80,
      duration: 2,
      delay: -3.5,
      ease: "Power4.easeInOut",
      transformOrigin: "75% 50%",
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          svgWrapperRef.current?.remove();
          setShowSVG(false);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    const main = document.querySelector(".main");

    if (!main) return;

    gsap.set(".main .text", {
      xPercent: -50, 
    });

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const xMove = (mouseEvent.clientX / window.innerWidth - 0.5) * 40;

      gsap.to(".main .text", {
        x: `${xMove * 0.2}%`,
      });

      gsap.to(".bg", {
        x: -xMove * 2,
      });
    };

    main.addEventListener("mousemove", handleMouseMove);

    return () => {
      main.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showSVG]);

  useEffect(() => {
    const img = imgRef.current;
    const canvas = canvasRef.current;

    if (!img || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawImageToCanvas = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };

    if (img.complete) {
      drawImageToCanvas();
    } else {
      img.onload = drawImageToCanvas;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const scaleX = img.naturalWidth / img.width;
      const scaleY = img.naturalHeight / img.height;

      const realX = Math.floor(x * scaleX);
      const realY = Math.floor(y * scaleY);

      const pixel = ctx.getImageData(realX, realY, 1, 1).data;
      const alpha = pixel[3];

      setHoveringVisiblePixel(alpha > 0);
    };

    img.addEventListener("mousemove", handleMouseMove);
    img.addEventListener("mouseleave", () => setHoveringVisiblePixel(false));

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
      img.removeEventListener("mouseleave", () =>
        setHoveringVisiblePixel(false)
      );
    };
  }, []);

  return (
    <div className="">
      {showSVG && (
        <div className="max-h-screen max-w-screen fixed inset-0 z-[150]">
          <svg
            className="svg absolute inset-0 w-full h-full z-10"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <mask id="viMask">
                <rect width="100%" height="100%" fill="white" />
                <g className="vi-mask-group">
                  <text
                    x="50%"
                    y="50%"
                    fontSize="250"
                    textAnchor="middle"
                    fill="black"
                    dominantBaseline="middle"
                    fontFamily="'roboto', sans-serif"
                    fontWeight="bold"
                  >
                    BJ
                  </text>
                </g>
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="white" mask="url(#viMask)" />
          </svg>
        </div>
      )}

      {/* second */}

      <div className="main h-screen relative bg-black  ">
        <div className="h-full overflow-hidden relative z-100">
          <img
            ref={imgRef}
            src={mybg}
            alt=""
            className={`bg absolute left-1/2 lg:top-0 top-60 -translate-x-1/2 w-[700px] lg:w-[1000px] max-w-[1920px] h-auto z-[1] transition-opacity duration-300 ${
              hoveringVisiblePixel ? "opacity-50" : "opacity-100"
            }`}
          />

          <canvas ref={canvasRef} className="hidden" />

          <div className="text text-white absolute top-1/10  z-0 flex justify-center flex-col items-center left-1/2 ">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl relative ">
              Hi, I am
            </h1>
            <h1 className="flex text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span>B</span>rahm <span className="ml-4">J</span>agota
            </h1>
          </div>
        </div>
        <hr className="bg-[#272727]" />
      </div>
    </div>
  );
}

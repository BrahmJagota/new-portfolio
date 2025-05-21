import { useGSAP } from "@gsap/react";
// import { ReactComponent as GsapIcon } from '../assets/gsap.svg';
import React, { useRef } from "react";
import gsap from "gsap";
const skillsData = {
  languages: [
    { name: "JavaScript", icon: "devicon-javascript-plain" },
    { name: "TypeScript", icon: "devicon-typescript-plain" },
    { name: "C++", icon: "devicon-cplusplus-plain" },
    { name: "Java", icon: "devicon-java-plain" },
    { name: "Python", icon: "devicon-python-plain" },
  ],
  frameworks: [
    { name: "React", icon: "devicon-react-original" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Socket.io", icon: "devicon-socketio-original" },
    { name: "MongoDB", icon: "devicon-mongodb-plain" },
    { name: "Redis", icon: "devicon-redis-plain" },
    { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
    { name: "Nestjs", icon: "devicon-nestjs-original" },
  ],
  tools: [
    { name: "VS Code", icon: "devicon-vscode-plain" },
    { name: "Git", icon: "devicon-git-plain" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Postman", icon: "devicon-postman-plain" },
  ],
};

const SkillBox = ({ skill }: { skill: { name: string; icon: string } }) => {
  return (
    <div
      key={skill.name}
      className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:border-[#FFA500] dark:hover:border-[#FFA500] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer whitespace-nowrap w-fit bg-white bg-opacity-50 dark:bg-transparent"
    >
      <i
        className={`${skill.icon} text-base md:text-lg text-gray-700 dark:text-gray-300 group-hover:text-[#FFA500] dark:group-hover:text-[#FFA500]`}
      ></i>
      <span className="text-[10px] md:text-xs text-gray-700 dark:text-gray-300 group-hover:text-[#FFA500] dark:group-hover:text-[#FFA500]">
        {skill.name}
      </span>
    </div>
  );
};

const Skills = (): React.ReactElement => {
  const svgRef = useRef<SVGSVGElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(ref.current, { width: 0 });

    gsap.to(ref.current, {
      width: "100%",
      scrollTrigger: {
        trigger: ".container",
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <div className=" w-4/5 mx-auto flex items-center justify-center flex-col gap-2  my-8 md:my-12 px-4 md:px-0 ">
        <h1 className="font-bold text-base md:text-2xl text-gray-900 dark:text-white">
          Skills
        </h1>
        <div className="w-full ">
          <div className="mb-4 md:mb-6">
            <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-lg">
              Languages
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {skillsData.languages.map((skill) => (
                <SkillBox key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          <div className="mb-4 md:mb-6">
            <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-lg">
              Frameworks & Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {skillsData.frameworks.map((skill) => (
                <SkillBox key={skill.name} skill={skill} />
              ))}
              <div
                key={"gsap"}
                className="flex items-center gap-1 md:gap-1.5 px-1.5 md:px-2 py-0.5 md:py-2 border border-gray-300 dark:border-gray-700 rounded-md hover:border-[#FFA500] dark:hover:border-[#FFA500] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer whitespace-nowrap w-fit bg-white bg-opacity-50 dark:bg-transparent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  fill="none"
                  viewBox="0 0 82 30"
                >
                  <path
                    fill="#FFFCE1"
                    d="M23.81 14.013v.013l-1.075 4.665c-.058.264-.322.458-.626.458H20.81a.218.218 0 0 0-.208.155c-1.198 4.064-2.82 6.858-4.962 8.535-1.822 1.428-4.068 2.093-7.069 2.093-2.696 0-4.514-.867-6.056-2.578C.478 25.09-.364 21.388.146 16.926 1.065 8.549 5.41.096 13.776.096c2.545-.023 4.543.762 5.933 2.33 1.47 1.657 2.216 4.154 2.22 7.421a.55.55 0 0 1-.549.536h-6.13a.42.42 0 0 1-.407-.41c-.05-2.259-.72-3.36-2.052-3.36-2.35 0-3.736 3.19-4.471 4.959-1.027 2.47-1.55 5.152-1.447 7.824.049 1.244.249 2.994 1.43 3.718 1.047.643 2.541.217 3.446-.495.904-.711 1.632-1.942 1.938-3.065.043-.156.046-.277.005-.332-.043-.055-.162-.068-.253-.068h-1.574a.572.572 0 0 1-.438-.202.42.42 0 0 1-.087-.362l1.076-4.674c.053-.24.27-.42.537-.453v-.011h10.33c.024 0 .049 0 .072.005.268.034.457.284.452.556h.002Z"
                  />
                  <path
                    fill="#FFFCE1"
                    d="M41.594 8.65a.548.548 0 0 1-.548.531H35.4c-.37 0-.679-.3-.679-.665 0-1.648-.57-2.45-1.736-2.45s-1.918.717-1.94 1.968c-.025 1.395.764 2.662 3.01 4.84 2.957 2.774 4.142 5.232 4.085 8.48C38.047 26.605 34.476 30 29.042 30c-2.775 0-4.895-.743-6.305-2.207-1.431-1.486-2.087-3.668-1.95-6.485a.548.548 0 0 1 .549-.53h5.84a.55.55 0 0 1 .422.209.48.48 0 0 1 .106.384c-.065 1.016.112 1.775.512 2.195.256.272.613.41 1.058.41 1.079 0 1.711-.763 1.735-2.09.02-1.148-.343-2.155-2.321-4.19-2.555-2.496-4.846-5.075-4.775-9.13.042-2.351.976-4.502 2.631-6.056C28.294.868 30.687 0 33.465 0c2.783.02 4.892.813 6.269 2.359 1.304 1.466 1.932 3.582 1.862 6.29h-.002Z"
                  />
                  <path
                    fill="#FFFCE1"
                    d="m59.096 29.012.037-27.932a.525.525 0 0 0-.529-.533h-8.738c-.294 0-.423.252-.507.42L36.707 28.842v.005l-.005.006c-.14.343.126.71.497.71h6.108c.33 0 .548-.1.656-.308l1.213-2.915c.149-.388.177-.424.601-.424h5.836c.406 0 .415.008.408.405l-.131 2.71a.525.525 0 0 0 .529.532h6.17a.522.522 0 0 0 .403-.182.458.458 0 0 0 .104-.369Zm-10.81-9.326c-.057 0-.102-.001-.138-.005a.146.146 0 0 1-.13-.183c.012-.041.029-.095.053-.163l4.377-10.827c.038-.107.086-.212.136-.314.071-.145.157-.155.184-.047.023.09-.502 11.118-.502 11.118-.041.413-.06.43-.467.464l-3.509-.041h-.008l.003-.002Z"
                  />
                  <path
                    fill="#FFFCE1"
                    d="M71.545.547h-4.639c-.245 0-.52.13-.585.422l-6.455 28.029a.423.423 0 0 0 .088.364.572.572 0 0 0 .437.202h5.798c.311 0 .525-.153.583-.418 0 0 .703-3.168.704-3.178.05-.247-.036-.439-.258-.555-.105-.054-.209-.108-.312-.163l-1.005-.522-1-.522-.387-.201a.186.186 0 0 1-.102-.17.199.199 0 0 1 .198-.194l3.178.014c.95.005 1.901-.062 2.836-.234 6.58-1.215 10.95-6.485 11.076-13.656.107-6.12-3.309-9.221-10.15-9.221l-.005.003Zm-1.579 16.68h-.124c-.278 0-.328-.03-.337-.04-.004-.007 1.833-8.073 1.834-8.084.047-.233.045-.367-.099-.446-.184-.102-2.866-1.516-2.866-1.516a.188.188 0 0 1-.101-.172.197.197 0 0 1 .197-.192h4.241c1.32.04 2.056 1.221 2.021 3.237-.061 3.492-1.721 7.09-4.766 7.214Z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#FFA500] font-semibold mb-2 md:mb-3 text-xs md:text-lg">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {skillsData.tools.map((skill) => (
                <SkillBox key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-hidden " ref={ref}>
        <svg
          width="100vw"
          height="60"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}
        >
          <polyline
            points="0,65 20,35 40,65 60,35 80,65 100,35 120,65 140,35 160,65 180,35 200,65 220,35 240,65 260,35 280,65 300,35 320,65 340,35 360,65 380,35 400,65 420,35 440,65 460,35 480,65 500,35 520,65 540,35 560,65 580,35 600,65 620,35 640,65 660,35 680,65 700,35 720,65 740,35 760,65 780,35 800,65 820,35 840,65 860,35 880,65 900,35 920,65 940,35 960,65 980,35 1000,65"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </div>
  );
};

export default Skills;

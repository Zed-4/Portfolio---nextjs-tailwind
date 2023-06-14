/* eslint-disable @next/next/no-img-element */

// import image from "/public/code.gif";

export default function Home() {
  return (
    <main className="flex min-h-screen absolute right-0 bg-fixed bg-center bg-[url(https://repository-images.githubusercontent.com/588181932/e36ec678-7984-4cdd-8e4c-a3932772ff8e)]">
      {/* <img
        src={image.src}
        className="object-cover h-full"
        alt="Image alt text" /> */}
      <div className="backdrop-blur-xl">
        {/*---------------------------------------------------------------Main---------------------------------------------------------------*/}
        <div className="min-[320px]:w-screen overflow-auto h-screen w-screen flex min-[320px]:flex-col xl:flex-row min-[320px]:justify-normal 2xl:justify-around">
          <div className="min-[320px]:text-2xl lg:text-3xl xl:text-7xl font-bold mx-4 mt-20 h-min">
            <div className="text-center">Abtin O.</div>
            <hr className="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-25 dark:opacity-100" />
            <div className=" text-center font-serif font-normal min-[320px]:text-lg lg:text-xl xl:text-2xl">Computer Engineer</div>
            <div className="mt-2 font-bold min-[320px]:text-lg lg:text-xl xl:text-2xl">Skills</div>
            <div className="flex flex-wrap max-w-md">
              {[
                ['C/C++'],
                ['Arduino'],
                ['Embeded Systems'],
                ['Python'],
                ['JavaScript'],
                ['React.js'],
                ['Next.js'],
                ['Chakra UI'],
                ['Tailwind'],
                ['VHDL'],
                ['BIlingual-Persian'],
              ].map(([heroSkill]) => (
                <div className="mb-1 ml-2 whitespace-nowrap transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{heroSkill}</div>
              ))}
            </div>
          </div>
          <div className="">
            {/*---------------------------------------------------------------About---------------------------------------------------------------*/}
            {/*line-clamp-3 hover:line-clamp-none*/}
            <div className="font-serif max-w-4xl shadow-2xl hover:shadow-inner min-[320px]:mt-10 xl:mt-52 rounded-lg h-min min-[320px]:mx-4 p-4 lg:px-8 pb-1 lg:text-2xl font-bold text-center">
              ABOUT
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p className="text-left transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-normal">
                As a Computer Engineering student graduated in the spring of 2023 from University of North Texas,
                I am a highly motivated and analytical individual with a strong foundation in both hardware and software systems.
                Throughout my studies, I have gained a comprehensive understanding of computer systems and their applications,
                including computer architecture, operating systems, computer networks, and programming languages. In addition to my technical skills,
                I am also a strong problem-solver and have the ability to think critically and creatively to find solutions to complex challenges.
                I am eager to apply my knowledge and skills to real-world problems and am excited to begin my career as a computer engineer.
              </p>
            </div>
            {/*---------------------------------------------------------------TITLE---------------------------------------------------------------*/}
            <div className="font-serif max-w-4xl shadow-2xl hover:shadow-inner min-[320px]:mt-10 rounded-lg h-min min-[320px]:mx-4 p-4 lg:px-8 pb-1 lg:text-2xl font-bold text-center">
              EXPERIENCE
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <h1 className="text-left  transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-semibold">
                GOOD SAMARITAN SOCIETY
                <h1 className="mb-4 ml-2 text-left min-[320px]:text-sm lg:text-md font-normal">
                  Denton, TX
                </h1>
              </h1>
              <h1 className="text-left  transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-semibold">
                TITLE
                <h1 className="text-left ml-2 min-[320px]:text-sm lg:text-lg font-normal">
                  Business Office Receptionist
                </h1>
                <h1 className="mb-4 ml-2 text-left min-[320px]:text-sm lg:text-lg font-normal">
                  <span className="cursor-pointer whitespace-nowrap px-1 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">10-2021</span> TO <span className="cursor-pointer whitespace-nowrap px-1 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">PRESENT</span>
                </h1>
              </h1>
              <h1 className="text-left transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-semibold">
                RESPONSIBILITIES
                {[
                  ['Drafted correspondence and proofed outgoing memos for accuracy'],
                  ['Welcomed on-site visitors and directed to appropriate personnel'],
                  ['Assisted with completion of forms or sign-in procedures'],
                  ['Managed digital and analog filing systems to protect confidential data'],
                  ['Established and maintained good communications with personnel'],
                  ['Coordinated service providers for office equipment maintenance and repair']
                ].map(([tasks]) => (
                  <ul className="ml-8 text-left list-disc transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-normal">
                    <li>{tasks}</li>
                  </ul>
                ))}
              </h1>
            </div>
            {/*---------------------------------------------------------------Projects---------------------------------------------------------------*/}
            <div className="overflow-hidden hover:overflow-auto flex mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              {[
                ['Project I', 'https://github.com/Zed-4/Arduino', '/clock.png', 'Digital Clock', 'Digital Clock', 'use both Millis and interrupts to make a working digital clock using no delays', '5-2022', 'C++', 'Arduino'],
                ['Project II', 'https://github.com/Zed-4/Li-Fi_System', '/lifi.png', 'Li-Fi System', 'Li-Fi System', 'to Investigate and demonstrate a prototype of Li-Fi technology', '4-2023', 'Python', 'Raspberry Pi'],
                ['Project III', 'https://github.com/Zed-4/Portfolio', '/portfolio.png', 'Portfolio', 'Portfolio', 'Portfolio page made using React and Chakra UI', '6-2023', 'React.js', 'Chakra UI'],
                ['Project IV', 'https://github.com/Zed-4/Texas-Census-Data', '/map.png', 'Texas-Census-Data', 'Texas Census Data Map', 'A cencus data map of Texas built using ©mapbox and Next.js', '12-2022', 'Next.js', '©Mapbox'],
              ].map(([projectTitle, projectUrl, projectImg, projectAlt, projectName, projectDesc, projectDates, skills, skillsSecond]) => (
                <div className="">
                  <h2 className="mr-2 shadow-md text-2xl font-bold  ml-2 tracking-tight text-gray-900">{projectTitle}</h2>
                  <div className="shadow-md hover:shadow-inner mx-2 p-1 mt-2 gap-x-6 gap-y-10 min-[320px]:h-48 lg:h-80">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 min-[320px]:w-20 lg:w-48 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-50">
                        <a href={projectUrl} target="_blank">
                          <img src={projectImg} alt={projectAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                        </a>
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="font-bold text-sm text-gray-700">
                            {projectName}
                          </h3>
                          <div className="w-48 mt-1 text-sm text-gray-800">{projectDesc}</div>
                        </div>
                        <p className="whitespace-nowrap ml-1 text-sm font-medium text-gray-900">{projectDates}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="ml-2 w-min h-min whitespace-nowrap transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{skills}</div>
                    <div className="mb-10 ml-2 w-min h-min whitespace-nowrap transition ease-in-out hover:scale-110 cursor-pointer bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{skillsSecond}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------------Footer---------------------------------------------------------------*/}
        <section className="pr-2 rounded-full absolute bottom-0 m-auto min-[320px]:left-5 min-[320px]:right-5min-[320px]:left-5 min-[320px]:right-5 lg:w-2/5 bg-cover bg-center bg-[url(https://gifdb.com/images/high/computer-system-coding-j3szfjv9fwb5at9x.gif)]">
          <div className="rounded-full backdrop-blur-sm flex justify-center">
            {[
              ['Email', 'mailto:abtin.ortgoli@yahoo.com', '/gmail.png', 'Email'],
              ['Linkedin', 'https://www.linkedin.com/in/abtin-ortgoli/', '/linkedin.png', 'Linkedin'],
              ['Github', 'https://github.com/Zed-4', '/github.png', 'Github'],
              ['Gitlab', 'https://gitlab.com/antin.ortholi', '/gitlab.png', 'Gitlab'],
            ].map(([title, url, img, alt]) => (
              <a
                key={title}
                href={url}
                target="_blank"
                className="transition ease-in-out hover:-translate-y-2 hover:scale-110 flex items-center rounded-lg px-2 text-slate-100 font-medium hover:text-slate-100"
              >
                <img className="min-[320px]:max-h-6 sm:max-h-14 lg:max-h-10 xl:max-h-16 w-full" src={img} alt={alt} />
                <h2 className="min-[320px]:text-xs sm:text-xl lg:text-sm xl:text-lg">{title}</h2>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main >
  )
}

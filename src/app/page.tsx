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
        <div className="min-[320px]:w-screen overflow-auto h-screen w-screen flex min-[320px]:flex-col md:flex-row min-[320px]:justify-normal lg:justify-around">
          <div className="min-[320px]:text-2xl lg:text-3xl xl:text-7xl font-bold mx-4 mt-20 h-min">
            Abtin O.
            <hr className="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-900 to-transparent opacity-25 dark:opacity-100" />
            <div className="mt-2 text-center font-normal min-[320px]:text-lg lg:text-xl xl:text-2xl">Computer Engineer</div>
          </div>
          <div className="">
            {/*---------------------------------------------------------------About---------------------------------------------------------------*/}
            {/*line-clamp-3 hover:line-clamp-none*/}
            <div className="max-w-4xl shadow-2xl hover:shadow-inner min-[320px]:mt-10 md:mt-52 rounded-lg h-min min-[320px]:mx-4 p-4 lg:px-8 pb-1 lg:text-2xl font-bold text-center">
              ABOUT
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p className="transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-lg font-normal">
                As a Computer Engineering student graduated in the spring of 2023 from University of North Texas,
                I am a highly motivated and analytical individual with a strong foundation in both hardware and software systems.
                Throughout my studies, I have gained a comprehensive understanding of computer systems and their applications,
                including computer architecture, operating systems, computer networks, and programming languages. In addition to my technical skills,
                I am also a strong problem-solver and have the ability to think critically and creatively to find solutions to complex challenges.
                I am eager to apply my knowledge and skills to real-world problems and am excited to begin my career as a computer engineer.
              </p>
            </div>
            {/*---------------------------------------------------------------TITLE---------------------------------------------------------------*/}
            {/* <div className="max-w-4xl shadow-2xl hover:shadow-inner min-[320px]:mt-10 md:mt-22 rounded-lg min-[320px]:mx-4 p-4 lg:px-8 lg:text-2xl font-bold text-center">
              TITLE
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p className="transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-xl font-normal">
                THIS IS A TEST: Hunt and peck (two-fingered typing), also known as Eagle Finger, is a common form of typing in which
                the typist presses each key individually. Instead of relying on the memorized position of keys, the
                typist must find each key by sight. Use of this method may also prevent the typist from being able to
                see what has been typed without glancing away from the keys. Although good accuracy may be achieved,
                any typing errors that are made may not be noticed immediately due to the user not looking at the screen.
                There is also the disadvantage that because fewer fingers are used, those that are used are forced to move a much greater distance.
              </p>
            </div> */}
            {/*---------------------------------------------------------------Projects---------------------------------------------------------------*/}
            <div className="overflow-hidden hover:overflow-auto flex mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              {[
                ['Project I', 'https://github.com/Zed-4/Arduino', '/clock.png', 'Digital Clock', 'Digital Clock', 'use both Millis and interrupts to make a working digital clock using no delays', '5-2022', 'C++', 'Arduino'],
                ['Project II', 'https://github.com/Zed-4/Li-Fi_System', '/lifi.png', 'Li-Fi System', 'Li-Fi System', 'to Investigate and demonstrate a prototype of Li-Fi technology', '4-2023', 'Python', 'Raspberry Pi'],
                ['Project III', 'https://github.com/Zed-4/Portfolio', '/portfolio.png', 'Portfolio', 'Portfolio', 'Portfolio page made using React and Chakra UI', '6-2023', 'React.js', 'Chakra UI'],
                ['Project IV', 'https://github.com/Zed-4/Texas-Census-Data', '/map.png', 'Texas-Census-Data', 'Texas Census Data Map', 'A cencus data map of Texas built using ©mapbox and Next.js', '12-2022', 'Next.js', '©Mapbox'],
              ].map(([projectTitle, projectUrl, projectImg, projectAlt, projectName, projectDesc, projectDates, skills, skillsSecond]) => (
                <div className="">
                  <h2 className="shadow-md text-2xl font-bold  ml-2 tracking-tight text-gray-900">{projectTitle}</h2>
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
                        <p className="ml-1 text-sm font-medium text-gray-900">{projectDates}</p>
                      </div>
                    </div>
                  </div>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{skills}</span>
                  <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">{skillsSecond}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------------Footer---------------------------------------------------------------*/}
        <section className="rounded-full absolute bottom-0 m-auto min-[320px]:left-5 min-[320px]:right-5 sm:left-1/4 sm:right-1/4 bg-cover bg-center bg-[url(https://gifdb.com/images/high/computer-system-coding-j3szfjv9fwb5at9x.gif)]">
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
                <img className="min-[320px]:max-h-8 sm:max-h-10 lg:max-h-20 w-full" src={img} alt={alt} />
                <h2 className="min-[320px]:text-sm md:text-lg lg:text-2xl">{title}</h2>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main >
  )
}

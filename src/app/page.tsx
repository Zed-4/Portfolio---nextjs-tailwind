// backdrop-filter-none backdrop-blur-sm bg-white/30      sm:mx-32 md:mx-40 lg:mx-44
export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-cover bg-center bg-[url(https://repository-images.githubusercontent.com/588181932/e36ec678-7984-4cdd-8e4c-a3932772ff8e)]">
      <div className="flex flex-row h-screen backdrop-blur-xl">
        {/*---------------------------------------------------------------Main---------------------------------------------------------------*/}
        <div className="min-[320px]:w-screen w-screen flex min-[320px]:flex-col md:flex-row min-[320px]:justify-normal lg:justify-around">
          <div className="min-[320px]:text-2xl lg:text-3xl xl:text-7xl font-bold mx-4 mt-20 h-min">
            Abtin O.
          </div>
          <div className="">
            <div className="shadow-2xl hover:shadow-inner min-[320px]:mt-10 md:mt-52 rounded-lg h-min min-[320px]:mx-4 p-4 lg:px-8 hover:bg-black/20 lg:text-2xl font-bold text-center">
              ABOUT
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p className="max-w-4xl transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-xl font-normal">
                As a Computer Engineering student graduated in the spring of 2023 from University of North Texas,
                I am a highly motivated and analytical individual with a strong foundation in both hardware and software systems.
                Throughout my studies, I have gained a comprehensive understanding of computer systems and their applications,
                including computer architecture, operating systems, computer networks, and programming languages. In addition to my technical skills,
                I am also a strong problem-solver and have the ability to think critically and creatively to find solutions to complex challenges.
                I am eager to apply my knowledge and skills to real-world problems and am excited to begin my career as a computer engineer.
              </p>
              <hr className="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            </div>
            <div className="shadow-2xl hover:shadow-inner min-[320px]:mt-10 md:mt-22 rounded-lg h-min min-[320px]:mx-4 p-4 lg:px-8 hover:bg-black/20 lg:text-2xl font-bold text-center">
              TITLE
              <hr className="mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
              <p className="max-w-4xl transition ease-in-out hover:scale-105 min-[320px]:text-sm lg:text-xl font-normal">
                Poop
              </p>
              <hr className="mt-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------------Footer---------------------------------------------------------------*/}
        <div className="fixed bottom-0 w-screen bg-cover bg-center bg-[url(https://gifdb.com/images/high/computer-system-coding-j3szfjv9fwb5at9x.gif)]">
          <div className="backdrop-blur-sm flex justify-center">
            {[
              ['Email', 'mailto:abtin.ortgoli@yahoo.com', '/gmail.png', 'Email'],
              ['Linkedin', 'https://www.linkedin.com/in/abtin-ortgoli/', '/linkedin.png', 'Linkedin'],
              ['Github', 'https://github.com/Zed-4', '/github.png', 'Github'],
              ['Gitlab', 'https://gitlab.com/antin.ortholi', '/gitlab.png', 'Gitlab'],
            ].map(([title, url, img, alt]) => (
              <a href={url} target="_blank" className="
              transition ease-in-out
              hover:-translate-y-2
              hover:scale-110
              flex
              items-center
              rounded-lg
              px-2
              text-slate-100
              font-medium
              hover:text-slate-100">
                <img className="min-[320px]:max-h-8 sm:max-h-10 lg:max-h-20 w-full" src={img} alt={alt} />
                <h2 className="min-[320px]:text-sm md:text-2xl lg:text-2xl">{title}</h2>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

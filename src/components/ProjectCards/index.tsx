import { myProjects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCards() {
  return (
    <div className="mx-8 my-8 grid grid-cols-4 gap-6">
      {myProjects.map((project) => (
        <div
          key={project.name}
          className="rounded bg-white/5 p-2 shadow-lg shadow-cyan-500/50 transition-colors hover:bg-white/10"
        >
          <Link
            href={project.git}
            className="flex justify-end text-2xl text-cyan-500 hover:text-blue-500"
          >
            <FaGithub />
          </Link>
          <div className="flex justify-center text-5xl text-cyan-500 hover:text-blue-500">
            <Image
              src={project.icon}
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </div>
          <h1 className="mb-2 flex justify-center text-xl font-bold text-zinc-300">
            {project.name}
          </h1>
          <p className="text-base text-zinc-300">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

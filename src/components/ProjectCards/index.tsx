import { myProjects } from '@/lib/projects'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCards() {
  return (
    <div className="mx-8 grid grid-cols-4 gap-4">
      {myProjects.map((project) => (
        <div
          key={project.name}
          className="rounded bg-white/5 p-2 shadow-lg shadow-cyan-500/50 transition-colors hover:bg-white/10"
        >
          <Link
            href={project.git}
            className="flex justify-center text-5xl text-cyan-500 hover:text-blue-500"
          >
            <FaGithub />
          </Link>
          <h1 className="mb-2 flex justify-center text-xl font-bold text-zinc-300">
            {project.name}
          </h1>
          <p className="text-base text-zinc-300">{project.description}</p>
        </div>
      ))}
    </div>
  )
}

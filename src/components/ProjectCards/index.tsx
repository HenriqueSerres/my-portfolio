import { myProjects } from '@/lib/projects'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const projects = (selected: string) => {
  if (selected === 'front-end') {
    return myProjects.filter(
      (project) => project.category.toLowerCase() === 'front-end',
    )
  }
  if (selected === 'back-end') {
    return myProjects.filter(
      (project) => project.category.toLowerCase() === 'back-end',
    )
  }
  if (selected === 'full-stack') {
    return myProjects.filter(
      (project) => project.category.toLowerCase() === 'full-stack',
    )
  }
  return myProjects
}

export default function ProjectCards() {
  const [stack, setStack] = useState('')
  const [filteredProjects, setFilteredProjects] = useState(myProjects)
  const [stacksOptions, setStacksOptions] = useState([
    'all-projects',
    'front-end',
    'back-end',
    'full-stack',
  ])

  useEffect(() => {
    setFilteredProjects(projects(stack))
  }, [stack])

  return (
    <section>
      <div className="flex justify-center gap-3 p-8">
        <h1 className="text-2xl text-zinc-300">
          You can choose the Projects by Stacks:
        </h1>
        <form>
          <select
            value={stack}
            onChange={({ target }) => setStack(target.value)}
          >
            {stacksOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div className="mx-8 my-8 grid grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
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
    </section>
  )
}

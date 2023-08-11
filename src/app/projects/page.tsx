'use client'
import Header from '@/components/Head'
import ProjectCards from '@/components/ProjectCards'

export default function Projects() {
  return (
    <main>
      <Header />
      <h1 className="flex justify-center p-8 text-zinc-300">Projects</h1>
      <div>
        <ProjectCards />
      </div>
    </main>
  )
}

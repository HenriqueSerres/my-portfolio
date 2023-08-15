'use client'
import Header from '@/components/Head'
import ProjectCards from '@/components/ProjectCards'
import StacksInput from '@/components/StacksInput'

export default function Projects() {
  return (
    <main>
      <Header />
      <div className="flex justify-center gap-3 p-8">
        <h1 className="text-2xl text-zinc-300">
          You can choose the Projects by Stacks:
        </h1>
        <StacksInput />
      </div>
      <div>
        <ProjectCards />
      </div>
    </main>
  )
}

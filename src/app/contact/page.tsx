'use client'

import Header from '@/components/Head'
import { useState } from 'react'

const initValues = {
  name: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [contactForm, setContactForm] = useState(initValues)

  const sendEmail = async (e: any) => {
    e.preventDefault()
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactForm),
    })

    if (response.status === 200) {
      setContactForm(initValues)
      alert('Email sent successfully!')
    }
  }
  return (
    <>
      <Header />
      <h1 className="flex justify-center p-4 text-xl text-zinc-300 lg:p-8 lg:text-4xl">
        Contact Me
      </h1>
      <h3 className="flex justify-center p-3 text-zinc-300 lg:text-xl">
        I am available for freelance or full-time positions. Contact me and lets
        talk.
      </h3>
      <div className="flex h-screen w-screen justify-center ">
        <form className="flex h-fit w-5/6 flex-col gap-5 rounded bg-white/5 p-4 shadow-lg shadow-cyan-500/50 transition-colors hover:bg-white/10 lg:w-4/12">
          <input
            placeholder="Your Name"
            name="name"
            type="text"
            value={contactForm.name}
            onChange={({ target }) =>
              setContactForm({ ...contactForm, name: target.value })
            }
            className="rounded border border-blue-400 bg-zinc-600/50 p-2 text-zinc-200"
          />
          <input
            placeholder="Your Email"
            name="email"
            type="text"
            value={contactForm.email}
            onChange={({ target }) =>
              setContactForm({ ...contactForm, email: target.value })
            }
            className="rounded border border-blue-400 bg-zinc-600/50 p-2 text-zinc-200"
          />
          <textarea
            placeholder="Type your message"
            name="message"
            rows={6}
            cols={50}
            value={contactForm.message}
            onChange={({ target }) =>
              setContactForm({ ...contactForm, message: target.value })
            }
            className=" rounded border border-blue-400 bg-zinc-600/50 p-2 text-zinc-200"
          />
          <button
            disabled={
              !contactForm.name && !contactForm.email && !contactForm.message
            }
            onClick={sendEmail}
            className="mt-8 w-full rounded-lg border-4 border-transparent bg-gradient-to-r from-cyan-500 to-blue-500 p-3 text-lg font-bold tracking-wider duration-300 hover:border-white hover:text-white"
          >
            Send
          </button>
        </form>
      </div>
    </>
  )
}

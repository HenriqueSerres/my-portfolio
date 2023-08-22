import { NextResponse } from 'next/server'
import * as React from 'react'
import { Resend } from 'resend'
import { EmailTemplate } from '../../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('BODY', body)
    const { name, email, message } = body

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'henriqueserres@gmail.com',
      subject: `Hello!! ${name} visit your portfolio, Henrique Serres. And contact you.`,
      react: EmailTemplate({ name, email, message }) as React.ReactElement,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}

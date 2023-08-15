import { useState } from 'react'

export default function StacksInput() {
  const [stack, setStack] = useState('')
  const [stacksOptions, setStacksOptions] = useState([
    'front-end',
    'back-end',
    'full-stack',
  ])
  return (
    <>
      <form>
        <select value={stack} onChange={({ target }) => setStack(target.value)}>
          {stacksOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </form>
    </>
  )
}

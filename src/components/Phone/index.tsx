/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react'

type PhoneType = {
  value: string
  onChange: (phoneNumber: string) => void
}

const PhoneInput = ({ value, onChange }: PhoneType) => {
  const [phone, setPhone] = useState(value)

  useEffect(() => {
    setPhone(format(value))
  }, [value])

  const clean = (boilerplate: string) => boilerplate.replace(/\D/g, '') // Remove todos os caracteres não numéricos

  const format = (phoneNumber: string) => {
    const numb = clean(phoneNumber)
    let formatted = ''

    if (numb.length > 2) {
      formatted += `(${numb.slice(0, 2)}) `

      if (numb.length > 6) {
        formatted += `${numb.slice(2, 6)}-`
        formatted += `${numb.slice(6)}`
        if (numb.length > 10) {
          formatted = `(${numb.slice(0, 2)}) `
          formatted += `${numb.slice(2, 3)} `
          formatted += `${numb.slice(3, 7)}-`
          formatted += `${numb.slice(7, 11)}`
        }
      } else {
        formatted += `${numb.slice(2)}`
      }
    } else {
      formatted = numb
    }

    return formatted
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(clean(evt.target.value))
  }

  return (
    <input
      style={{ fontSize: '14px' }}
      type="tel"
      value={phone}
      onChange={handleChange}
      placeholder="(xx) xxxx-xxxx"
      maxLength={16}
    />
  )
}

export default PhoneInput

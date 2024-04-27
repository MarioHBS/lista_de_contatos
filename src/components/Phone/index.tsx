/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useEffect, useState } from 'react'

import styled from 'styled-components'
import { Entry } from '../../styles/global'
import { cleanNumber, formatNumber } from '../../utils/tools'

type PhoneType = {
  value: string
  onChange: (phoneNumber: string) => void
}

const PhoneInput = ({ value, onChange }: PhoneType) => {
  const [phone, setPhone] = useState(value)

  useEffect(() => {
    setPhone(formatNumber(value))
  }, [value])

  const InputPhone = styled(Entry)`
    font-size: 14px;
    text-transform: none;
  `

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(cleanNumber(evt.target.value))
  }

  return (
    <InputPhone
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

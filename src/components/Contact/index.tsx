import { ChangeEvent, useState } from 'react'

import ContactModel from '../../models/Contact'
import { Button, ButtonSave, Entry } from '../../styles/global'
import PhoneInput from '../Phone'
import * as Ctt from './contact.style'
import { formatNumber } from '../../utils/tools'

type ContactProp = {
  children: ContactModel
}

type ChangeType = ChangeEvent<HTMLInputElement>
type ButtonEvtType = React.Dispatch<React.SetStateAction<boolean>>

const ButtonArea = (edit: boolean, set: ButtonEvtType) =>
  edit ? (
    <>
      <ButtonSave type="button" onClick={() => set(!edit)}>
        Salvar
      </ButtonSave>
      <Ctt.ButtonCancel>Cancelar</Ctt.ButtonCancel>
    </>
  ) : (
    <>
      <Button type="button" onClick={() => set(!edit)}>
        Editar
      </Button>
      <Ctt.ButtonCancel>Remover</Ctt.ButtonCancel>
    </>
  )

export const FavComponent = ({ children: aluno }: ContactProp) => {
  const [isEditing, setEdition] = useState(false)
  const [name, setName] = useState(aluno.name)
  const [email, setEmail] = useState(aluno.email)
  const [tel, setTel] = useState(aluno.phone)

  const editEmail = ({ target }: ChangeType) => setEmail(target.value)
  const editName = ({ target }: ChangeType) => setName(target.value)
  const editTel = ({ target }: ChangeType) => setTel(target.value)

  return (
    <Ctt.CardFav edit_status={isEditing.toString()}>
      {!isEditing ? <h3>{name}</h3> : <Entry type='text' value={name} onChange={editName} />}

      <div style={{ margin: '16px 0' }}>
        {!isEditing
          ? <h4>{email}</h4>
          : <Ctt.Entry2 type='email' value={email} onChange={editEmail}/>
        }
        {!isEditing
          ? <h4>{tel}</h4>
          : <Ctt.Entry2 type='tel' value={tel} onChange={editTel} />
        }
      </div>

      <Ctt.ActionArea>
        {ButtonArea(isEditing, setEdition)}
      </Ctt.ActionArea>
    </Ctt.CardFav>
  )
}

export const ContactComponent = ({ children: aluno }: ContactProp) => {
  const [isEditing, setEdition] = useState(false)
  const [name, setName] = useState(aluno.name)
  const [email, setEmail] = useState(aluno.email)
  const [tel, setTel] = useState(aluno.phone)

  const editEmail = ({ target }: ChangeType) => setEmail(target.value)
  const editName = ({ target }: ChangeType) => setName(target.value)
  const editTel = (number : string) => setTel(number)

  return (
    <Ctt.Card edit_status='false'>
      <div>
        {!isEditing ? <h3>{name}</h3> : <Entry type='text' value={name} onChange={editName} />}

        {!isEditing
          ? <h4>{email}</h4>
          : <Ctt.Entry2 type='email' value={email} onChange={editEmail}/>
        }
        {!isEditing
          ? <h4>{formatNumber(tel)}</h4>
          : <PhoneInput value={tel} onChange={editTel} />
        }
      </div>
      <Ctt.ActionAreaHz>
        {ButtonArea(isEditing, setEdition)}
      </Ctt.ActionAreaHz>
    </Ctt.Card>
  )
}

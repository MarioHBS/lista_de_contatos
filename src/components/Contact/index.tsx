import { useState } from 'react'
import * as Ctt from './contact.style'

type ContactObj = {
  nome: string
  email: string
  telefone: string
}

type ContactProp = {
  children: ContactObj
}

const ContactComponent = (props: ContactProp) => {
  const aluno = props.children
  const [isEditing, setEdition] = useState(false)

  return (
    <Ctt.Card edit_status={isEditing.toString()}>
      {!isEditing ? <h3>{aluno.nome}</h3> : <Ctt.Entry type='text' value={aluno.nome} />}

      <div style={{ margin: '16px 0' }}>
        {!isEditing
          ? <h4>{aluno.email}</h4>
          : <Ctt.Entry2 type='email' value={aluno.email} />
        }
        {!isEditing
          ? <h4>{aluno.telefone}</h4>
          : <Ctt.Entry2 type='tel' value={aluno.telefone} />
        }
      </div>

      <Ctt.ActionArea>
        <button type="button" onClick={() => setEdition(!isEditing)}>
          Editar
        </button>
        <button type="button">Cancelar</button>
      </Ctt.ActionArea>
    </Ctt.Card>
  )
}

export default ContactComponent

import ContactComponent from '../../components/Contact'
import { MainContainer } from '../../global_style'
import Inner from './list.style'

const listaContatos = [
  {
    nome: 'Mário Henrique',
    email: 'marioh90@gmail.com',
    telefone: '(98) 985349760',
  },
  {
    nome: 'Adriana Marão',
    email: 'adriana@gmail.com',
    telefone: '(21) 912345678',
  },
  {
    nome: 'Roberto de Sousa',
    email: 'rober.to@email.com',
    telefone: '(99) 73914682',
  },
  {
    nome: 'Xirlene Maria Cavalcante',
    email: 'xirlene_maca@yahoo.com.br',
    telefone: '(11) 988667799',
  },
  {
    nome: 'Fabrabrício da Nóbrega',
    email: 'fab_nobre@outlook.com.br',
    telefone: '(99) 11111111',
  },
]

const ListContacts = () => {
  return (
    <MainContainer>
      <h2>Título com algum retorno</h2>
      <Inner.Grid>
        {listaContatos.map((item) => (
          <ContactComponent key={item.nome}>{item}</ContactComponent>
        ))}
      </Inner.Grid>
    </MainContainer>
  )
}
export default ListContacts

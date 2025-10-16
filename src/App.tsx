import './App.css';
import { useEffect, useState, type FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface User {
  id: string,
  name: string,
  business: string,
  phone: string,
  email: string,
}

const DEMO_USERS: User[] = [
  { id: uuidv4(), name: 'Vitor', business: 'Agência Santos', phone: '+351 963096155 ', email: 'teste@teste.br' },
  { id: uuidv4(), name: 'França', business: 'VSVale Design', phone: '+55 98840-4216  ', email: 'teste@teste.br' },
  { id: uuidv4(), name: 'Semila', business: 'Semila Piercer', phone: '+351 963887147', email: 'teste@teste.br' },
];

const getInitialUsers = (): User[] => {
  const dataStorage = localStorage.getItem('@users');

  if (dataStorage !== null) {
    try {
      return JSON.parse(dataStorage) as User[];
    } catch (e) {
      console.error("Erro ao parsear dados do localStorage. Inicializando a lista de demonstração.", e);
      return DEMO_USERS;
    }
  }
  return DEMO_USERS;
};

function App() {

  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [listUsers, setListUsers] = useState<User[]>(getInitialUsers);

  useEffect(() => {
    localStorage.setItem('@users', JSON.stringify(listUsers));
  }, [listUsers]);

  const updateUser = listUsers.length

  function handleDelete(idToDelete: string) {
    const updateList = listUsers.filter(user => user.id !== idToDelete);
    setListUsers(updateList);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim() && business.trim() && phone.trim() && email.trim()) {
      const newUser = {
        id: uuidv4(),
        name: name,
        business: business,
        phone: phone,
        email: email,
      }
      setListUsers([...listUsers, newUser]);
      setName('');
      setBusiness('');
      setPhone('');
      setEmail('');
    }
  }

return (
<div>
  <h1>Listagem de Clientes</h1>
</div>


  /*
  <div>
    <div>

      <h2>Cadastrar Clientes</h2>
      <form onSubmit={handleSubmit}>

        <label >Nome:</label>
        <input type="text" name='name'  value={name} onChange={(e) => setName(e.target.value)} />

        <label >Empresa:</label>
        <input type="text" name='name' value={business} onChange={(e) => setBusiness(e.target.value)} />

        <label >Email:</label>
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

        <label >Telefone:</label>
        <input type="text" name='age' value={phone} onChange={(e) => setPhone(e.target.value)} />

        <button type='submit' >Cadastrar</button>

      </form>
    </div>


    <div>
      <h2>Todos os Clientes (#{updateUser})</h2>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Empresa</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>

          </tr>
        </thead>
        <tbody>


          {listUsers.map(user => (
            <tr key={user.id} id={user.id}>
              <td>{user.name}</td>
              <td>{user.business}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <img src="/trash.svg" alt='Deletar'  onClick={() => handleDelete(user.id)} />
                <img src="/edit.svg" alt='Editar' />
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  </div>
  */
  )
}

export default App

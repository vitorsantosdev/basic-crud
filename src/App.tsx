import './App.css';
import { useEffect, useState, type FormEvent } from 'react';
import { Menu } from './components/Menu';
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

    <div className='flex gap-6 justify-center h-screen bg-gray-50'>
      <Menu />


      <div className='w-[30%] p-20'>
        <h2 className='text-1xl mb-8 uppercase'>Cadastrar Clientes</h2>

        <form className='text-stat flex flex-col justify-start' onSubmit={handleSubmit}>

          <label className='text-gray-400 text-xs font-bold'>Nome:</label>
          <input type="text" name='name' className='text-black p-3 border border-gray-300 rounded-md mb-2' value={name} onChange={(e) => setName(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Empresa:</label>
          <input type="text" name='name' className='text-black p-3 border border-gray-300 rounded-md mb-2' value={business} onChange={(e) => setBusiness(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Email:</label>
          <input type="text" name='email' className='text-black p-3 border border-gray-300 rounded-md mb-2' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Telefone:</label>
          <input type="text" name='age' className='text-black p-3 border border-gray-300 rounded-md mb-2' value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button type='submit' className='bg-black hover:bg-gray-500 font-extrabold text-white p-3 rounded-full'>Cadastrar</button>

        </form>
      </div>


      <div className='text-start w-[70%] p-20 bg-white'>
        <h2 className='text-1xl uppercase mb-8'>Todos os Clientes (#{updateUser})</h2>

        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='pb-3 text-start text-xs text-gray-400'>Id</th>
              <th className='pb-3 text-start text-xs text-gray-400'>Nome</th>
              <th className='pb-3 text-start text-xs text-gray-400'>Empresa</th>
              <th className='pb-3 text-start text-xs text-gray-400'>Telefone</th>
              <th className='pb-3 text-start text-xs text-gray-400'>Email</th>
              <th className='pb-3 text-start text-xs text-gray-400'>Ações</th>

            </tr>
          </thead>
          <tbody>


            {listUsers.map(user => (
              <tr key={user.id} id={user.id}>
                <td className=' border-gray-300 pr-5 text-gray-500 py-4'>{user.id}</td>
                <td className=' border-gray-300 pr-5 text-gray-500 py-4'>{user.name}</td>
                <td className=' px-4 border-gray-300 text-gray-500 py-4'>{user.business}</td>
                <td className=' px-4 border-gray-300 text-gray-500 py-4'>{user.phone}</td>
                <td className=' px-4 border-gray-300 text-gray-500 py-4'>{user.email}</td>
                <td className=' px-4 border-gray-300 text-gray-500 py-4 flex'>
                  <img src="/trash.svg" alt='Deletar' className="w-6 h-6 opacity-30 hover:opacity-100" onClick={() => handleDelete(user.id)} />
                  <img src="/edit.svg" alt='Editar' className="w-6 h-6 opacity-30 hover:opacity-100" />
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App

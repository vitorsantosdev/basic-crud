import './App.css'
import { useState, type FormEvent } from 'react'

interface User {
  name: string,
  business: string,
  phone: string,
  email: string,
}

function App() {
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const [listUsers, setListUsers] = useState<User[]>([
    {
      name: 'Vitor',
      business: 'Agência Santos',
      phone: '+351 963096155 ',
      email: 'teste@teste.br'
    },
    {
      name: 'França',
      business: 'VSVale Design',
      phone: '+55 98840-4216  ',
      email: 'teste@teste.br'
    },
    {
      name: 'Semila',
      business: 'Semila Piercer',
      phone: '+351 963887147',
      email: 'teste@teste.br'
    }
  ]);

  const updateUser = listUsers.length

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (name.trim() && business.trim() && phone.trim() && email.trim()) {
      setListUsers([...listUsers, { name, business, phone, email }]);
      setName('');
      setBusiness('');
      setPhone('');
      setEmail('');
    }
  }

  return (

    <div className='flex gap-6 justify-center h-screen bg-gray-50'>

      <div className='w-[30%] p-20'>
        <h2 className='text-2xl mb-8'>Cadastrar Clientes</h2>

        <form className='text-stat flex flex-col justify-start' onSubmit={handleSubmit}>

          <label className='text-gray-400 text-xs font-bold'>Nome:</label>
          <input type="text" name='name' className='text-black bg-white p-3 mb-2' value={name} onChange={(e) => setName(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Empresa:</label>
          <input type="text" name='name' className='text-black bg-white p-3 mb-2' value={business} onChange={(e) => setBusiness(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Email:</label>
          <input type="text" name='email' className='text-black bg-white p-3 mb-2' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className='text-gray-400 text-xs font-bold'>Telefone:</label>
          <input type="text" name='age' className='text-black bg-white p-3 mb-4' value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button type='submit' className='bg-black hover:bg-gray-500 font-extrabold text-white p-3 rounded-full'>Cadastrar</button>

        </form>
      </div>


      <div className='text-start w-[70%] p-20 bg-white'>
        <h2 className='text-2xl mb-8'>Todos os Clientes (#{updateUser})</h2>

        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='pb-3 text-start'>Nome</th>
              <th className='pb-3 text-start'>Empresa</th>
              <th className='pb-3 text-start'>Telefone</th>
              <th className='pb-3 text-start'>Email</th>
              <th className='pb-3 text-start'>Açoõs</th>
              
            </tr>
          </thead>
          <tbody>
            

        {listUsers.map((user, index) => (
            <tr key={index}>
              <td className=' border-gray-300 pr-5 py-4'>{user.name}</td>
              <td className=' px-4 border-gray-300 py-4'>{user.business}</td>
              <td className=' px-4 border-gray-300 py-4'>{user.phone}</td>
              <td className=' px-4 border-gray-300 py-4'>{user.email}</td>
              <td className=' px-4 border-gray-300 py-4'>EDITAR / DELETAR</td>
            </tr>
        ))}

          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App

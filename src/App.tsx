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

    <div className='flex gap-6 h-full'>
      
      <div className='bg-gray-200 min-w-md p-12 border-1 border-gray-100 rounded-md mb-4'>
        <h1 className='font-bold text-black'>CRUD</h1>
        <form className='text-start flex flex-col justify-start' onSubmit={handleSubmit}>

          <label className='text-black font-bold'>Nome:</label>
          <input type="text" name='name' className='text-black bg-white p-3 mb-2' value={name} onChange={(e) => setName(e.target.value)} />

          <label className='text-black font-bold'>Empresa:</label>
          <input type="text" name='name' className='text-black bg-white p-3 mb-2' value={business} onChange={(e) => setBusiness(e.target.value)} />

          <label className='text-black font-bold'>Email:</label>
          <input type="text" name='email' className='text-black bg-white p-3 mb-2' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className='text-black font-bold'>Telefone:</label>
          <input type="text" name='age' className='text-black bg-white p-3 mb-4' value={phone} onChange={(e) => setPhone(e.target.value)} />

          <button type='submit' className='bg-blue-500 hover:bg-fuchsia-500 font-extrabold'>Cadastrar</button>

        </form>
      </div>

      
      <div className='text-start'>
        <h2 className=''>Clientes</h2>

        {listUsers.map((user, index) => (
          <div key={index}>
            <div className='w-full pb-4 pt-4 border-b-1 border-gray-100 text-start'>
              <p><b>Nome:</b> {user.name} | {user.business} | <b>Telefone:</b> {user.phone}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App

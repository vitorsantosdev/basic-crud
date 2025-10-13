import { use } from 'react'
import './App.css'
//import Trash from '@../assets/trash.svg'

function App() {

  const users = [
    {
      id: '15548415',
      name: 'Vitor',
      busisnes: 'Agência Santos',
      phone: '+351 963096155 '
    },
    {
      id: '1554841587',
      name: 'França',
      busisnes: 'VSVale Design',
      phone: '+55 98840-4216  '
    },
    {
      id: '15548416',
      name: 'Semila',
      busisnes: 'Semila Piercer',
      phone: '+351 963887147'
    }
  ]

  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-gray-200 min-w-md p-12 border-1 border-gray-100 rounded-md mb-4'>
        <h1 className='font-bold'>CRUD</h1>
        <form className='text-start flex flex-col justify-start'>

          <label className=''>Nome:</label>
          <input type="text" name='name' className='bg-white p-3 mb-2' />

          <label htmlFor="">Empresa:</label>
          <input type="text" name='email' className='bg-white p-3 mb-2' />

          <label htmlFor="">Telefone:</label>
          <input type="text" name='age' className='bg-white p-3 mb-4' />

          <button type='button' className='bg-blue-500 hover:bg-fuchsia-500 font-extrabold'>Cadastrar</button>

        </form>
      </div>

      <b className='text-start'>Clientes</b>
      {users.map(user => (
        <div key={user.id}>
          <div className='min-w-md pb-2 border-1 p-3 border-gray-200 text-start'>
            <p><b>Nome:</b> {user.name} | {user.busisnes} <b>Telefone:</b> {user.phone}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default App

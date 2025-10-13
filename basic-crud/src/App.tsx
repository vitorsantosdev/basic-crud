import './App.css'
//import Trash from '@../assets/trash.svg'

function App() {

  return (
    <div className='flex flex-col gap-6'>
      <div className='bg-gray-200 min-w-md p-12 border-1 border-gray-300 rounded-md'>
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

      <div className=''>
        <div className='min-w-md p-4 border-b-1 border-gray-300 text-start mb-2'>
          <p><b>Nome:</b> Vitor Santos | Agência Santos <b>Telefone:</b> +351 963 0966 155</p>
        </div>

        <div className='min-w-md p-4 border-b-1 border-gray-300 text-start mb-2'>
          <p><b>Nome:</b> Semila Nozaki | Semila Piercer <b>Telefone:</b> +351 963 0966 155</p>
        </div>
      </div>
    </div>

  )
}

export default App

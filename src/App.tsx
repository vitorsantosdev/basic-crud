import './App.css';
import { useEffect, useState, type FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './components/ui/card';
import { Dot, Edit, Package, Trash2 } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './components/ui/table';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from './components/ui/button';
import { Input } from "@/components/ui/input"
import { Toaster, toast } from 'sonner'

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
    <div className='w-full p-4 flex justify-center align-center'>
      <div className='w-full max-w-[1280px] flex flex-col gap-4'>
        <Toaster richColors position='top-center' />

              
      <div className='w-full flex justify-be gap-10'>

        <div className='w-full flex items-center'>
          <h1 className='text-2xl font-bold flex items-center'>
          <Package className='bg-primary rounded-full text-primary-foreground w-7 h-7 mr-3 p-1'></Package>
          Dashboard
        </h1>  
        </div>

      <div className='w-full flex justify-end gap-6'>
        <div>
          <span 
          className='text-gray-400 flex items-center text-sm'>
            <Dot className='text-green-500'></Dot>CLIENTES</span>
            <h2 className='text-2xl font-semibold ml-3'>#00{updateUser}</h2>
        </div>

        <div>
          <span
            className='text-gray-400 flex items-center text-sm'>
              <Dot className='text-amber-400'></Dot>SERVIÇOS
          </span>
          <h2 className='text-2xl font-semibold ml-2'>987</h2>
        </div>

        <div>
          <span
            className='text-gray-400 flex items-center text-sm'>
              <Dot className='text-red-500'></Dot>FATURAMENTO
          </span>
          <h2 className='text-2xl font-semibold ml-2'>R$ 18.197,40</h2>
        </div>
      </div>

      </div>

      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between items-center gap-2 text-md uppercase'>
            Todos os Clientes
          <Dialog>
            <DialogTrigger><Button>Novo Cliente</Button></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Cadastrar Cliente</DialogTitle>
                <DialogDescription>
                  Preencha todos os campos do cliete
                </DialogDescription>
              </DialogHeader>
              
              <div>  
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                  <Input className='py-6' type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
                  <Input className='py-6' type="text" placeholder="Empresa" value={business} onChange={(e) => setBusiness(e.target.value)}/>
                  <Input className='py-6' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <Input className='py-6' type="phone" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                  <DialogClose>
                    <Button
                      className='py-6 ml-auto w-full' type="submit"
                      onClick={() => toast.success(name+" Cadastrado com Sucesso")}
                    >
                      Cadastrar
                    </Button>
                  </DialogClose>
                    
                </form>
              </div>
            </DialogContent>
          </Dialog>
          </CardTitle>     
      </CardHeader>    
        <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-semibold text-gray-400">Nome</TableHead>
              <TableHead className='font-semibold text-gray-400'>Empresa</TableHead>
              <TableHead className='hidden sm:flex items-center font-semibold text-gray-400'>E-mail</TableHead>
              <TableHead className='font-semibold text-gray-400'>Telefone</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {listUsers.map(user => (
              <TableRow key={user.id} id={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.business}</TableCell>
                <TableCell className='hidden sm:flex items-center'>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell className='text-right flex justify-end gap-2'>
                  <Edit
                    className=' text-gray-300 hover:text-gray-400 transition-colors'>
                  </Edit>
                  <Trash2
                   className=' text-gray-300 hover:text-gray-400 transition-colors'
                   onClick={() => {
                    handleDelete(user.id)
                    toast.error(user.name+" removido com Sucesso!")
                   }}></Trash2></TableCell>      
              </TableRow>
            ))}         
          </TableBody>
        </Table>        

        </CardContent>
      </Card>

      </div>        
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

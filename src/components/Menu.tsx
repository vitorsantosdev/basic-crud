
export function Menu() {
    return (
        <div className='bg-gray-900 text-white flex flex-col justify-between w-28 p-4'>
            <div className="self-center flex">
                <img src="/menu.svg" alt='Logo' className="w-7 h-7" />
            </div>
            <div className="gap-8 flex flex-col self-center">
                <img src="/bolt.svg" alt='Dashboard' className="w-7 h-7" />
                <img src="/plus.svg" alt='Adicionar Cliente' className="w-7 h-7" />
                <img src="/graphic.svg" alt='Relatórios' className="w-7 h-7" />
                <img src="/cash.svg" alt='Financeiro' className="w-7 h-7" />
            </div>
            <div className="self-center flex">
                <img src="/user.svg" alt='Usuário' className="w-7 h-7" />
            </div>
        </div>
    )
} 

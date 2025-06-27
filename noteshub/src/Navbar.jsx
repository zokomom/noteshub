import logo1 from './assets/logo1.png'

function navbar(){
    return (
        <>
        <header className="bg-white text-black flex justify-around items-center p-2 w-full shadow-xl " >
            <div className="flex items-center">
                <div><img src={logo1} alt="Noteshub Logo" className='h-16' /></div>
            </div>
            <div className="mx-8"> 
                <input type="text" placeholder="🔍Search for notes..." className="w-lg p-2 border border-gray-300 rounded-full" />
            </div>
            <nav className="flex space-x-4">
                <div className="bg-green-500 p-2 rounded-md text-white font-bold cursor-pointer">Student Panel</div> 
                <div className="bg-purple-500 p-2 rounded-md text-white font-bold cursor-pointer">Admin</div> 
            </nav>
        </header>
        </>         
    )
}
export default navbar
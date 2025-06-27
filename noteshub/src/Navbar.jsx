import logo1 from './assets/logo1.png'

function navbar(){
    return (
        <>
        <header className="bg-white text-black flex justify-around items-center p-2 w-full shadow-xl " >
            <div className="flex items-center">
                <div><img src={logo1} alt="Noteshub Logo" className='h-16' /></div>
            </div>
            <div className="mx-8"> 
                <input type="text" placeholder="🔍Search for notes..." className="w-lg p-2 border border-gray-400 rounded-full" />
            </div>
            <nav className="flex space-x-4">
                <div className=" p-2 rounded-md font-bold cursor-pointer">About</div> 
                <div className=" p-2 rounded-md font-bold cursor-pointer">Contact</div>
                <div className=" py-2 rounded-full font-bold cursor-pointer border px-5 border-blue-700">Login</div>
                <div className=" py-2 rounded-full font-bold cursor-pointer border px-5 border-blue-700">Sign Up</div>
            </nav>
        </header>
        </>
    )
}
export default navbar
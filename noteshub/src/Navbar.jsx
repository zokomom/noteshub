import logo2 from './assets/logo2.png'
import { Link,NavLink } from 'react-router-dom'
function navbar(){
    return (
        <>
        <header className="bg-white text-black flex justify-around items-center p-2 w-full shadow-xl " >
            <nav className="flex items-center">
                <Link to="/"><img src={logo2} alt="Noteshub Logo" className='h-16'/></Link>
            </nav>
            <div className="mx-8"> 
                <input type="text" placeholder="🔍Search for notes..." className="w-lg p-2 border border-gray-400 rounded-full" />
            </div>
            <nav>
                <ul className="flex space-x-4">
                <li><NavLink to="/" className={(e)=>{return e.isActive ? " text-blue-700 p-2 font-bold cursor-pointer underline" : "p-2 rounded-md font-bold cursor-pointer"}}>Home</NavLink></li>
                <li><NavLink to='/About' className={(e)=>{return e.isActive ? " text-blue-700 p-2 font-bold cursor-pointer underline" : "p-2 rounded-md font-bold cursor-pointer"}}>About</NavLink></li>
                <li><NavLink className=" py-2 rounded-full font-bold cursor-pointer border px-5 border-blue-700">Login</NavLink></li>
                <li><NavLink className=" py-2 rounded-full font-bold cursor-pointer border px-5 border-blue-700">Sign Up</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default navbar
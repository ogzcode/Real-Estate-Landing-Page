import './App.css';
import logo from "./img/home.png";
import search from "./img/search.png";
import DropDown from "./components/DropDown";

function Main() {
  return (
    <div className="h-full flex justify-center items-center flex-col bg-[url('./img/house_bg.jpg')] bg-cover bg-no-repeat bg-top">
      <h1 className='text-5xl font-bold text-white drop-shadow-lg mb-6 mt-10 max-[1024px]:text-4xl'>Quickly Sell or Rent Your Home</h1>
      <div className='flex px-6 py-3 bg-white lg:px-8 lg:py-4 shadow-lg rounded-lg'>
        <input type='text' placeholder='Enter an address, city or ZIP code' className='min-w-[360px] lg:text-lg'/>
        <img src={search} className='w-[24px] lg:w-[28px]' />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative h-[100vh]">
      <nav className='fixed bg-white flex w-full justify-between items-center p-6 shadow'>
        <div className='flex items-center cursor-pointer'>
          <img src={logo} className='w-[36px] mr-2' />
          <h1 className='text-3xl text-slate-600 font-black'><span className='text-red-500'>RS</span> Home</h1>
        </div>
        <DropDown/>
        <div className='hidden lg:block'>
          <button className='mx-4 px-6 py-1 font-medium border-2 border-red-500 rounded bg-red-500 text-white hover:bg-red-700 hover:border-red-700'>Login</button>
          <button className='mx-4 px-6 py-1 font-medium border-2 border-red-500 rounded text-red-500 hover:bg-red-500 hover:text-white'>Sign up</button>
        </div>
      </nav>
      <Main/>
    </div>
  )
}

export default App

function hero() {
  return (
    <div className="hero flex flex-col  items-center justify-center gap-12 h-80">
      <h1 className="font-bold underline decoration-blue-700 decoration-8 text-shadow-lg text-8xl text-center w-full">life made easy.</h1>
    <p className="text-3xl font-normal text-gray-500 text-center">Your one-stop solution for all your note-taking needs.</p>
    <div>
      <button className="bg-blue-700 text-white px-6 cursor-pointer py-2 text-xl rounded-full font-semibold hover:bg-blue-800 transition duration-300">Get Started. It's FREE</button>
    </div>
    </div>
  );
}

export default hero;
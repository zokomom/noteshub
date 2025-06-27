function filter(){
    return (
        <div className="bg-gray-100 flex flex-row justify-center items-center gap-5">
            <div className="flex flex-col justify-center items-center border-1 border-gray-400 rounded-lg py-3  shadow-black m-4 w-2xl gap-5">
            <h2 className="text-2xl text-center  font-normal w-2xl">Find Academic Notes</h2>
            <div className="flex flex-col justify-center items-center gap-5">
                <select className=""><option value="cc"></option></select>
            </div>
            
            </div>
        </div>
        
    );
}

export default filter;
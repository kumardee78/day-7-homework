function Header() {
    return (
      <>
        <nav className=" z-10 flex justify-between items-center bg-[#111827] text-white py-4 px-12 sticky top-0">
          <div className="flex">
            <a href=""><img src=".\download.svg" className="pr-4"></img></a>
            <a href=""><h2 className="text-2xl font-bold">GeekFoods</h2></a>
          </div>
          <div>
            <ul className="flex gap-6">
              <a href="" className="text-blue-400 text-lg"><li >Home</li></a>
              <a href="" className="hover:text-blue-400 text-base"><li>Quote</li></a>
              <a href="" className="hover:text-blue-400 text-base"><li>Resturants</li></a>
              <a href="" className="hover:text-blue-400 text-base"><li>Foods</li></a>
              <a href="" className="hover:text-blue-400 text-base"><li>Contact</li></a>
            </ul>
          </div>
          <button className="px-4 text-sm py-2 rounded-lg bg-blue-700 hover:bg-blue-800">Get stated</button>
        </nav>
      </>
    )
}
export default Header;
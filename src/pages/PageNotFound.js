import { Link } from "react-router-dom";


import NoPage from "../assets/PageNoooo.png" ;


const PageNotFound = () => {
 

  return (
    <main>
      <section className="flex flex-col justify-center px-2 ">
        <div className="flex flex-col items-center">
          <p className="text-7xl my-10 text-gray-700 dark:text-white ">404, Oops!</p>
          <div className="max-w-xs bg-slate-500">
            <img src={NoPage} alt="404,Oops" />
          </div>   
        </div>
        <div className="flex justify-center my-4">
          <Link to={"/"}>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
          </Link>
      </div>
      </section>
    </main>
  )
}

export default PageNotFound

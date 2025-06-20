import { useRouteError } from "react-router-dom"

const ErrorPage = ()=>{
    const routeError = useRouteError();
    console.log(routeError.error)
    return (
        <div className="border h-screen flex flex-col gap-5 justify-center">
            <h1 className="text-4xl text-red-700 text-center ">OOps Page Not Found ! 🙄 </h1>
            <h1 className="text-4xl text-red-700 text-center ">{routeError.data} </h1>
        </div>
    )
}

export default ErrorPage
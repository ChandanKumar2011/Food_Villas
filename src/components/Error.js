import { useRouteError } from "react-router-dom";

const Error =() => {
const err = useRouteError();


const {data , status , statusText} = err;

    return(
        <>
        <h1>Sorry</h1>
        <h2>Something went wrong</h2>
        <h2>{data}</h2>
        <h2>{`${err.status}:${err.statusText}`}</h2>
        </>
    );
};

export default Error;
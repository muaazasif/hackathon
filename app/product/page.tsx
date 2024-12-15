import Link from "next/link"

const product = () =>{
    return(
        <div>
            <h1>I am Product Page</h1>
            <Link href="/about">About</Link>
        </div>
    )
}

export default product
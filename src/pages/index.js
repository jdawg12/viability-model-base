import Link from 'next/link'
import Form from '../components/Form'


export default function Index(){
    return (
    <div>
        <h1>Index Page</h1>
        <Link href="/details"><a>VEMO</a></Link>
        <Form />

    </div>

)}
import Link from 'next/link';
import Header from '../components/something'
import Layout from '../components/masterpages';

export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
            <Link href='/'>Home</Link>     
        </Layout>
    );
}
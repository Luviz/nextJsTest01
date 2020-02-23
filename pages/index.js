import Link from 'next/link';
import Header from '../components/something';
import Layout from '../components/masterpages';
import css from "../styles.scss"

export default function Index() {
    return (
        <Layout>
            <p className={css.meh}>Meh Next.js</p>
            <Link href='/about'>about</Link>
            <Link href="/about" title="About Page">
                    sad
            </Link>
        </Layout>
    );
}


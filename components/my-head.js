import Head from 'next/head';

export default function MyHead({ title, children }) {
    return (
        <Head>
            <title>{title} - Juliano Maia</title>
            {children}
        </Head>
    )
}

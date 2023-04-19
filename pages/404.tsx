import { useRouter } from 'next/router'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Custom404() {
    const router = useRouter()

    useEffect(() => {
        console.error("404");
        const { pathname } = router;
        const isDynamicRoute = /\/projects\/\d+/.test(pathname);

        if (isDynamicRoute) {
            // Handle the dynamic route
            // For example, redirect the user to the correct page
            router.push('/project/[projectId]', '/project/1');
        }
    }, []);

    return (
        <div className={styles.errorParent}>
            <h1 className={styles.errorH1}>404</h1>
            <div className={styles.errorDiv}>The page you&apos;re looking for could not be found.</div>
        </div>
    )
}
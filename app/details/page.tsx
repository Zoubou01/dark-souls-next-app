import { Suspense } from 'react'
import ShowDetails from '../components/details/showDetails'
import styles from './details.module.css'

const Details = () => {
    return (
        <div className={styles.details}>
        <div className='container xl items-center'>
        <Suspense fallback={<>Loading...</>}>
        <ShowDetails/>
        </Suspense>
        </div>
        <div className={styles.typewriter}><h1>Back to our <a style={{color:'#a78a6d'}} href='/dashboard'>Quest</a>?</h1></div>
        </div>
    )
}

export default Details
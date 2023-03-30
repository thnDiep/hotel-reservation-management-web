import styles from './Home.module.scss'
import Search from '~/components/Search'

function Home() {
    return (
        <div className={styles.container}>
            <h1>Home page</h1>
            
            <Search />
        </div>
    )
}

export default Home

import { useState } from "react"
import styles from './SearchCoin.module.css'

const SearchCoin = ({ getQuote: getPrice }) => {
    const [coin, setCoin] = useState('')

    return (
        <div className={styles.container}>
            <input className={styles.input} type="text" value={coin} onChange={(e) => setCoin(e.target.value)} />
            <button className={styles.search} onClick={() => getPrice(coin)}>Search</button>
        </div>
    )
}

export default SearchCoin



/* 

This is a functional component in React called "SearchCoin" that uses the useState hook to manage the state of an input field for a coin symbol. It takes a prop called getQuote (renamed to getPrice) which is a function that will be called when the user clicks the "Search" button. The component renders an input field with its value set to the current state of the "coin" variable, and an onChange function that updates the state of "coin" when the input value changes. It also renders a button with an onClick function that calls the "getPrice" function with the current value of the "coin" variable as an argument. The component is using CSS modules with styles imported from './SearchCoin.module.css'

*/
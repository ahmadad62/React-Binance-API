import axios from "axios";
import { useState } from "react";
import PriceDetail from "./components/PriceDetail";
import SearchCoin from "./components/SearchCoin";

import styles from "./App.module.css";

function App() {
  const [data, setData] = useState(null);

  const getTicker = (coin) => {
    axios
      .get("https://api.binance.com/api/v3/ticker/24hr", {
        params: {
          symbol: coin,
        },
      })
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Fetch Crypto Prices</h1>
        <SearchCoin getQuote={getTicker} />
        {data && <PriceDetail data={data} />}
      </div>
      <footer className={styles.footer}>
        Powered by{" "}
        <a
          href="https://www.binance.com/en-IN/binance-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Binance API
        </a>
      </footer>
    </div>
  );
}

export default App;
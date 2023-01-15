import PercentChangePill from "./PercentChangePill";
import styles from "./PriceDetail.module.css";
import PriceVariation from "./PriceVariation";

const PriceDetail = ({
    data: {
        symbol,
        priceChangePercent,
        openPrice,
        volume,
        lastPrice,
        priceChange,
        highPrice,
        lowPrice,
    },
}) => {
    return (
        <div className={styles.container}>
            <div className={styles.symbol}>
                <h1>{symbol}</h1>
                <span className={styles.price}>
                    <h3>${Number(openPrice).toFixed(2)}</h3>
                    <PercentChangePill percent={priceChangePercent} />
                </span>
            </div>
            <div>
                <PriceVariation low={lowPrice} high={highPrice} price={openPrice} />
            </div>
            <div className={styles.data}>
                <div className={styles.statistic}>
                    <span>Volume</span>
                    <span>{(+volume).toFixed(2)}</span>
                </div>
                <div className={styles.statistic}>
                    <span>Price Change</span>
                    <span>${(+priceChange).toFixed(2)}</span>
                </div>
                <div className={styles.statistic}>
                    <span>Last Price</span>
                    <span>${Number(lastPrice).toFixed(2)}</span>
                </div>
                <div className={styles.statistic}>
                    <span>High Price</span>
                    <span>${Number(highPrice).toFixed(2)}</span>
                </div>
                <div className={styles.statistic}>
                    <span>Low Price</span>
                    <span>${Number(lowPrice).toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default PriceDetail;
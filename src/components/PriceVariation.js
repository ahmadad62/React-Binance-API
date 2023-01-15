import styles from "./PriceVariation.module.css";

const PriceVariation = ({ low, high, price }) => {
    return (
        <div className={styles.container}>
            <div className={styles.bar}>
                <div
                    className={styles.fill}
                    style={{ width: `${((price - low) / (high - low)) * 100}%` }}
                ></div>
            </div>
            <div className={styles.label}>
                <span>Low</span>
                <span>High</span>
            </div>
        </div>
    );
};

export default PriceVariation;
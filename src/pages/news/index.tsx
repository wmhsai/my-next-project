import styles from "../../styles/News.module.scss"
//styled-jsx
const News = () => {
    return (
        <div>
            <p className={styles.text}>
                News
            </p>
            <style jsx>{`
                {/* p {
                    color:red;
                    background-color:silver;
                    width:10rem;
                    height:10rem;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    } */}
            `}
            </style>
        </div>
    )
}

export default News
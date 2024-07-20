import styles from "../../styles/News.module.scss";
//styled-jsx
const News = ({ posts }: { posts: any }) => {
    console.log(posts, "posts");

    return (
        <div>
            <p className={styles.text}>
                Newsdgf
            </p>
            {posts.map((item: any) => {
                <h3 key={item.id} style={{color:"red"}}>
                    {item.title}
                </h3>
            })}
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
 
export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/posts");
    const data = await res.json();
    return {
        props: { posts: data }
    }
}
import Layout from "../components/Layout"
import Link from "next/link";

const PostLink = ({title})=>(
    <li>
        <Link href={`/post?title=${title}`}>
            <a>{title} post</a>
        </Link>
    </li>
)
const Blog = () => {
    return (
        <Layout title="myblog">
            <ul>
                <PostLink title='React'/>
                <PostLink title='Blog'/>
                <PostLink title='Wiki'/>
            </ul>
        </Layout>
    )
}

export default Blog
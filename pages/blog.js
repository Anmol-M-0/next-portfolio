import Layout from "../components/Layout"
import Link from "next/link";

const PostLink = ({title, slug})=>(
    <li>
        <Link as={`/${slug}`} href={`/post?title=${title}`}>
            <a>{title} post</a>
        </Link>
    </li>
)
const Blog = () => {
    return (
        <Layout title="myblog">
            <ul>
                <PostLink slug='React-post' title='React'/>
                <PostLink slug='Blog-post' title='Blog'/>
                <PostLink slug='Wiki-post' title='Wiki'/>
            </ul>
        </Layout>
    )
}

export default Blog
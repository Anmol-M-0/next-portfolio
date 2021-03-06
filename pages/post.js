import Layout from "../components/Layout"
import { withRouter } from "next/router";

const Post = ({router}) => {
    // console.log(url.pathname, url.asPath)
    return (
        <Layout title={router.query.title}>

            <p>
                A blog (a truncation of "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited.
            </p>
        </Layout>
    )
}


export default withRouter(Post)

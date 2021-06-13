import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import nprogress from 'nprogress'
import Header from './Header'




Router.onRouteChangeStart = (url) => {
    console.log(url)
    nprogress.start()
}
Router.onRouteChangeComplete = () => nprogress.done()

Router.onRouteChangeError = () => nprogress.done()

const Layout = ({ children, title }) => (
    <div className='root'>
        <Head>
            <title>Next Portfolio</title>
           
        </Head>
        <Header>
            
                <Link href='/' >
                    <a>Home</a>
                </Link>
                
                {/* <Link href="/about">
                    <a>about</a>
                </Link>
                
                <Link href="/hireme">
                    <a>hire me</a>
                </Link>

                <Link href="/blog">
                    <a>Blog</a>
                </Link> */}
            
        </Header>
        <h1>{title}</h1>
        {children}
        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
           .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          header {
              display: flex;
              justify-content: space-around;
              width: 100%;
              padding: 12px;
              font-size: 1.2rem;
              margin: 0;
              background: indigo;
          }
          header a {
            color: darkgrey;
            text-decoration: none;
          }
          header a:hover {
            font-weight: bold;
            color: lightgrey;
          }
          footer {
            padding: 1em;
          }

        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                font-size: 110%;
                background: #f0f0f0;
            }

        `}</style>
    </div>
)
export default Layout

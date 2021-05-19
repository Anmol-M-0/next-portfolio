// import Link from 'next/link';
import Layout from '../components/Layout'
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Error from './_error'
// const About_f = () => (
//     <Layout title="About">
//         <div>

//             <p>A javascript programmer</p>

//             <img src="/static/JavaScript-Logo.jpg" height="200" width="300" alt="js" />

//         </div>
//     </Layout>
// )
class About extends Component {//stateful
    state = {
        user:null
    }
    static async getInitialProps(){
        const res = await fetch('https://api.github.com/users/anmol-M-0')
        const statusCode = res.status 
        const data = await res.json()
        // console.log(data)


        // fetch('https://api.github.com/users/anmol-M-0')
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //     })
            return {user: data, statusCode}
    }
    // componentDidMount(){
    //     fetch('https://api.github.com/users/anmol-M-0')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState(
    //             {
    //                 user:data
    //             }
    //         )
    //     })
    // }
    render() {
        const { user, statusCode } = this.props;

        if(statusCode > 200){
            // console.log(user, statusCode)
            return <Error statusCode={statusCode}/>
        }
        
        <p>{user.name}</p>

        return (
            <Layout title="About">
                <div>
                    
                    <p>A javascript programmer</p>

                    <img src={user.avatar_url} height="200" width="300" alt="js" />

                </div>
            </Layout>
        )
    }
}
export default About
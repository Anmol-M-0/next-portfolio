import Layout from '../components/Layout'


const Error = ({statusCode}) => {
    if (statusCode) {
    return (
        <Layout title='error!'>
            
            <p>`could not load your data: status code {statusCode} </p>
            
        </Layout>
    )} 
    return  (
        <Layout title='error!'>
            
            <p>Couldn't get that page, sorry!!!</p>
            
        </Layout>
    )
}

export default Error





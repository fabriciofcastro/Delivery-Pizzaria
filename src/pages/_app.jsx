import "../styles/globals.css";
import store from '../store/Store'
import { Provider } from 'react-redux'
import Layout from "../components/layouts/Layout";

function MyApp ( { Component, pageProps } )
{
  return (
    <Layout >
     <Component { ...pageProps } />
    </Layout>
     
 );
}

export default MyApp;

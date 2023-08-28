import Layout from "../components/Layout";
import Dashboard from "../components/integration/list/Dashboard";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => { 
  return (
    <Layout>
       <Dashboard />  
      </Layout>
  );
};


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default Index;

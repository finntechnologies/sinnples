import Layout from "../components/Layout";
import Dashboard from "../components/integration/list/Dashboard";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface LocaleProps {
  locale: string
}

const Index = () => { 
     
  return (
    <Layout>
       <Dashboard />  
      </Layout>
  );
};


export async function getStaticProps({ locale }: LocaleProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}

export default Index;

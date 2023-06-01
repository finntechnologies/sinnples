import IndicationList from "../components/integration/list/IndicationList";
import useSwr from "swr";
import Layout from "../components/Layout";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index = () => {
  const {
    data: indications,
    error,
    isLoading,
  } = useSwr("/api/indication", fetcher);

  if (error) return <div>Falha ao carregar</div>;

  if (isLoading) return <div>Carregando...</div>;

  if (!indications) return null;

  return (
    <Layout>
      <IndicationList indications={indications} />
    </Layout>
  );
};

export default Index;

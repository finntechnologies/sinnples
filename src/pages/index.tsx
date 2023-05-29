import ServiceList from "../components/ServiceList";
import useSwr from "swr";
import Layout from "../components/Layout";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index = () => {
  const {
    data: indications,
    error,
    isLoading,
  } = useSwr("/api/indication", fetcher);

  if (error) return <div>Failed to load users</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!indications) return null;

  return (
    <Layout>
      <ServiceList indications={indications} />
    </Layout>
  );
};

export default Index;

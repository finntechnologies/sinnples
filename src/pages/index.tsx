import ServiceList from "../components/ServiceList";
import useSwr from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Index = () => {
  const { data: indications, error, isLoading } = useSwr("/api/indication", fetcher);
  
  if (error) return <div>Failed to load users</div>;

  if (isLoading) return <div>Loading...</div>;

  if (!indications) return null;

  return (
    <div>
      <div className="bg-blue-500 text-white p-4">
        Indication Guru
      </div>
      <ServiceList indications={indications} />
    </div>
  );
};

export default Index;

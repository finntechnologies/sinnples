import useSwr from "swr";
import IndicationList from "./IndicationList";
import Link from "next/link";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Dashboard = () => {

  const {
    data: indications,
    error,
    isLoading,
  } = useSwr("/api/indication", fetcher);

  if (error) return <div>Falha ao carregar</div>;

  if (isLoading) return <div>Carregando...</div>;

  if (!indications) return null;

    return (
      <div>
        <div className="p-4 bg-gray-800 block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="w-full mb-1">
            <div className="mb-4">
              <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                  <li className="inline-flex items-center">
                    <Link href="#" className="inline-flex items-center text-gray-300 hover:text-purple-500">
                      <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                      Home
                    </Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      <Link href="#" className="ml-1 text-gray-300 hover:text-purple-500 md:ml-2 ">Indications</Link>
                    </div>
                  </li>
                </ol>
              </nav>
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">All indications</h1>
            </div>
            <div className="items-center justify-between block sm:flex">
              <div className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3" action="#" method="GET">
                  <label htmlFor="products-search" className="sr-only">Search</label>
                  <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                    <input type="text" name="email" id="products-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search for products" />
                  </div>
                </form>
              </div>
              <button id="createProductButton" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
                Add new Indication
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow">
                <IndicationList indications={indications} />
             </div>
            </div>
          </div>
        </div>
      </div>        
    )
}

export default Dashboard
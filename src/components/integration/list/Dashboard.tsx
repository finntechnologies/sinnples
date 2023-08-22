import useSwr from 'swr'
import IndicationList from './IndicationList'
import Link from 'next/link'
import IndicationAdd from '../add/IndicationAdd'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Dashboard = () => {
  const {
    data: indications,
    error,
    isLoading,
  } = useSwr('/api/indication', fetcher)

  if (error) return <div>Falha ao carregar</div>

  if (isLoading) return <div>Carregando...</div>

  if (!indications) return null
  return (
    <div>
      <div className="block items-center justify-between border-b border-gray-200 bg-gray-800 p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
        <div className="mb-1 w-full">
          <div className="mb-4">
            <nav className="mb-5 flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li className="inline-flex items-center">
                  <Link
                    href="#"
                    className="inline-flex items-center text-gray-300 hover:text-purple-500"
                  >
                    <svg
                      className="mr-2.5 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <Link
                      href="#"
                      className="ml-1 text-gray-300 hover:text-purple-500 md:ml-2 "
                    >
                      Indications
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              All indications
            </h1>
          </div>
          <div className="block items-center justify-between sm:flex">
            <div className="mb-4 flex items-center sm:mb-0">
              <form className="sm:pr-3" action="#" method="GET">
                <label htmlFor="products-search" className="sr-only">
                  Search
                </label>
                <div className="relative mt-1 w-48 sm:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="products-search"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                    placeholder="Search for products"
                  />
                </div>
              </form>
            </div>
            <IndicationAdd />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="flex min-w-full flex-col divide-y divide-gray-200 dark:divide-gray-600">
                <thead className="bg-gray-300 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all"
                          aria-describedby="checkbox-1"
                          type="checkbox"
                          className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                        />
                        <label htmlFor="checkbox-all" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-20  py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      AP block
                    </th>
                    <th
                      scope="col"
                      className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Apartment
                    </th>
                    <th
                      scope="col"
                      className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
                    >
                      Cep
                    </th>
                  </tr>
                </thead>
                <IndicationList indications={indications} />
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

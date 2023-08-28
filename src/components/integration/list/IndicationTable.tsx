import { useTranslation } from 'next-i18next'

interface props {
  indications: any
}

const IndicationTable = ({ indications }: props) => {

    const { t } = useTranslation('common')

    return (
      <thead className={`bg-gray-300 dark:bg-gray-700  ${indications.length === 0 ? 'hidden' : ''}`}>
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
            {t('name')}
          </th>
          <th
            scope="col"
            className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
           {t('category')}

          </th>
          <th
            scope="col"
            className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            {t('ap block')}
          </th>
          <th
            scope="col"
            className="px-20 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
                        {t('apartament')}

          </th>
          <th
            scope="col"
            className="px-16 py-4 text-left text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            Cep
          </th>
        </tr>
      </thead>
    )
  }
  
  export default IndicationTable
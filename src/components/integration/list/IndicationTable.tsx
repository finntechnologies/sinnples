import { useTranslation } from 'next-i18next'

interface props {
  indications: any
}

const IndicationTable = ({ indications }: props) => {

  
    const { t } = useTranslation()

    return (
      <thead className={`bg-gray-300 dark:bg-gray-700 ${indications.length === 0 ? 'hidden' : ''}`}>
        <tr>
        <th
            scope="col"
            className="px-16 py-3.5 text-left rtl:text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400 w-12"
          >
            {t('Name')}
          </th>
          <th
            scope="col"
            className="px-16 py-3.5 text-left rtl:text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400 w-12"
          >
           {t('Category')}

          </th>
          <th
            scope="col"
            className="px-16 py-3.5 text-left rtl:text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            {t('Ap Block')}
          </th>
          <th
            scope="col"
            className="px-16 py-3.5 text-left rtl:text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            {t('Apartments')}

          </th>
          <th
            scope="col"
            className="px-16 py-3.5 text-left rtl:text-right text-xs font-medium uppercase text-gray-500 dark:text-gray-400"
          >
            Cep
          </th>
        </tr>
      </thead>
    )
  }
  
  export default IndicationTable
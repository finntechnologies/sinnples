import { useMemo } from 'react'
import { IndicationType } from '../IndicationTypes'
import IndicationListRow from './IndicationListRow'

type IntegrationListProps = {
  indications: IndicationType[] | null
  search: string
}

const IndicationList = ({ indications = [], search }: IntegrationListProps) => {
  const FilteredData = useMemo(() => {
    const searchToLowerCase = search?.toLowerCase()

    return indications?.filter((indication) =>
      indication.name.toLowerCase().includes(searchToLowerCase),
    )
  }, [search, indications])

  return (
    <>
      {FilteredData?.map((indication) => (
        <IndicationListRow key={indication._id} indication={indication} />
      ))}
    </>
  )
}

export default IndicationList

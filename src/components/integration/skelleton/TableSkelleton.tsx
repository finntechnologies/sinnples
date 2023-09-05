
const TableSkelleton = () => {
  return (
    <>
      <div role="status" className="animate-pulse">
        <div className="overflow-hidden border mt-10 h-20 bg-gray-800 dark:border-gray-700 md:rounded-lg">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="overflow-hidden border mt-1 h-20 bg-gray-800 dark:border-gray-700 md:rounded-lg">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="overflow-hidden border mt-1 h-20 bg-gray-800 dark:border-gray-700 md:rounded-lg">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="overflow-hidden border mt-1 h-20 bg-gray-800 dark:border-gray-700 md:rounded-lg">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}


export default TableSkelleton
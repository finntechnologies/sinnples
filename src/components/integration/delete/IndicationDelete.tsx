import { 
  AlertDialog, 
  AlertDialogTrigger, 
  AlertDialogPortal, 
  AlertDialogOverlay, 
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction
} 
from '@radix-ui/react-alert-dialog'
import { useGet } from '../../../hooks/useGet'

interface IndicationIdProps {
  indicationId: string
}

const IndicationDelete = (id: IndicationIdProps) => {
  const { mutate } = useGet('/api/indication')

  const handleDelete = async () => {
    const { indicationId } = id
    try {
      const response = await fetch(`/api/indication/${indicationId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        // @todo tailwind feedback

        await mutate()
      } else {
        // @todo tailwind feedback
        console.log('Error delete indication')
      }
    } catch (error) {
      // @todo tailwind feedback
      console.error('Error:', error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <button className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
        <svg
          className="mr-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Delete item
      </button>
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay className="animate-overlay fixed inset-0 bg-gray-700 " />
        <AlertDialogContent className="animate-content shadow-custom-0 fixed left-1/2 top-1/2 max-h-[85vh] w-[90vh] max-w-md -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 focus:outline-none dark:bg-gray-800">
          <AlertDialogTitle className="color-black m-0 text-base font-medium dark:text-white">
            Você tem certeza absoluta?
          </AlertDialogTitle>
          <AlertDialogDescription className="color-black mb-5 text-sm dark:text-gray-400">
            Essa ação não pode ser desfeita. As indicações serão removidas de
            nossos servidores
          </AlertDialogDescription>
          <div className="flex justify-end gap-6">
            <AlertDialogAction asChild>
              <button className="focus:shadow-mauve-0 inline-flex h-9 items-center rounded bg-gray-700 px-4 text-base font-medium text-gray-400 transition-all hover:bg-gray-500 focus:outline-none">
                Cancelar
              </button>
            </AlertDialogAction>
            <AlertDialogAction asChild>
              <button
                className="focus:shadow-red-0 inline-flex h-9 items-center rounded bg-red-200 px-4 text-base font-medium text-red-500  transition-all hover:bg-red-300 focus:outline-none"
                onClick={handleDelete}
              >
                Sim, apagar indicação
              </button>
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  )
}

export default IndicationDelete

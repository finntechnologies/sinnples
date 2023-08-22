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
import React, { useState } from "react";
import { useRouter } from "next/router";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { X } from 'lucide-react'

type InfoTableSchemaData = z.infer<typeof InfoTableSchema>

const InfoTableSchema = z.object({
  firstName: z.string().min(3, "Deve conter no minimo 3 caracteres"),
  lastName: z.string().nonempty("Obrigatório"),
  apartmentBlock: z.string().nonempty("Obrigatório"),
  apartment: z.string().nonempty("Obrigatório"),
  cep: z.string().min(8, "Deve conter no minimo 8 caracteres")
})

const IndicationAdd = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<InfoTableSchemaData>({
    resolver: zodResolver(InfoTableSchema),
  })
  
  const router = useRouter();
  const handleInfo = async (data: InfoTableSchemaData ) => {
    const { firstName, lastName, ...restBody } = data;
    const body = {
      ...restBody,
      name: `${firstName} ${lastName}`,
    };

    try {
      const response = await fetch("/api/indication", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        // @todo tailwind feedback
        closeModal();
        console.log("Indication saved successfully");
        return router.push('/');
        
      } else {
        // @todo tailwind feedback
        console.log("Error saving indication");
      }
    } catch (error) {
      // @todo tailwind feedback
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <AlertDialog open={isModalOpen} onOpenChange={setModalOpen}>
      <AlertDialogTrigger asChild>
          <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          Nova indicação
          </button>
  
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay className="fixed inset-0 animate-overlay bg-gray-700 focus:outline-none" />
        <AlertDialogContent className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 transform animate-content rounded-md bg-white p-6 shadow-custom-0 focus:outline-none dark:bg-gray-800 ">
          <AlertDialogTitle className="m-0 text-base font-medium text-gray-800 dark:text-white ">
          Indicações
          </AlertDialogTitle>
          <AlertDialogDescription className="mx-0 my-2.5 mb-5 text-base text-gray-400">
          Essas informações serão exibidas publicamente, portanto, tenha
          cuidado com o que será compartilhado.
          </AlertDialogDescription>
          <form
            onSubmit={handleSubmit(handleInfo)}
          >
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="firstName"
              >
                Nome
              </label>
              <input
                {...register('firstName')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="firstName"
                type="text"
                required
              />
              {errors.firstName && (
                <span className="text-sm text-red-600 ">
                  {errors.firstName.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="lastName"
              >
                Sobrenome
              </label>
              <input
                {...register('lastName')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="lastName"
                type="text"
                required
              />
              {errors.lastName && (
                <span className="text-sm text-red-600">
                  {errors.lastName.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="apartmentBlock"
              >
              Bloco AP
              </label>
              <input
                {...register('apartmentBlock')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="apartmentBlock"
                type="text"
                required
              />
              {errors.apartmentBlock && (
                <span className="text-sm text-red-600">
                  {errors.apartmentBlock.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="apartment"
              >
                Apartamento
              </label>

              <input
                {...register('apartment')}
                className="inline-flex h-9 w-full flex-1  items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="apartment"
                type="text"
                required
              />
              {errors.apartment && (
                <span className="text-sm text-red-600">
                  {errors.apartment.message}
                </span>
              )}
            </fieldset>
            <fieldset className="mb-4 flex items-center gap-5">
              <label
                className="w-20 text-right text-base text-violet-400 dark:text-violet-500"
                htmlFor="cep"
              >
                Cep
              </label>
              <input
                {...register('cep')}
                className="inline-flex h-9 w-full flex-1 items-center rounded px-2.5 py-0 text-base text-gray-500 shadow-sm-0 dark:text-gray-700"
                id="cep"
                type="text"
                required
              />
              {errors.cep && (
                <span className="text-sm text-red-600">
                  {errors.cep.message}
                </span>
              )}
            </fieldset>
            <div className="mt-6 flex justify-end">
            
                <button
                  type='submit'
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                
                  Salvar
                </button> 
            </div>
            <AlertDialogAction asChild>
              <button
                className="focus:shadow absolute right-2.5 top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-violet-400 hover:text-violet-500 dark:text-violet-500"
                aria-label="Close"
              >
                <X />
              </button>
            </AlertDialogAction>
            </form>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
};

export default IndicationAdd;

import React from "react";
import Layout from "../../Layout";
import { useRouter } from "next/router";
import { z } from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

type InfoTableSchemaData = z.infer<typeof InfoTableSchema>

const InfoTableSchema = z.object({
  firstName: z.string().min(3, "Deve conter no minimo 3 caracteres"),
  lastName: z.string().nonempty("Obrigatório"),
  apartmentBlock: z.string().nonempty("Obrigatório"),
  apartment: z.string().nonempty("Obrigatório"),
  cep: z.string().min(8, "Deve conter no minimo 8 caracteres").nonempty("Obrigatório")
})

const IndicationAdd = () => {
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

  

  return (
    <Layout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">Nova Indicação</h1>
        <form onSubmit={handleSubmit(handleInfo)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Indicações
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Essas informações serão exibidas publicamente, portanto, tenha
                cuidado com o que será compartilhado.
              </p>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Informações Pessoais
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("firstName")}
                      type="text"
                      name="firstName"
                      id="firstName"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.firstName && (
                      <span className="text-sm text-red-600 ">
                      {errors.firstName.message}
                    </span>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sobrenome
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("lastName")}
                      type="text"
                      name="lastName"
                      id="lastName"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.lastName && (
                      <span className="text-sm text-red-600 ">
                      {errors.lastName.message}
                    </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartmentBlock"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bloco do Apartamento
                  </label>
                  <div className="mt-2">
                    <input
                      {...register("apartmentBlock")}
                      type="text"
                      name="apartmentBlock"
                      id="apartmentBlock"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.apartmentBlock && (
                      <span className="text-sm text-red-600 ">
                      {errors.apartmentBlock.message}
                    </span>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Apartamento
                  </label>
                  <div className="mt-2">
                    <input
                    {...register("apartment")}
                      type="text"
                      name="apartment"
                      id="apartment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.apartment && (
                      <span className="text-sm text-red-600 ">
                      {errors.apartment.message}
                    </span>
                    )}
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cep
                  </label>
                  <div className="mt-2">
                    <input
                    {...register("cep")}
                      type="text"
                      name="cep"
                      id="cep"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.cep && (
                      <span className="text-sm text-red-600 ">
                      {errors.cep.message}
                    </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Indicar
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default IndicationAdd;

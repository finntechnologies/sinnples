import  useSWR  from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useGet = (url: string) => {
    return useSWR(url, fetcher)
}
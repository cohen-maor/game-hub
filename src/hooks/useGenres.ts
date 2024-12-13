import useData from "./useData";

export interface Genere {
    id: number;
    name: string;
}

const useGenres = () => useData<Genere>('/genres');

export default useGenres;
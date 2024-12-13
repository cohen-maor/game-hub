import useData from "./useData";

export interface Genere {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useData<Genere>('/genres');

export default useGenres;
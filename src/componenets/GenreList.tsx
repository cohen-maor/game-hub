import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
    onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
	const { data, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />

	return (
        
		<List.Root variant={'plain'}>
			{data.map((genre) => (
				<List.Item key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							src={getCroppedImageUrl(genre.image_background)}
							boxSize="50px"
                            borderRadius={8}
						/>
                        <Link fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'} fontSize={'lg'} onClick={() => onSelectGenre(genre)}>{genre.name}</Link>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;

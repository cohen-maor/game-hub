import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Text } from "@chakra-ui/react";
import React from "react";

const GenreList = () => {
	const { data } = useGenres();

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
                        <Text fontSize={'lg'}>{genre.name}</Text>
					</HStack>
				</List.Item>
			))}
		</List.Root>
	);
};

export default GenreList;

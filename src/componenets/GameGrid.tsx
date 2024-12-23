import { SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";

interface Props {
	selectedGenre: Genre | null;
}

const GameGrid = ({selectedGenre} : Props) => {
	const { data, error, isLoading } = useGames(selectedGenre);
	const skeletons = [1, 2, 3, 4, 5, 6];

	return (
		<>
			{error && <Text>{error}</Text>}
			{/* <List.Root padding="10px">
				{games.map((game) => (
					<Box mb={3}>
						<List.Item key={game.id}>{game.name}</List.Item>
					</Box>
				))}
			</List.Root> */}

			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} gap={3} padding="10px">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer>
							<GameCardSkeleton key={skeleton} />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;

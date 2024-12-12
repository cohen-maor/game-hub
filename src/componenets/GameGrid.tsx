import { Box, List, SimpleGrid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, error } = useGames();

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
			<SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap={10} padding='10px'>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;

import { Box, List } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
	const {games, error} = useGames();

	return (
		<>
		{error && <Text>{error}</Text>}
			<List.Root padding="10px">
				{games.map((game) => (
					<Box mb={3}>
						<List.Item key={game.id}>{game.name}</List.Item>
					</Box>
				))}
			</List.Root>
		</>
	);
};

export default GameGrid;

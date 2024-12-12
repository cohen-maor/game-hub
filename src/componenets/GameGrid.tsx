import apiClient from "@/services/api-client";
import { Box, List, ListItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";

interface Game {
	id: number;
	name: string;
}

interface FetchGamesResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState("");

	useEffect(() => {
		apiClient
			.get<FetchGamesResponse>("/games")
			.then((res) => setGames(res.data.results))
			.catch((err) => setError(err.message));
	}, []);

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

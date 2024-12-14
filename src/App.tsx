import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import GameGrid from "./componenets/GameGrid";
import GenreList from "./componenets/GenreList";
import { Genre } from "./hooks/useGenres";
import { useEffect, useState } from "react";

// import { createClient } from "@supabase/supabase-js";

const App = () => {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	// const supabaseUrl = "https://yplzzgbwrphcwkrpdpjh.supabase.co";
	// const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
	// console.log(process.env.REACT_APP_SUPABASE_KEY);
	// const supabase = createClient(supabaseUrl, supabaseKey as string);

	// const addUser = async () => {
	// 	let { data, error } = await supabase.auth.signUp({
	// 		email: "someone@email.com",
	// 		password: "NBeyPnkOUllPplqeakkq",
	// 	});

	// 	console.log(data, error);
	// }

	// addUser();

	useEffect(() => {
		console.log("KEY: " + process.env.REACT_APP_WHATEVER);
	}, [])

	return (
		<>
			{/* <HStack>
				<Button colorPalette="blue">Click!!</Button>
				<Button colorPalette="blue" variant="surface">
					איך העברית
				</Button>
			</HStack> */}

			<Grid
				templateAreas={{
					base: '"nav" "main"',
					lg: '"nav nav" "aside main"',
				}}
				templateColumns={{
					base: "1fr",
					lg: "200px 1fr",
				}}
			>
				<GridItem area="nav">
					<NavBar />
				</GridItem>
				<GridItem
					display={{ base: "none", lg: "block" }}
					area="aside"
					paddingX={5}
				>
					<GenreList
						selectedGenre={selectedGenre}
						onSelectGenre={(genre) => setSelectedGenre(genre)}
					/>
				</GridItem>
				<GridItem area="main">
					<GameGrid selectedGenre={selectedGenre} />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;

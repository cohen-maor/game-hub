import { HStack, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import GameGrid from "./componenets/GameGrid";
import GenreList from "./componenets/GenreList";

const App = () => {
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
			>
				<GridItem area="nav">
					<NavBar />
				</GridItem>
				<GridItem display={{ base: "none", lg: "block" }} area="aside">
					<GenreList />
				</GridItem>
				<GridItem area="main">
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
};

export default App;

import { HStack, Button, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
	return (
		<>
			<HStack>
				<Button colorPalette="blue">Click!!</Button>
				<Button colorPalette="blue" variant="surface">
					איך העברית
				</Button>
			</HStack>

			<Grid
				templateAreas={{
					base: '"nav" "main"',
					lg: '"nav nav" "aside main"',
				}}
			>
				<GridItem area="nav" bg="coral">
					Nav
				</GridItem>
				<GridItem display={{ base: "none", lg: "block" }} area="aside" bg="yellow">
					Aside
				</GridItem>
				<GridItem area="main" bg="red">
					Main
				</GridItem>
			</Grid>
		</>
	);
};

export default App;

import { HStack, Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";

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

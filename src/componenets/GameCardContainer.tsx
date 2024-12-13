import { Box, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "@chakra-ui/skeleton";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box width="300px" borderRadius={10} overflow="hidden">
			{children}
		</Box>
	);
};

export default GameCardContainer;

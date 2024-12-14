import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/useGames";
import { HStack, Icon, Image } from "@chakra-ui/react";
import { IconType } from "react-icons";
import logo from "../assets/871390.png";
import { ReactNode } from "react";

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	const setPlatformIcon = (platform: Platform): ReactNode => {
		const IconComponenet = iconMap[platform.slug];

		if (platform.slug === "sega") {
			return <Image src={logo} boxSize="13px" />;
		}

		if (!IconComponenet) {
			return null;
		}

		return (
			<Icon key={platform.id} color="gray.500">
				<IconComponenet />
			</Icon>
		);
	};

	return (
		<HStack marginY={1}>
			{platforms.map((platform) => setPlatformIcon(platform))}
		</HStack>
	);
};

export default PlatformIconList;

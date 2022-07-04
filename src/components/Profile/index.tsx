import { User } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faBuilding,
	faEnvelope,
	faFolderClosed,
} from "@fortawesome/free-regular-svg-icons";
import { faMapMarkerAlt, faLink, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import {
	ProfileContainer,
	InfoContainer,
	PhotoContainer,
	Title,
	Text,
	Photo,
	Link,
} from "./styles";

interface ProfileProps {
	user: User;
}

export function Profile({ user }: ProfileProps) {
	const {
		avatar_url: profileImg,
		html_url: url,
		name,
		login,
		location,
		company,
		email,
		blog,
		followers,
		following,
		public_repos,
	} = user;

	return (
		<ProfileContainer>
			<PhotoContainer>
				<Photo src={profileImg} alt="user" />

				<Link href={url} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} />
					{login}
				</Link>

				<Title>{name}</Title>
			</PhotoContainer>

			<InfoContainer>
				<Text>
					<FontAwesomeIcon icon={faMapMarkerAlt} />
					{location ? location : ""}
				</Text>

				<Text>
					<FontAwesomeIcon icon={faBuilding} />
					{company ? company : ""}
				</Text>

				<Text>
					<FontAwesomeIcon icon={faLink} />
					{blog ? blog : ""}
				</Text>

				<Text>
					<FontAwesomeIcon icon={faEnvelope} />
					{email ? email : ""}
				</Text>

				<Text>
					<FontAwesomeIcon icon={faFolderClosed} />
					{`${public_repos} repositories`}
				</Text>

				<Text>
					<FontAwesomeIcon icon={faUserFriends} />
					{`${followers} Followers`}
				</Text>
				<Text>
					<FontAwesomeIcon icon={faUserFriends} />
					{`${following} Following`}
				</Text>
			</InfoContainer>
		</ProfileContainer>
	);
}

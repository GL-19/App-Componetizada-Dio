import { User } from "../../interfaces";
import {
	ProfileContainer,
	InfoContainer,
	PhotoContainer,
	Title,
	Text,
	Photo,
	Link,
	Icon,
} from "./styles";

import companyIcon from "../../images/company.png";
import locationIcon from "../../images/location.png";
import linkIcon from "../../images/link.png";
import twitterIcon from "../../images/twitter.png";
import emailIcon from "../../images/email.png";

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
		twitter_username: twitter,
	} = user;

	return (
		<ProfileContainer>
			<PhotoContainer>
				<Photo src={profileImg} alt="Foto usuário" />
				<Title>{name}</Title>
				<Link href={url} target="_blank" rel="noreferrer">
					{login}
				</Link>
			</PhotoContainer>
			<InfoContainer>
				<Title>Informações</Title>
				{location && (
					<Text>
						<Icon src={locationIcon} />
						{location}
					</Text>
				)}
				{company && (
					<Text>
						<Icon src={companyIcon} />
						{company}
					</Text>
				)}
				{blog && (
					<Link href={blog} target="_blank" rel="noreferrer">
						<Icon src={linkIcon} />
						{blog}
					</Link>
				)}
				{email && (
					<Text>
						<Icon src={emailIcon} />
						{email}
					</Text>
				)}
				{twitter && (
					<Text>
						<Icon src={twitterIcon} />
						{twitter}
					</Text>
				)}
			</InfoContainer>
		</ProfileContainer>
	);
}

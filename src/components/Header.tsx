import {
	createStyles,
	Header as MantineHeader,
	Container,
	Group,
	Burger,
	Avatar
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%'
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none'
		}
	},

	burger: {
		[theme.fn.largerThan('xs')]: {
			display: 'none'
		}
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
		}
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
		}
	}
}));

type HeaderLink = { link: string; label: string };
export type HeaderLinks = HeaderLink[];
interface HeaderProps {
	links: HeaderLinks;
}

export const Header: FC<HeaderProps> = ({ links }: HeaderProps) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [opened, { toggle }] = useDisclosure(false);
	const { classes, cx } = useStyles();

	const items = links.map((link: HeaderLink) => (
		<a
			key={link.label}
			href={link.link}
			className={cx(classes.link, { [classes.linkActive]: location.pathname === link.link })}
			onClick={(event) => {
				event.preventDefault();
				navigate(link.link);
			}}
		>
			{link.label}
		</a>
	));

	return (
		<MantineHeader height={60} mb={120}>
			<Container className={classes.header}>
				<Avatar src={'icon.jpeg'} radius={'xl'} />
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />
			</Container>
		</MantineHeader>
	);
};

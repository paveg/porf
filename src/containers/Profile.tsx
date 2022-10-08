import React, { FC } from 'react';
import { Header } from '../components/Header';
import { Links } from '../consts/HeaderLinks';

export const Profile: FC = () => {
	return (
		<>
			<Header links={Links} />
		</>
	);
};

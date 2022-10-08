import { React, FC } from 'react';
import { Header } from '../components/Header';
import { HeaderLinks } from '../consts/HeaderLinks';

export const Root: FC = () => {
	return (
		<>
			<Header links={HeaderLinks} />
		</>
	);
};

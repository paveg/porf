import { React, StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, Text } from '@mantine/core';

const App: FC = () => {
	return (
		<StrictMode>
			<MantineProvider withGlobalStyles={true} withNormalizeCSS={true}>
				<Text>Welcome to Mantine!</Text>
			</MantineProvider>
		</StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorSite = () => {
	return (
		<>
			<h1>Błąd strony</h1>
			<Link to='/'>
				<button>Powrót na stronę główną</button>
			</Link>
		</>
	);
};

export default ErrorSite;

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorSite = () => {
	return (
		<>
			<h1>Błąd strony</h1>
			<button>
				<Link to='/'>
					Powrót na stronę główną
				</Link>
			</button>
			
		</>
	);
};

export default ErrorSite;

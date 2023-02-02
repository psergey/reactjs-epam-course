import { FC } from 'react';

const Header : FC<{message: string}> = ({message}): JSX.Element => {
    return (
        <h1>Hello {message}!</h1>
    )
}

export default Header;
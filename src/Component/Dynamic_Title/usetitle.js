import React, { useEffect } from 'react';

const usetitle = (title) => {

    useEffect(() => {

        document.title = "Toys Center  " +  title

    }, [title]);
};

export default usetitle;
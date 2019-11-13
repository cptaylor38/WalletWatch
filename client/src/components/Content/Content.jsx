import React, { useEffect, useState } from 'react';
import './Content.css';
import API from "../../clientRoutes/API";

const Content = ({ display, user }) => {
    const [content, setContent] = useState(null);

    useEffect(() => {
        console.log(display)
        API.getCategoryData(`/${display}`, { id: user, cateogry: display })
            .then(response => { setContent(response); console.log(response) });
    }, []);

    return (
        <p>
            {display}
            {user}
        </p>
    )
}

export default Content;
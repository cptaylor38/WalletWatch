import React, { createContext, useState, useEffect } from 'react';
import API from '../clientRoutes/API';

function retrieveContent(props) {
    const [content, setContent] = useState();
    API.getCategoryData({ id: props.id, category: props.category })
        .then(res => setContent(res));

    return content;
}

export default retrieveContent;


import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../contexts/UserProvider";

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const userData = useContext(UserProvider.context);

    useEffect(() => setSelected(userData), [userData]);

    return (
        <div className="page">
            <p>{JSON.stringify(selected)}</p>
        </div>
    );
};

export default Profile;
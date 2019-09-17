import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../contexts/UserProvider";
import API from '../clientRoutes/API';

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const userData = useContext(UserProvider.context);
    useEffect(() => setSelected(userData), [userData]);
    const [salary, setsalary] = useState(null);

    const onSubmit = event => {
        event.preventDefault();
        API.adjustSalary({
            id: selected._id,
            salary: salary
        })

    }

    return (
        <>
            <div className="page">
                <p>{JSON.stringify(selected)}</p>
                <p>{selected ? selected._id : ''}</p>
            </div>
            <div className='salarySection'>
                <h1>What is your yearly salary?</h1>
                <form onSubmit={onSubmit}>
                    <div className='container'>
                        <label> salary: </label>
                        <input type="text" className='inputField' onChange={event => setsalary(event.target.value)} name="salary" placeholder="salary" />
                    </div>
                    <button className="button-default" type="submit">Submit</button>
                </form>
            </div>
            <div className='logoutSection'>
                <a href='/auth/logout'>Log out</a>
            </div>
        </>
    );
};

export default Profile;
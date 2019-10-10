import React, { useContext, useState, useEffect } from "react";
import UserProvider from "../../contexts/UserProvider";
import API from '../../clientRoutes/API';
import Nav from '../../components/Navbar/Nav';

const Profile = () => {
    const [selected, setSelected] = useState(null);
    const userData = useContext(UserProvider.context);
    useEffect(() => setSelected(userData), [userData]);
    const [salary, setSalary] = useState('');

    const onSubmit = event => {
        event.preventDefault();
        API.adjustSalary({
            id: selected._id,
            salary: salary
        }).then(res => { setSelected(res.data); window.location.reload() })
            .catch(err => console.log(err));

    }

    return (
        <>
            <Nav user={selected} />
            <div className="page">
                <p>{JSON.stringify(selected)}</p>
                <p>{selected ? selected._id : ''}</p>
            </div>
            <div className='salarySection'>
                <h1>What is your yearly salary?</h1>
                <form onSubmit={onSubmit}>
                    <div className='container'>
                        <label> salary: </label>
                        <input type="text" className='inputField' onChange={event => setSalary(event.target.value)} name="salary" placeholder="salary" value={salary} />
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
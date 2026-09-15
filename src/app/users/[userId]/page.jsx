import React from 'react';

const UserDetailspage = async({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json()
    return (
        <div>
            <h2>User Details</h2>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            <p>{user.website}</p>
        </div>
    );
};

export default UserDetailspage;
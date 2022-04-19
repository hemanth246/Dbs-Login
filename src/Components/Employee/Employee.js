import React from 'react'

const Employee = (props) => {
    const { role, currentUser } = props;
    return (
        <div>
            <h4>{role}</h4>
            <div >
                <p>Name:{currentUser.name}</p>
                <p>Email:{currentUser.email}</p>
            </div>
        </div>
    )
}

export default Employee;
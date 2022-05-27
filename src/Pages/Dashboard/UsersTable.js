import React from 'react';

const UsersTable = ({ info, index }) => {
    const { email } = info
    // const makeAdmin = () => {
    //     fetch(`http://localhost:5000/user/admin/${email}`, {
    //         method: "PUT",
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     }).then(res => {
    //         return res.json
    //     })
    //         .then(data => console.log(data))

    // }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{info.email}</td>
            <td>
                <button class="btn btn-xs bg-green-500">Make Admin</button>
            </td>

        </tr>
    );
};

export default UsersTable;
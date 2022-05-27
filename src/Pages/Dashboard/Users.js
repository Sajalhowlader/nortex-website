import React from 'react';
import { useQuery } from 'react-query';
import PreLoader from '../Shared/PreLoader';

const Users = () => {
    const { data: allUsers, isLoading } = useQuery("reviews", () =>
        fetch("http://localhost:5000/reviews").then((res) => res.json())
    );

    if (isLoading) {
        return <PreLoader />;
    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-8">My Order</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SI No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Paid</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button class="btn btn-xs bg-green-500">Paid</button>
                                </td>
                                <td>
                                    <button class="btn btn-xs bg-red-500">Cancel</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
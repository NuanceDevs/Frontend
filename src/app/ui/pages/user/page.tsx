'use client';
import { ApiGateway } from '@/app/lib/ApiGateway';
import React, { useEffect, useState } from 'react'

type user = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
  };

const UserPage: React.FC = () => {
    const [user, setUsers] = useState<user[]>([]);
  
    useEffect(() => {
      const endpoint = "user/getAllUsers";
      console.log(process.env.NEXT_PUBLIC_GATEWAY_IP);
      ApiGateway.fetchData(endpoint)
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);

    return(
        <div>
            <h1>Users</h1>
            <ul>
                {user.map((user: user) => (
                    <li key={user.id}>
                        {user.name}
                        {user.role}
                        {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserPage;
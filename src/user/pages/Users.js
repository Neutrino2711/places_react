import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {

    const USERS = [
        { id: 'u1', image: 'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg', name: "Akshaj Pal", placesCount: 3 }
    ]

    return <UsersList items={USERS} />
}

export default Users;
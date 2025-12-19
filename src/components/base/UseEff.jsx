import { useEffect, useState } from "react";

const UseEff = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        const fetchUserById = async () => {
            try {
                const result = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await result.json();
                setUser(data)
            } catch (error) {
                console.log(error);
            };
        }
        fetchUserById();
    }, []);

    return (
        <>
            <h1>{user.id}</h1>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <h1>{user.email}</h1>
            <h1>{user.phone}</h1>
            <h1>{user.website}</h1>
        </>
    );
}
export default UseEff;
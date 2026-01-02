import { useEffect, useState } from "react";
import userApi from "../services/userApi";

const UserManager = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            try {
                setLoading(true);
                const data = await userApi.getAll({
                    signal: controller.signal,
                });
                setUsers(data);
            } catch (err) {
                if (err.name === 'CanceledError') {
                    return;
                }
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
        return () => {
            controller.abort;
        };
    }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div>
            <h2>Danh sách User</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <b>{user.name}</b> – {user.email}
                </div>
            ))}
        </div>
    );
}
export default UserManager;
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

const Home = () => {
    const { user, login, logout } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                    Chào mừng đến với Todo App
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Quản lý công việc của bạn một cách hiệu quả
                </p>

                {user ? (
                    <div className="space-y-4">
                        <p className="text-center text-green-600">
                            Xin chào! Bạn đang đăng nhập với role: <strong>{user.role}</strong>
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link
                                to="/todos"
                                className="block text-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                            >
                                Xem Todo List
                            </Link>
                            {user.role === "admin" && (
                                <Link
                                    to="/admin"
                                    className="block text-center px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                                >
                                    Admin Dashboard
                                </Link>
                            )}
                            <button
                                onClick={logout}
                                className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Đăng xuất
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-4">
                        <Link
                            to="/login"
                            className="block text-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Đăng nhập
                        </Link>
                        <div className="text-center text-gray-500">hoặc đăng nhập nhanh:</div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => login("user")}
                                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                User
                            </button>
                            <button
                                onClick={() => login("admin")}
                                className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                            >
                                Admin
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;

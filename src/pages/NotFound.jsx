import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Không tìm thấy trang</h2>
                <p className="text-gray-600 mb-6">Trang bạn đang tìm kiếm không tồn tại.</p>
                <Link
                    to="/"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Về trang chủ
                </Link>
            </div>
        </div>
    );
};

export default NotFound;

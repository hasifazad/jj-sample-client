import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xl font-bold text-gray-800"
                    >
                       
                        <span>BookStore</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/book/new"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            + Add Book
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
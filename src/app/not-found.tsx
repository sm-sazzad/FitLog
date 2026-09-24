import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4 bg-black">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-200">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-300">
                    Page Not Found
                </h2>
                <p className="mt-2 text-gray-500">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-block rounded-lg bg-black px-6 py-3 text-white transition-colors"
                >
                    <button className='flex items-center gap-2 px-4 py-2 bg-[#C2F800] text-black rounded-2xl ring-2 ring-stone-500 cursor-pointer hover:shadow-md duration-300 font-bold shadow-yellow-200'>
                        <FaArrowLeft className='inline' /> Go back home
                    </button>
                </Link>
            </div>
        </div>
    );
}
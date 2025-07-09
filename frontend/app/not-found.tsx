import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-8">
      <h1 className="text-6xl font-bold text-craftcart mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="inline-block px-6 py-3 bg-craftcart text-white rounded-lg font-medium hover:bg-craftcart/90 transition">Go to Homepage</Link>
    </div>
  );
} 
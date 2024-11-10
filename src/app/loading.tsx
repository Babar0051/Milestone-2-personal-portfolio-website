export default function Loading() {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-600">
        <div className="text-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
          
          {/* Loading text */}
          <p className="text-white text-xl font-semibold animate-pulse">Loading...</p>
        </div>
      </div>
    );
  }
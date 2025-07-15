export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated logo */}
        <div className="mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <span className="text-3xl text-white">⚡</span>
            </div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600 mx-auto"></div>
          </div>
        </div>
        
        {/* Loading text */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">Rambo The Electrician</h2>
        <p className="text-gray-600">Loading...</p>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mt-4 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

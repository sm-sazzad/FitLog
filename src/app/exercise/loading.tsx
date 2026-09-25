export default function Loading() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

                {/* Left Side: Image Skeleton */}
                <div className="flex-1 w-full md:w-1/2">
                    <div className="w-full h-100 md:h-137.5 bg-[#1f1f1f] rounded-2xl animate-pulse relative overflow-hidden">
                        {/* ✅ VS Code Warning-Free Gradient */}
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                    </div>
                </div>

                {/* Right Side: Content Skeleton */}
                <div className="flex-1 w-full md:w-1/2 flex flex-col gap-6 pt-2">

                    {/* Title */}
                    <div className="h-10 w-3/4 bg-[#1f1f1f] rounded-md animate-pulse relative overflow-hidden">
                        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                    </div>

                    {/* Description */}
                    <div className="flex flex-col gap-3">
                        <div className="h-4 w-full bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-4 w-5/6 bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-3 mt-1">
                        <div className="h-7 w-16 bg-[#1f1f1f] rounded-full animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-7 w-16 bg-[#1f1f1f] rounded-full animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                    </div>

                    {/* Stats Table Grid */}
                    <div className="flex flex-col mt-4 border-t border-[#1a1a1a]">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="flex justify-between items-center py-4 border-b border-[#1a1a1a]">
                                <div className="h-4 w-1/3 bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                                </div>
                                <div className="h-4 w-1/4 bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instructions */}
                    <div className="flex flex-col gap-3 mt-4">
                        <div className="h-5 w-1/3 bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-3 w-full bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-3 w-11/12 bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-3 w-full bg-[#1f1f1f] rounded animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        <div className="h-12 w-full sm:w-48 bg-[#1f1f1f] rounded-lg animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                        <div className="h-12 w-full sm:w-48 bg-[#1f1f1f] rounded-lg animate-pulse relative overflow-hidden">
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
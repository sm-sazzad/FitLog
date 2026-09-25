export default function HomeLoading() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-10 font-sans">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">

                {/* 1. Hero Section Skeleton */}
                <div className="w-full h-70 md:h-60 bg-[#151515] rounded-2xl p-8 md:p-12 flex justify-between items-center border border-[#1f1f1f]">
                    <div className="flex flex-col gap-4 w-full md:w-1/2 z-10">
                        {/* Small Tag line */}
                        <div className="h-4 w-32 bg-[#252525] rounded animate-pulse"></div>
                        {/* Big Title */}
                        <div className="h-10 w-full md:w-3/4 bg-[#252525] rounded animate-pulse"></div>
                        {/* Description lines */}
                        <div className="h-4 w-full bg-[#252525] rounded animate-pulse"></div>
                        <div className="h-4 w-5/6 bg-[#252525] rounded animate-pulse"></div>
                        {/* Button */}
                        <div className="h-10 w-40 bg-[#252525] rounded-lg mt-2 animate-pulse"></div>
                    </div>

                    {/* Hero Image Placeholder */}
                    <div className="hidden md:block w-48 h-48 bg-[#252525] rounded-xl animate-pulse z-10"></div>
                </div>

                {/* 2. Library Title Skeleton */}
                <div className="flex flex-col gap-3 mt-4">
                    <div className="h-8 w-48 bg-[#1f1f1f] rounded animate-pulse"></div>
                    <div className="h-4 w-72 bg-[#1f1f1f] rounded animate-pulse"></div>
                </div>

                {/* 3. Workout Cards Grid Skeleton (9 Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(9)].map((_, index) => (
                        <div
                            key={index}
                            className="bg-[#151515] rounded-xl overflow-hidden border border-[#1f1f1f] flex flex-col"
                        >
                            {/* Card Image Area */}
                            <div className="w-full h-48 bg-[#1f1f1f] animate-pulse"></div>

                            {/* Card Content Area */}
                            <div className="p-5 flex flex-col gap-4">

                                {/* Tags (Chest, Arms) */}
                                <div className="flex gap-2">
                                    <div className="h-6 w-16 bg-[#252525] rounded-full animate-pulse"></div>
                                    <div className="h-6 w-16 bg-[#252525] rounded-full animate-pulse"></div>
                                </div>

                                {/* Title & Subtitle */}
                                <div className="flex flex-col gap-2">
                                    <div className="h-6 w-3/4 bg-[#252525] rounded animate-pulse"></div>
                                    <div className="h-4 w-1/2 bg-[#252525] rounded animate-pulse"></div>
                                </div>

                                {/* Stats Footer (Time, Calories, Rating) */}
                                <div className="flex items-center gap-4 mt-2 pt-4 border-t border-[#1f1f1f]">
                                    <div className="h-4 w-12 bg-[#252525] rounded animate-pulse"></div>
                                    <div className="h-4 w-12 bg-[#252525] rounded animate-pulse"></div>
                                    <div className="h-4 w-12 bg-[#252525] rounded animate-pulse"></div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default function Hero() {
    return (
        <div className="w-full overflow-x-hidden relative">
            <img src="/arcana-hero.avif" alt="Horizons Arcana - Teen hackathon in Singapore organized by Hack Club" className="w-full h-auto block" />
            <p className="absolute left-1/2 -translate-x-1/2 top-[62%] text-[#1b3465] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-shantell-sans)] tracking-wider whitespace-nowrap px-4">
                A HACKATHON IN SINGAPORE
            </p>
            <style>{`
                @keyframes slowFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(15px); }
                }
                .slow-float {
                    animation: slowFloat 4s ease-in-out infinite;
                }
            `}</style>
            <div className="absolute left-1/2 -translate-x-1/2 top-[54%]">
                <svg width="240" height="110" viewBox="0 0 240 110" fill="none" stroke="#1b3465" strokeLinecap="round" strokeLinejoin="round">
                    {/* first arrow*/}
                    <path d="M 70 10 L 120 40 L 170 10" strokeWidth="13" />
                    {/* second arrow */}
                    <path d="M 60 50 L 120 85 L 180 50" strokeWidth="18" />
 
                </svg>
            </div>
        </div>
    );
}

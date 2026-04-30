interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
    return(
        
        <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 text-center pt-0" aria-label="Info sections">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "overview" ? "font-bold text-[#1b3465]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Overview
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-12 select-none text-white translate-y-[0.5px]"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="#1b3465"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="#1b3465"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "details" ? "font-bold text-[#1b3465]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Event Details
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-6 select-none text-white translate-y-[0.5px]"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="#1b3465"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="#1b3465"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("qualification")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "qualification"
                ? "font-bold text-[#1b3465]"
                : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Qualification
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 -rotate-6 select-none text-white translate-y-[0.5px]"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="#1b3465"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="#1b3465"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("travel")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "travel" ? "font-bold text-[#1b3465]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Travel
          </button>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="mx-4 h-7 w-7 rotate-12 select-none text-white translate-y-[0.5px]"
          >
            <path
              d="M12 2.6L14.2 7.9L19.5 9.6L15.6 13.2L16.3 19L12 16.4L7.7 19L8.4 13.2L4.5 9.6L9.8 7.9L12 2.6Z"
              fill="#1b3465"
            />
            <path
              d="M12.3 3.3L14.6 8.4L19 10L15.3 13.3L15.9 18.2L12.1 16L8 18.6L8.6 13.6L4.8 10L9.5 8.6L12.3 3.3Z"
              fill="#1b3465"
              opacity="0.75"
            />
          </svg>
          <button
            type="button"
            onClick={() => setActiveTab("parents")}
            style={{ fontFamily: '"Arcane Nine", serif' }}
            className={`px-3 text-lg uppercase tracking-[0.14em] transition sm:text-2xl ${
              activeTab === "parents" ? "font-bold text-[#1b3465]" : "text-gray-500 hover:text-[#6cc7ec]"
            }`}
          >
            Parents Section
          </button>
        </nav>
    )
}
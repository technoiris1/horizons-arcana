
import { Averia_Serif_Libre } from "next/font/google";

const averiaSerif = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Footer() {
    return (
        <footer className="w-full overflow-x-hidden relative">
            <img src={"/arcana-footer.avif"} alt="" className="block w-full max-w-full h-auto" />
            <p className={`${averiaSerif.className} absolute bottom-2/6 left-0 right-0 text-center text-[#1b3465] text-sm sm:text-base md:text-lg lg:text-2xl`}>Made with ❤︎ by <a href="https://hackclub.enterprise.slack.com/team/U0807ADEC6L" target="_blank" rel="noopener noreferrer" className="hover:underline"> @Manan</a>
            </p>
        </footer>
    );
}
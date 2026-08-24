import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

export default function Home() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            {/* Persistent ambient corner glows — fixed to the viewport so they
          stay visible no matter where the page is scrolled to. */}
            <div
                className="corner-glow corner-glow-navy pointer-events-none -right-40 -top-40 z-0 h-[520px] w-[520px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />
            <div
                className="corner-glow corner-glow-orange pointer-events-none -bottom-32 -left-32 z-0 h-[480px] w-[480px]"
                style={{ position: "fixed" }}
                aria-hidden="true"
            />

           
            <main className="relative z-10">
                <HeroSection />
            </main>
        </div>
    );
}
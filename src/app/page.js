export const metadata = {
  title: "Md Sharjil Khan - Resume",
  description: "Full Stack Development Professional Resume",
};

import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Skills from '@/components/Skills';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';

export default function HomePage() {
  return (
    <main className="font-sans min-h-screen"> {/* Removed bg-nineties-bg, body background will show through */}
      <Header />
      <div className="container mx-auto w-full max-w-3xl p-4 md:p-6"> {/* Added w-full for explicit full width on small screens */}
        <Summary />
        <Skills />
        <ExperienceSection />
        <EducationSection />
      </div>
      <footer className="text-center py-4 border-t-2 border-vivid-cyan/50 bg-space-bg/80 text-nineties-bg-alt/70 mt-8 font-dot"> {/* Applied font-dot */}
        <p className="text-xs md:text-sm">&copy; {new Date().getFullYear()} Md Sharjil khan. All rights reserved.</p> {/* Adjusted size */}
        <p className="text-xs md:text-sm mt-1"> {/* Adjusted size */}
          Powered by Next.js | Styled with 90s Nostalgia & Cyberpunk
        </p>
      </footer>
    </main>
  );
}

import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Publications } from "./components/publications/publications";
import { Stack } from "./components/stack/stack";

export default function Home() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <Header />
        <div className="landing-fold relative -mt-[var(--site-header-height)] min-h-svh">
          <Hero />
        </div>
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Stack />
      </main>
      <Footer />
    </>
  );
}

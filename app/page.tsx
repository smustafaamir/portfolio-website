import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Publications } from "./components/publications/publications";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="landing-fold flex min-h-svh flex-col">
        <Header />
        <Hero />
      </div>
      <Education />
      <Experience />
      <Projects />
      <Publications />
    </main>
  );
}

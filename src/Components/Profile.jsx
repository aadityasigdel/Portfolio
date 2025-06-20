import Header from "./Header";
import CareerObjective from "./CareerObjective";
import Education from "./Education";
import Certificates from "./Certificates";
import Refrences from "./Refrence";
import Skils from "./Skill";
import Projects from "./projects";
import TopNav from "./Navigation";

export default function Profile() {
  return (
    <>
      <TopNav />

    
      <main className="pt-20 px-6 max-w-5xl mx-auto space-y-16 scroll-smooth">
        <section
          id="about"
          className="space-y-8 p-6 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <Header />
          <CareerObjective />
          <Education />
        </section>

        <section
          id="skills-projects"
          className="space-y-8 p-6 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <Skils />
          <Projects />
        </section>

        <section
          id="certificates-references"
          className="space-y-8 p-6 bg-white rounded-lg shadow-md border border-gray-200"
        >
          <Certificates />
          <Refrences />
        </section>
      </main>
    </>
  );
}

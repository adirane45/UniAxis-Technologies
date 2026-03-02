import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Internship from '@/components/Internship';
import About from '@/components/About';
import Contact from '@/components/Contact';

const sectionComponents = [Hero, Services, Projects, Internship, About, Contact];

export default function LandingPage() {
  return (
    <>
      {sectionComponents.map((Section, index) => (
        <Section key={index} />
      ))}
    </>
  );
}

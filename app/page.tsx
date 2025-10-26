// FILE: app/page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MetricBar from '@/components/MetricBar';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectCards from '@/components/ProjectCards';
import SkillsGrid from '@/components/SkillsGrid';
import WritingList from '@/components/WritingList';
import AskMeTeaser from '@/components/AskMeTeaser';
import Footer from '@/components/Footer';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />

      <Hero />

      <MetricBar />

      <Section id="about" title="About">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            I combine commercial sales execution with a GTM engineer mindset.
            Currently at <span className="text-text font-medium">dbt Labs</span>,
            I help analytics and data teams transform their workflows with cloud-native data transformation.
            I&apos;ve consistently hit 100%+ quota across three consecutive roles by shipping automation,
            building technical POCs, and converting open-source users to commercial deployments.
          </p>
          <p className="text-lg md:text-xl text-muted leading-relaxed mt-6">
            Outside work, I&apos;m building <span className="text-accent font-medium">PitPal</span> —
            an AI assistant for elevator technicians that optimizes field service operations.
          </p>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section id="projects" title="Projects">
        <ProjectCards />
      </Section>

      <Section id="skills" title="Skills & Expertise">
        <SkillsGrid />
      </Section>

      <Section id="writing" title="Writing">
        <WritingList />
      </Section>

      <Section id="contact" title="Get in Touch">
        <AskMeTeaser />
      </Section>

      <Footer />
    </main>
  );
}

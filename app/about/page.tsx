import { getTeamMembers } from "@/lib/sanity";
import AboutContent from "@/components/AboutContent";
import Container from "@/components/ui/Container";

// Revalidar a página a cada 60 segundos
export const revalidate = 60;

export const metadata = {
  title: "Sobre Nós | Team Staircase",
  description: "Conheça o Team Staircase, um estúdio de desenvolvimento de jogos dedicado a criar experiências únicas e memoráveis no universo digital através do projeto Mandora.",
};

export default async function AboutPage() {
  const teamMembers = await getTeamMembers();

  return (
    <section className="py-20">
      <Container>
        <AboutContent teamMembers={teamMembers} />
      </Container>
    </section>
  );
}

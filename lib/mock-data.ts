import { Game, TeamMember } from "@/types";

export const mockGames: Game[] = [
  {
    id: 1,
    title: "Project Mandora",
    slug: "project-mandora",
    shortDescription: "Uma aventura épica em um mundo digital repleto de mistérios e desafios. Explore dimensões desconhecidas e descubra os segredos do universo Mandora.",
    coverImage: "/api/placeholder/800/600",
    screenshots: [
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
    ],
    releaseDate: "2024-12-15",
    links: {
      steam: "https://store.steampowered.com/app/example",
      itch: "https://teamstaircase.itch.io/project-mandora",
    },
  },
  {
    id: 2,
    title: "Staircase Chronicles",
    slug: "staircase-chronicles",
    shortDescription: "Um puzzle plataforma único onde cada degrau conta uma história. Desafie sua mente e descubra os caminhos ocultos entre dimensões.",
    coverImage: "/api/placeholder/800/600",
    screenshots: [
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
    ],
    releaseDate: "2024-10-20",
    links: {
      steam: "https://store.steampowered.com/app/example2",
      itch: "https://teamstaircase.itch.io/staircase-chronicles",
    },
  },
  {
    id: 3,
    title: "Digital Realms",
    slug: "digital-realms",
    shortDescription: "Estratégia em tempo real em um mundo cyberpunk. Construa seu império digital e domine os reinos virtuais.",
    coverImage: "/api/placeholder/800/600",
    screenshots: [
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
    ],
    releaseDate: "2025-03-10",
    links: {
      steam: "https://store.steampowered.com/app/example3",
    },
  },
  {
    id: 4,
    title: "Neon Quest",
    slug: "neon-quest",
    shortDescription: "Ação e aventura em alta velocidade através de uma cidade neon. Corra, pule e lute em busca da verdade.",
    coverImage: "/api/placeholder/800/600",
    screenshots: [
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
    ],
    releaseDate: "2025-06-25",
    links: {
      itch: "https://teamstaircase.itch.io/neon-quest",
    },
  },
  {
    id: 5,
    title: "Echoes of the Void",
    slug: "echoes-of-the-void",
    shortDescription: "Um RPG atmosférico onde suas escolhas moldam o destino. Explore um mundo sombrio e descubra os ecos do passado.",
    coverImage: "/api/placeholder/800/600",
    screenshots: [
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
      "/api/placeholder/1920/1080",
    ],
    releaseDate: "2025-09-15",
    links: {
      steam: "https://store.steampowered.com/app/example5",
      itch: "https://teamstaircase.itch.io/echoes-of-the-void",
    },
  },
];

export const mockTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Chen",
    slug: "alex-chen",
    role: "Game Designer",
    photo: "/api/placeholder/400/400",
    socialLink: "https://twitter.com/alexchen",
  },
  {
    id: 2,
    name: "Sarah Martinez",
    slug: "sarah-martinez",
    role: "Lead Developer",
    photo: "/api/placeholder/400/400",
    socialLink: "https://github.com/sarahmartinez",
  },
  {
    id: 3,
    name: "Jordan Kim",
    slug: "jordan-kim",
    role: "Art Director",
    photo: "/api/placeholder/400/400",
    socialLink: "https://artstation.com/jordankim",
  },
  {
    id: 4,
    name: "Morgan Lee",
    slug: "morgan-lee",
    role: "Sound Designer",
    photo: "/api/placeholder/400/400",
    socialLink: "https://soundcloud.com/morganlee",
  },
  {
    id: 5,
    name: "Riley Taylor",
    slug: "riley-taylor",
    role: "Narrative Designer",
    photo: "/api/placeholder/400/400",
    socialLink: "https://twitter.com/rileytaylor",
  },
  {
    id: 6,
    name: "Casey Wong",
    slug: "casey-wong",
    role: "UI/UX Designer",
    photo: "/api/placeholder/400/400",
    socialLink: "https://dribbble.com/caseywong",
  },
];

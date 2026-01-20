import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'member',
  title: 'Team Member',
  type: 'document',
  icon: () => '👤',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Nome completo do membro da equipe',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Cargo/função na equipe (ex: Lead Artist, Gameplay Programmer)',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      description: 'Foto do membro da equipe (recomendado: 400x400px, formato quadrado)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Texto alternativo para acessibilidade',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'object',
      description: 'Links para perfis sociais do membro',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
          description: 'URL do perfil no LinkedIn',
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
          description: 'URL do perfil no GitHub',
        },
        {
          name: 'artstation',
          title: 'ArtStation',
          type: 'url',
          description: 'URL do perfil no ArtStation',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar',
    },
  },
  orderings: [
    {
      title: 'Name, A-Z',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
    {
      title: 'Role, A-Z',
      name: 'roleAsc',
      by: [{ field: 'role', direction: 'asc' }],
    },
  ],
})

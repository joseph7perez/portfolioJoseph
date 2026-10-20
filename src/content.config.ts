import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const bilingual = z.object({ es: z.string(), en: z.string() });

const projects = defineCollection({
  loader: file('src/data/projects.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    featured: z.boolean().default(false),
    // false = no aparece en "Más proyectos" del inicio; sigue en /projects y con su página de detalle
    showOnHome: z.boolean().default(true),
    description: bilingual,
    link: z.string().default(''),
    github: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    image: z.string(),
    images: z.array(z.string()),
    imagesMobile: z.array(z.string()),
    tags: z.array(z.string()),
    slug: z.string(),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    empresa: z.string(),
    lugar: z.string(),
    projectSlug: z.string().optional(),
    roles: z.array(z.object({
      cargo: bilingual,
      date: bilingual,
      current: z.boolean().default(false),
      stack: z.array(z.string()).default([]),
      bullets: z.object({ es: z.array(z.string()), en: z.array(z.string()) }),
    })),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.json'),
  schema: z.object({
    id: z.string(),
    type: z.enum(['formal', 'certificate', 'language']),
    order: z.number(),
    institucion: z.string(),
    date: bilingual,
    titulo: bilingual,
    archivo: z.string().default(''),
  }),
});

export const collections = { projects, experience, education };
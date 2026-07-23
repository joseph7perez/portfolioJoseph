export const ui = {
  es: {
    'meta.title': 'Portafolio Joseph Pérez - Desarrollador y Programador Web',
    'meta.description': 'Especializado en el desarrollo frontend y en la creación de sitios web',
    'nav.home': 'Inicio', 
    'nav.about': 'Sobre mí', 
    'nav.experience': 'Experiencia',
    'nav.projects': 'Proyectos', 
    'nav.education': 'Educación', 
    'nav.skills': 'Skills',
    'header.photoAlt': 'Foto de perfil',
    'footer.rights': 'Todos los derechos reservados.',
    'hero.greeting': 'Hola, soy Joseph Pérez',
    'hero.badge': 'Disponible para trabajar',
    'hero.subtitle': 'Ingeniero de Sistemas y Desarrollador Full Stack especializado en FrontEnd con +1 año de experiencia. Ubicado en Bogotá, Colombia.',
    'hero.cta': 'Ver más',
    'section.about': 'Sobre mí',
    'section.experience': 'Experiencia laboral',
    'section.projects': 'Proyectos',
    'section.education': 'Educación y Certificados',
    'section.skills': 'Herramientas y tecnologías',
    'cv.href': '/certificados/Joseph-Nicolas-Perez-Sarmiento-CV-Espanol.pdf',
    'cv.filename': 'Joseph-Nicolas-Perez-Sarmiento-CV-Español.pdf',
    'projects.screenshotAlt': 'Captura de pantalla',
    'project.viewRepo': 'Ver',
    'project.viewLive': 'Ver en Web',
    'repo.repositorio': 'repositorio',
    'repo.frontend': 'frontend',
    'repo.backend': 'backend',
    'about.alt': 'Foto de Joseph',
    'about.p1': 'Soy <span class="font-bold text-white">Joseph</span>, Ingeniero de Sistemas, desarrollador web full stack y emprendedor. Cuento con experiencia en el diseño y la implementación de <span class="font-bold text-white">sitios web modernos.</span> Me apasiona crear experiencias digitales accesibles, eficientes y visualmente atractivas.',
    'about.p2': 'Me caracterizo por ser proactivo, estar comprometido con la calidad del código y mantenerme en constante aprendizaje.',
    'about.p3': 'Actualmente me encuentro estudiando inglés para mejorar mis habilidades de comunicación. Considero que el dominio del idioma es clave en el mundo del desarrollo de software.',
    'about.p4': 'Fuera del mundo tecnológico, tengo junto con mi hermano una empresa de venta en línea de perfumería.',
    'education.certificates': 'Certificados', 
    'education.languages': 'Idiomas', 
    'education.download': 'Descargar',
    'project.back': 'Volver'
  },
  en: {
    'meta.title': 'Joseph Pérez Portfolio - Web Developer & Programmer',
    'meta.description': 'Specialized in frontend development and building websites',
    'nav.home': 'Home', 'nav.about': 'About', 'nav.experience': 'Experience',
    'nav.projects': 'Projects', 
    'nav.education': 'Education', 
    'nav.skills': 'Skills',
    'header.photoAlt': 'Profile photo',
    'footer.rights': 'All rights reserved.',
    'hero.greeting': "Hi, I'm Joseph Pérez",
    'hero.badge': 'Available for work',
    'hero.subtitle': 'Systems Engineer and Full Stack Developer specialized in Frontend with 1+ year of experience. Based in Bogotá, Colombia.',
    'hero.cta': 'See more',
    'section.about': 'About me',
    'section.experience': 'Work experience',
    'section.projects': 'Projects',
    'section.education': 'Education & Certificates',
    'section.skills': 'Tools & technologies',
    'cv.href': '/certificados/Joseph-Nicolas-Perez-Sarmiento-CV-English.pdf',
    'cv.filename': 'Joseph-Nicolas-Perez-Sarmiento-CV-English.pdf',
    'projects.screenshotAlt': 'Screenshot of',
    'project.viewRepo': 'View',
    'project.viewLive': 'View live site',
    'repo.repositorio': 'repository',
    'repo.frontend': 'frontend',
    'repo.backend': 'backend',
    'about.alt': 'Photo of Joseph',
    'about.p1': "I'm <span class=\"font-bold text-white\">Joseph</span>, a Systems Engineer, full stack web developer and entrepreneur. I have experience designing and building <span class=\"font-bold text-white\">modern websites.</span> I'm passionate about creating digital experiences that are accessible, efficient and visually appealing.",
    'about.p2': "I'm proactive, committed to code quality, and always learning something new.",
    'about.p3': "I'm currently studying English to improve my communication skills. I believe language proficiency is key in the software development world.",
    'about.p4': 'Outside of tech, my brother and I run an online perfume retail business.',
    'education.certificates': 'Certificates', 
    'education.languages': 'Languages', 
    'education.download': 'Download',
    'project.back': 'Back'
  },
  
} as const;


const defaultLang = 'es';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, seg] = url.pathname.split('/');
  return (seg in ui ? seg : defaultLang) as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return (key: keyof (typeof ui)['es']) => ui[lang][key] ?? ui[defaultLang][key];
}
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: typeof content;
}

const content = {
  es: {
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    home: {
      title: 'Clara Cooper',
      role: 'Líder de Proyectos IT | Scrum Master | PMP | Project Manager',
      description: 'Líder de Proyectos IT con más de siete años de experiencia en gestión de proyectos, transformación digital y liderazgo ágil. Actualmente me desempeño como Gestora de Proyecto en OpenDev Pro, donde coordino equipos multidisciplinarios y gestiono iniciativas estratégicas de alto impacto.',
      viewExperience: 'Ver Experiencia',
      contactMe: 'Contáctame',
    },
    experience: {
      title: 'Experiencia Profesional',
      positions: [
        {
          title: 'Gestora de proyecto y responsable de Scrum',
          company: 'OpenDev Pro',
          period: 'noviembre de 2022 - Present (2 años 7 meses)',
          location: 'Argentina',
          description: [
            'Lideré el desarrollo y escalado de FlexiPaaS, una plataforma de integraciones que logró más de 100 integraciones activas en su primer año.',
            'Coordiné equipos de hasta 20 personas, aplicando metodologías ágiles.',
            'Garanticé el cumplimiento de alcance, plazos y calidad.',
            'Implementé herramientas y procesos para optimizar la gestión de proyectos.'
          ],
        },
        {
          title: 'Scrum Master',
          company: 'Kinetic SA',
          period: 'junio de 2022 - diciembre de 2022 (7 meses)',
          description: [
            'Facilité la transformación ágil de los proyectos de marketing.',
            'Reduje los plazos de ejecución de 1 año a solo 1 mes mediante automatización y cultura colaborativa.',
            'Promoví el uso de Scrum y Kanban en equipos multidisciplinarios.',
            'Logré mayor alineación con objetivos estratégicos y mejora en productividad.'
          ],
        },
        {
          title: 'Coordinadora general',
          company: 'Inwash',
          period: 'marzo de 2018 - julio de 2022 (4 años 5 meses)',
          description: [
            'Dirigí la compañía garantizando rentabilidad y crecimiento sostenido.',
            'Implementé certificación ISO 9001.',
            'Instalé el primer punto digital de lavado y reduje un 20% los costos operativos anuales.',
            'Impulsé procesos de innovación y digitalización que aumentaron la eficiencia operativa.'
          ],
        },
        {
          title: 'Director de la oficina de administración de programas',
          company: 'Inwash',
          period: '2016 - mayo de 2018 (2 años)',
          description: [
            'Lideré la oficina de proyectos, estandarizando metodologías.',
            'Gestioné un portafolio de 5 proyectos simultáneos.',
            'Implementé métricas de desempeño (KPIs) y metodologías ágiles.',
            'Introduje OKRs como modelo de evaluación.'
          ],
        },
        {
          title: 'Responsable de administración',
          company: 'Inwash',
          period: '2010 - 2016 (6 años)',
          location: 'Córdoba y alrededores, Argentina',
          description: [
            'Supervisé la planificación financiera y control presupuestario.',
            'Diseñé estrategias de optimización de costos y reportes.',
            'Logré estabilizar los indicadores financieros.',
            'Aseguré la sustentabilidad del negocio durante más de 7 años.'
          ],
        }
      ],
    },
    skills: {
      title: 'Habilidades y Aptitudes',
      categories: {
        projectManagement: {
          title: 'Gestión de Proyectos',
          skills: [
            'PMP® Certification',
            'Scrum Manager',
            'Product Manager',
            'Gestión de Equipos',
            'Transformación Digital'
          ],
        },
        technical: {
          title: 'Técnicas',
          skills: [
            'Inteligencia artificial',
            'Integración de software',
            'Kanban',
            'Jira',
            'Google Sheets',
            'ChatGPT'
          ],
        },
        languages: {
          title: 'Idiomas',
          skills: [
            'Inglés (Professional Working)',
            'Español (Native or Bilingual)'
          ],
        },
      },
    },
    education: {
      title: 'Educación',
      degrees: [
        {
          institution: 'Universidad Nacional de Córdoba',
          degree: 'Ingeniería Civil',
          period: '2009 - 2013'
        },
        {
          institution: 'Mundos E',
          degree: 'Metodologías ágiles, Empresa, gestión, marketing y disciplinas afines',
          period: 'junio de 2022 - noviembre de 2022'
        },
        {
          institution: 'Centro de e-Learning UTN FRBA',
          degree: 'Diplomatura en Business Intelligence',
          period: 'octubre de 2024 - enero de 2025'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      phone: '(0351) 156111329',
      email: 'clara.ccooper@gmail.com',
      linkedin: 'linkedin.com/in/claracooperpmp',
      location: 'Argentina'
    }
  },
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      contact: 'Contact',
    },
    home: {
      title: 'Clara Cooper',
      role: 'IT Project Manager',
      description: 'IT Project Management leader with over 10 years of experience in the banking sector. Specialized in digital transformation and agile methodologies. PMP® and Scrum Master certified, with a proven track record of successfully delivering complex technology projects in multicultural environments.',
      viewExperience: 'View Experience',
      contactMe: 'Contact Me',
    },
    experience: {
      title: 'Professional Experience',
      positions: [
        {
          title: 'IT Project Manager',
          company: 'Banco Santander',
          period: '2019 - Present',
          description: [
            'Leading digital transformation projects in retail and corporate banking',
            'Managing multicultural teams (Spain, Brazil, UK)',
            'Implementing fintech solutions and optimizing banking processes',
            'Managing project portfolio with budget exceeding €5M',
          ],
        },
        {
          title: 'Project Manager',
          company: 'BBVA',
          period: '2015 - 2019',
          description: [
            'Leading digital banking innovation projects',
            'Managing international team of 25+ professionals',
            'Implementing agile methodologies and DevOps',
            'Reducing time-to-market by 45% in digital projects',
          ],
        },
        {
          title: 'IT Project Coordinator',
          company: 'Accenture',
          period: '2012 - 2015',
          description: [
            'Coordinating core banking implementation projects',
            'Managing international stakeholders and technical teams',
            'Optimizing processes and management methodologies',
            'Participating in 10+ banking transformation projects',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      categories: {
        projectManagement: {
          title: 'Project Management',
          skills: [
            'Agile Methodologies (Scrum, Kanban)',
            'PMP® Certification',
            'Risk Management',
            'Budgeting',
            'MS Project / Jira',
          ],
        },
        technical: {
          title: 'Technical',
          skills: [
            'Software Architecture',
            'Cloud Computing (AWS, Azure)',
            'DevOps',
            'APIs & Microservices',
            'Cybersecurity',
          ],
        },
        soft: {
          title: 'Soft Skills',
          skills: [
            'Team Leadership',
            'Effective Communication',
            'Negotiation',
            'Conflict Resolution',
            'Change Management',
          ],
        },
      },
    },
    contact: {
      title: 'Contact',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },
      connect: 'Connect with me',
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
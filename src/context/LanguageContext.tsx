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
      role: 'IT Project Leader | Scrum Master | PMP | Project Manager',
      description: 'IT Project Leader with over seven years of experience in project management, digital transformation, and agile leadership. Currently working as Project Manager at OpenDev Pro, where I coordinate multidisciplinary teams and manage high-impact strategic initiatives.',
      viewExperience: 'View Experience',
      contactMe: 'Contact Me',
    },
    experience: {
      title: 'Professional Experience',
      positions: [
        {
          title: 'Project Manager & Scrum Lead',
          company: 'OpenDev Pro',
          period: 'November 2022 - Present (2 years 7 months)',
          location: 'Argentina',
          description: [
            'Led the development and scaling of FlexiPaaS, an integration platform that achieved over 100 active integrations in its first year.',
            'Coordinated teams of up to 20 people, applying agile methodologies.',
            'Ensured compliance with scope, deadlines, and quality standards.',
            'Implemented tools and processes to optimize project management.'
          ],
        },
        {
          title: 'Scrum Master',
          company: 'Kinetic SA',
          period: 'June 2022 - December 2022 (7 months)',
          description: [
            'Facilitated the agile transformation of marketing projects.',
            'Reduced execution timelines from 1 year to just 1 month through automation and collaborative culture.',
            'Promoted the use of Scrum and Kanban in multidisciplinary teams.',
            'Achieved greater alignment with strategic objectives and improved productivity.'
          ],
        },
        {
          title: 'General Coordinator',
          company: 'Inwash',
          period: 'March 2018 - July 2022 (4 years 5 months)',
          description: [
            'Directed the company ensuring profitability and sustained growth.',
            'Implemented ISO 9001 certification.',
            'Installed the first digital washing point and reduced annual operating costs by 20%.',
            'Drove innovation and digitalization processes that increased operational efficiency.'
          ],
        },
        {
          title: 'Program Management Office Director',
          company: 'Inwash',
          period: '2016 - May 2018 (2 years)',
          description: [
            'Led the project office, standardizing methodologies.',
            'Managed a portfolio of 5 simultaneous projects.',
            'Implemented performance metrics (KPIs) and agile methodologies.',
            'Introduced OKRs as an evaluation model.'
          ],
        },
        {
          title: 'Administration Manager',
          company: 'Inwash',
          period: '2010 - 2016 (6 years)',
          location: 'Córdoba and surroundings, Argentina',
          description: [
            'Supervised financial planning and budget control.',
            'Designed cost optimization strategies and reports.',
            'Achieved stabilization of financial indicators.',
            'Ensured business sustainability for over 7 years.'
          ],
        }
      ],
    },
    skills: {
      title: 'Skills & Competencies',
      categories: {
        projectManagement: {
          title: 'Project Management',
          skills: [
            'PMP® Certification',
            'Scrum Manager',
            'Product Manager',
            'Team Management',
            'Digital Transformation'
          ],
        },
        technical: {
          title: 'Technical',
          skills: [
            'Artificial Intelligence',
            'Software Integration',
            'Kanban',
            'Jira',
            'Google Sheets',
            'ChatGPT'
          ],
        },
        languages: {
          title: 'Languages',
          skills: [
            'English (Professional Working)',
            'Spanish (Native or Bilingual)'
          ],
        },
      },
    },
    education: {
      title: 'Education',
      degrees: [
        {
          institution: 'Universidad Nacional de Córdoba',
          degree: 'Civil Engineering',
          period: '2009 - 2013'
        },
        {
          institution: 'Mundos E',
          degree: 'Agile Methodologies, Business, Management, Marketing and Related',
          period: 'June 2022 - November 2022'
        },
        {
          institution: 'Centro de e-Learning UTN FRBA',
          degree: 'Business Intelligence Diploma',
          period: 'October 2024 - January 2025'
        }
      ]
    },
    contact: {
      title: 'Contact',
      email: 'clara.ccooper@gmail.com',
      linkedin: 'linkedin.com/in/claracooperpmp',
      location: 'Argentina'
    }
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
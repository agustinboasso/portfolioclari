import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// Iconos de habilidades (puedes reemplazarlos con los que prefieras)
const skills = {
  projectManagement: [
    'PMP® Certification',
    'Agile & Scrum',
    'Risk Management',
    'Stakeholder Management',
    'Project Planning',
    'Budget Management',
  ],
  technical: [
    'JIRA',
    'Confluence',
    'Microsoft Project',
    'Trello',
    'Microsoft Office Suite',
    'Asana',
  ],
  soft: [
    'Leadership',
    'Communication',
    'Problem Solving',
    'Team Building',
    'Negotiation',
    'Strategic Thinking',
  ],
};

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        backgroundColor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
          borderColor: 'primary.main',
        },
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        sx={{
          mb: 3,
          fontWeight: 600,
          color: 'primary.main',
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '40px',
            height: '2px',
            backgroundColor: 'primary.main',
            transition: 'width 0.3s ease-in-out',
          },
          '&:hover::after': {
            width: '80px',
          },
        }}
      >
        {title}
      </Typography>
      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {skills.map((skill, index) => (
          <Box
            key={index}
            component="li"
            sx={{
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              '&:last-child': {
                mb: 0,
              },
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateX(8px)',
              },
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                mr: 2,
                opacity: 0.7,
                transition: 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out',
                'li:hover &': {
                  transform: 'scale(1.5)',
                  opacity: 1,
                },
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: 'text.primary',
                fontSize: '0.95rem',
                transition: 'color 0.2s ease-in-out',
                'li:hover &': {
                  color: 'primary.main',
                },
              }}
            >
              {skill}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  </motion.div>
);

const Skills = () => {
  const { translations, language } = useLanguage();
  const { title, categories } = translations[language].skills;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 8,
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
      </motion.div>

      <Grid 
        container 
        spacing={4} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}
      >
        <Grid item xs={12} md={4}>
          <SkillCard
            title={categories.projectManagement.title}
            skills={categories.projectManagement.skills}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillCard
            title={categories.technical.title}
            skills={categories.technical.skills}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SkillCard
            title={categories.languages.title}
            skills={categories.languages.skills}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Skills; 
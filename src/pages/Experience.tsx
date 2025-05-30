import { Container, Typography, Box } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { translations, language } = useLanguage();
  const content = translations[language].experience;

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
          {content.title}
        </Typography>
      </motion.div>

      <Timeline position="alternate">
        {content.positions.map((position, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot
                sx={{
                  bgcolor: 'primary.main',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    boxShadow: '0 0 12px rgba(0,0,0,0.2)',
                  },
                }}
              />
              <TimelineConnector 
                sx={{ 
                  bgcolor: 'primary.light',
                  transition: 'background-color 0.3s ease-in-out',
                  '.MuiTimelineItem-root:hover &': {
                    bgcolor: 'primary.main',
                  },
                }} 
              />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    border: '1px solid',
                    borderColor: 'divider',
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
                      fontWeight: 600,
                      color: 'primary.main',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: 'primary.dark',
                      },
                    }}
                  >
                    {position.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontSize: '1.1rem',
                      color: 'text.primary',
                      mb: 1,
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {position.company}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: 'text.secondary',
                      mb: 2,
                      fontSize: '0.95rem',
                    }}
                  >
                    {position.period}
                    {position.location && (
                      <Typography
                        component="span"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                          display: 'block',
                          mt: 0.5,
                          opacity: 0.8,
                          transition: 'opacity 0.3s ease-in-out',
                          '&:hover': {
                            opacity: 1,
                          },
                        }}
                      >
                        {position.location}
                      </Typography>
                    )}
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 2 }}>
                    {position.description.map((desc, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.95rem',
                          mb: 1,
                          transition: 'all 0.2s ease-in-out',
                          '&:last-child': {
                            mb: 0,
                          },
                          '&:hover': {
                            color: 'text.primary',
                            transform: 'translateX(8px)',
                          },
                        }}
                      >
                        {desc}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default Experience; 
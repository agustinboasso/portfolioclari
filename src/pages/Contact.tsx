import { Container, Typography, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const { translations, language } = useLanguage();
  const content = translations[language].contact;

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

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 3,
        maxWidth: 600,
        mx: 'auto'
      }}>
        <Link
          href={`mailto:${content.email}`}
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: 'text.primary',
            fontSize: '1.1rem',
            '&:hover': {
              color: 'primary.main',
            }
          }}
        >
          <EmailIcon sx={{ fontSize: 28 }} />
          {content.email}
        </Link>

        <Link
          href={`https://www.${content.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            color: 'text.primary',
            fontSize: '1.1rem',
            '&:hover': {
              color: 'primary.main',
            }
          }}
        >
          <LinkedInIcon sx={{ fontSize: 28 }} />
          {content.linkedin}
        </Link>

        <Typography
          variant="body1"
          sx={{
            mt: 4,
            color: 'text.secondary',
            textAlign: 'center',
          }}
        >
          {content.location}
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact; 
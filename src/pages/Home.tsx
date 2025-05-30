import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import bannerImage from '../assets/banner.jpg';

const Home = () => {
  const { translations, language } = useLanguage();
  const content = translations[language].home;

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '45vh',
          minHeight: '400px',
          overflow: 'hidden',
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F7F3F0',
        }}
      >
        <Box
          component="img"
          src={bannerImage}
          alt="Clara Cooper Banner"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.95,
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            py: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  mb: 4,
                  color: '#666',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '800px'
                }}
              >
                {content.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button
                  variant="contained"
                  component={Link}
                  to="/experience"
                  size="large"
                  sx={{
                    bgcolor: '#8B7355',
                    color: 'white',
                    boxShadow: 'none',
                    px: 4,
                    '&:hover': {
                      bgcolor: '#A47148',
                      boxShadow: '0 4px 12px rgba(139, 115, 85, 0.2)',
                    }
                  }}
                >
                  {content.viewExperience}
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to="/contact"
                  size="large"
                  sx={{
                    borderColor: '#8B7355',
                    color: '#8B7355',
                    borderWidth: '1.5px',
                    px: 4,
                    '&:hover': {
                      borderColor: '#A47148',
                      color: '#A47148',
                      borderWidth: '1.5px',
                      bgcolor: 'rgba(139, 115, 85, 0.05)',
                    }
                  }}
                >
                  {content.contactMe}
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  margin: '0 auto',
                  '&::before': {
                    content: '""',
                    display: 'block',
                    paddingTop: '100%',
                  },
                }}
              >
                <Box
                  component="img"
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEvQd6VsEI4Yw/profile-displayphoto-shrink_400_400/B4DZQuqYd5HYAk-/0/1735949651046?e=1753920000&v=beta&t=9_04M1NgMbDV21-mYv8VHXAC3tcv_PegOTrSFwwAdPU"
                  alt="Clara Cooper"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: '0 20px 40px rgba(139, 115, 85, 0.15)',
                  }}
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 
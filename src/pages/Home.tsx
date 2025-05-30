import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import bannerImage from '../assets/banner.jpg';

const Home = () => {
  const { translations, language } = useLanguage();
  const content = translations[language].home;

  return (
    <Box sx={{ 
      overflow: 'hidden',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '45vh',
          overflow: 'hidden',
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

      <Container 
        maxWidth="lg" 
        sx={{ 
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          py: 4
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: 'center',
          }}
        >
          <Grid
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: '#666',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  maxWidth: '800px',
                  mb: { xs: 3, md: 4 }
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
          <Grid
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: { xs: '300px', md: '400px' },
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
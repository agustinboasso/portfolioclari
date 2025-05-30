import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B7355', // Marrón cálido
      light: '#A69076',
      dark: '#6F5B44',
    },
    secondary: {
      main: '#D2C4B5', // Beige claro
      light: '#E5DCD3',
      dark: '#BFB0A0',
    },
    background: {
      default: '#FAF7F5', // Blanco cálido
      paper: '#FFFFFF',
    },
    text: {
      primary: '#3C3C3C', // Gris oscuro
      secondary: '#666666', // Gris medio
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      letterSpacing: '-0.5px',
    },
    h4: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 500,
      letterSpacing: '-0.5px',
    },
    body1: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.2px',
    },
    button: {
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 30px',
          textTransform: 'none',
          fontSize: '0.95rem',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        },
      },
    },
  },
});

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;

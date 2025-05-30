import { IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import TranslateIcon from '@mui/icons-material/Translate';

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { language, setLanguage } = useLanguage();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang: 'es' | 'en') => {
    setLanguage(lang);
    handleClose();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        color="inherit"
        sx={{
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.12)',
          borderRadius: 1,
          padding: '4px 8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
        }}
      >
        <TranslateIcon sx={{ fontSize: 20, mr: 0.5 }} />
        <Typography variant="button" sx={{ fontSize: '0.875rem', textTransform: 'uppercase' }}>
          {language}
        </Typography>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => handleLanguageSelect('es')} selected={language === 'es'}>
          Español
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect('en')} selected={language === 'en'}>
          English
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector; 
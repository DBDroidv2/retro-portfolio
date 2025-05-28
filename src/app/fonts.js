import localFont from 'next/font/local';

export const myNameFont = localFont({
  src: '/fonts/my-name.otf', // Corrected to absolute path
  display: 'swap',
  variable: '--font-my-name',
});

export const contentFont = localFont({
  src: '/fonts/dot-font.ttf', // Corrected to absolute path and filename
  display: 'swap',
  variable: '--font-dot',
});

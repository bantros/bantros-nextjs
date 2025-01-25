import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bantros',
  description: 'Creative front end developer from Manchester'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='apple-mobile-web-app-title' content='Bantros' />
      </head>
      <body className='font-system text-base text-white bg-black antialiased'>
        <div className='app'>
          <header className='p-8 md:p-16'>
            <h1 className='text-base md:text-xl font-bold text-white mb-2'>
              Jonathon Halliwell
            </h1>
            <p className='text-xl md:text-2xl text-white/60 max-w-2xl mb-0'>
              Creative front end developer from Manchester, currently employed
              at{' '}
              <a
                className='text-white/40'
                href='https://www.ctidigital.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                CTI Digital
              </a>
              . Previously over at{' '}
              <a
                className='text-white/40'
                href='https://weareraw.co.uk'
                target='_blank'
                rel='noopener noreferrer'
              >
                Raw Design Studio
              </a>
              .
            </p>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

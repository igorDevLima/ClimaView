import { Metadata } from 'next';

import Header from '../components/header';

//add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';

import './globals.css';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Climaview',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </html>
  );
}

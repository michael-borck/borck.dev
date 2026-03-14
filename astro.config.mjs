import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://borck.dev',
  integrations: [
    starlight({
      title: 'borck.dev',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/logo.svg',
        replacesTitle: true,
      },
      description: 'Michael Borck — Builder, educator, researcher',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/michael-borck' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/michaelborck' },
        { icon: 'external', label: 'LocoLabo', href: 'https://locolabo.org' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Research', link: '/research/' },
      ],
    }),
  ],
});

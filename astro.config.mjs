import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://borck.dev',
  integrations: [
    starlight({
      title: 'borck.dev',
      favicon: '/favicon.svg',
      description: 'Michael Borck — Builder, educator, researcher',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/michael-borck' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/michaelborck' },
      ],
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about/' },
        { label: 'Research', link: '/research/' },
      ],
    }),
  ],
});

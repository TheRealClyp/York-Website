import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://therealclyp.github.io',
  base: '/York-Website',
  integrations: [
    starlight({
      title: 'York Programming Language',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TheRealClyp/York' }],
      sidebar: [
        { label: 'Getting Started', items: [{ label: 'Overview', slug: 'index' }, { label: 'Installation', slug: 'guides/installation' }, { label: 'Quick Start', slug: 'guides/quickstart' }] },
        { label: 'Language Reference', items: [{ label: 'Syntax & Semantics', slug: 'reference/syntax' }, { label: 'Memory & Arenas', slug: 'reference/arenas' }, { label: 'Standard Library', slug: 'reference/stdlib' }] },
        { label: 'Desktop & Systems', items: [{ label: 'Native Win32 GUI', slug: 'desktop/gui' }, { label: 'TCP Networking', slug: 'desktop/networking' }, { label: 'System Commands', slug: 'desktop/commands' }] },
      ],
    }),
  ],
});

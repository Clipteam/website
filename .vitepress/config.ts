import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ClipCC",
  description: "Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/doc/getting-started' },
      { text: 'Our Team', link: '/team' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is ClipCC', link: '/doc/intro' },
          { text: 'Install', link: '/doc/install' },
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Custom FPS', link: '/doc/features/fps' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Clipteam/clipcc' },
      { icon: 'discord', link: 'https://discord.gg/uuyHNBH' }
    ],

    footer: {
      message: 'Powered by VitePress.',
      copyright: 'Copyright © 2017-present Clipteam.'
    }
  }
})

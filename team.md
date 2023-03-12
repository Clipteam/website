---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/alexcui03.png',
    name: 'Alex Cui',
    title: 'Co-Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/alexcui03' }
    ]
  },
  {
    avatar: 'https://www.github.com/SimonShiki.png',
    name: 'Simon Shiki',
    title: 'Co-Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/SimonShiki' }
    ]
  },
  {
    avatar: 'https://www.github.com/frank-782.png',
    name: 'Frank-782',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/alexcui03' }
    ]
  },
  {
    avatar: 'https://www.github.com/SparrowHe.png',
    name: 'Sparrow He',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/SparrowHe' }
    ]
  },
  {
    avatar: 'https://www.github.com/Zerlight.png',
    name: 'Zerlight',
    title: 'Designer',
    links: [
      { icon: 'github', link: 'https://github.com/Zerlight' }
    ]
  },
  {
    avatar: 'https://www.github.com/Hydrostic.png',
    name: 'Hydrostic',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/Hydrostic' }
    ]
  },
  {
    avatar: 'https://www.github.com/BleShi.png',
    name: 'Ble Shi',
    title: 'Operations Intern',
    links: [
      { icon: 'github', link: 'https://github.com/BleShi' }
    ]
  },
  {
    avatar: 'https://www.github.com/Feathrior.png',
    name: 'Feathrior',
    title: 'Designer',
    links: [
      { icon: 'github', link: 'https://github.com/Feathrior' }
    ]
  },
  {
    avatar: 'https://www.github.com/Steve-xmh.png',
    name: 'SteveXMH',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/SteveXMH' }
    ]
  },
  {
    avatar: 'https://www.github.com/Someone-Yang.png',
    name: 'Someone Young',
    title: 'Propagandist',
    links: [
      { icon: 'github', link: 'https://github.com/Someone-Yang' }
    ]
  },
  {
    avatar: 'https://www.github.com/scris.png',
    name: 'Tianze Ds',
    title: 'Developer',
    links: [
      { icon: 'github', link: 'https://github.com/scris' }
    ]
  },
  {
    avatar: 'https://www.github.com/solstice23.png',
    name: 'solstice23',
    title: 'Co-Founder & Developer',
    links: [
      { icon: 'github', link: 'https://github.com/solstice23' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      ClipCC is a project that was born out of interest and started out of interest, and the ClipCC project can only continue today with the support of some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

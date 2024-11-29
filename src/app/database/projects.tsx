import ThumbnaildiamondPainting from './../projects/images/thumbnail-diamond-painting.png';
import ThumbnailMakanan from './../projects/images/thumbnail-makanan.png';
import ThumbnailMemoryGame from './../projects/images/thumbnail-memory-game.png';
import ThumbnailImageGene from './../projects/images/thumbnail-profile-image-gene.png';
// import ThumbnailWhereCanI from './../projects/images/thumbnail-when-can-i-borrow.png';
import ThumbnailFirst from './../projects/images/thumbnail-first-contributions.png';
import ThumbnailRatingStar from './../projects/images/thumbnail-rating-star.png';
import ThumbnailComingSoon from './../projects/images/thumbnail-coming-soon.png';

export const projects = [
  {
    id: 'my-portfolio',
    title: 'Next.js Portfolio',
    url: {
      github: '',
      website: '',
    },
    imageUrl: ThumbnailComingSoon,
    overview: '準備中。',
    tags: ['next', 'ts'],
  },
  {
    id: 'library-star',
    title: 'Rating Star',
    url: {
      github: 'https://github.com/pss-aileen/library-rating-star',
      website: '',
    },
    isUnderConstruction: true,
    imageUrl: ThumbnailRatingStar,
    overview: '評価の星を0.1刻みで表示できるライブラリです。準備中。',
    tags: ['library', 'ts'],
  },
  {
    id: 'makanan-delight-kl',
    title: 'MakananDelight KL',
    url: {
      github: 'https://github.com/pss-aileen/practice-bootstrap5-food-delivery',
      website: 'https://pss-aileen.github.io/practice-bootstrap5-food-delivery/',
    },
    imageUrl: ThumbnailMakanan,
    overview: 'Bootstrapで作ったデリバリーサービスのWebページです。',
    tags: ['js', 'sass', 'bootstrap'],
  },
  {
    id: 'memory-game',
    title: 'Memory Game',
    url: {
      github: 'https://github.com/pss-aileen/practice-react-memory-game',
      website: 'https://pss-aileen.github.io/practice-react-memory-game/',
    },
    imageUrl: ThumbnailMemoryGame,
    overview: 'useState、useEffectなどの仕組みを知るために作成しました。',
    tags: ['react', 'js'],
  },
  {
    id: 'first-contributions-ja',
    title: 'First Contributions JA',
    url: {
      github: 'https://github.com/first-contributions-ja/first-contributions-ja.github.io',
      website: 'https://first-contributions-ja.github.io/',
    },
    imageUrl: ThumbnailFirst,
    overview: 'コンリビューションの練習ができるリポジトリを共同で作成しました。',
    tags: ['collabo', 'next', 'ts'],
  },
  {
    id: 'diamond-painting-mini',
    title: 'Diamond Painting Mini',
    url: {
      github: 'https://github.com/pss-aileen/project-diamond-painting-3x3',
      website: 'https://pss-aileen.github.io/project-diamond-painting-3x3/',
    },
    imageUrl: ThumbnaildiamondPainting,
    overview: 'ダイアモンドペインティングを擬似的に体験できる簡易的なWebアプリです。（趣味）',
    tags: ['js'],
  },
  {
    id: 'profile-image-generator',
    title: 'PROFILE IMAGE GENERATOR',
    url: {
      github: 'https://github.com/pss-aileen/project-profile-image-generator',
      website: 'https://pss-aileen.github.io/project-profile-image-generator/',
    },
    imageUrl: ThumbnailImageGene,
    overview: 'シンプルなプロフィール画像ジェネレーターです。',
    tags: ['js'],
  },
  // {
  //   id: 'when-can-i-borrow',
  //   title: 'この本いつ読めると？',
  //   url: {
  //     github: 'https://github.com/pss-aileen/project-when-can-i-read-the-book',
  //     website: 'https://pss-aileen.github.io/project-when-can-i-read-the-book/',
  //   },
  //   imageUrl: ThumbnailWhereCanI,
  //   overview: '図書館で本を借りる際、何日待てば受け取れるか計算するWebアプリです。',
  //   tags: ['ts'],
  // },
];

import { BiLogoJavascript } from 'react-icons/bi';
import { BiLogoTypescript } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { GoCodeOfConduct } from 'react-icons/go';
import { IoLogoSass } from 'react-icons/io';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaNpm } from 'react-icons/fa';

export const tags = [
  {
    id: 'js',
    name: 'JavaScript',
    icon: BiLogoJavascript,
    color: '#f7df1e',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: BiLogoTypescript,
    color: '#3178C6',
  },
  {
    id: 'react',
    name: 'React',
    icon: FaReact,
    color: '#00d8ff',
  },
  {
    id: 'next',
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000',
  },
  {
    id: 'collabo',
    name: 'Collaboration',
    icon: GoCodeOfConduct,
    color: '#ec4899',
  },
  {
    id: 'sass',
    name: 'Sass',
    icon: IoLogoSass,
    color: '#c69',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: BsBootstrapFill,
    color: '#563d7c',
  },
  {
    id: 'library',
    name: 'Library',
    icon: FaNpm,
    color: '#cb3837',
  },
];

// Screens

import Welcome from 'screens/Welcome';
import AudioRipple from 'screens/AudioRipple';
import NLAI from 'screens/NLAI';
import MangaApp from 'screens/MangaApp';

export default [
  {
    label: 'Welcome',
    path: '/welcome',
    component: Welcome
  },
  {
    label: 'Audio visualizer',
    path: '/audio-ripple',
    component: AudioRipple
  },
  {
    label: 'N-Language AI',
    path: '/nl-ai',
    component: NLAI
  },{
    label: 'Manga App',
    path: '/mango-manga',
    component: MangaApp
  }
];

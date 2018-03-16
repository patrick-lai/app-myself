// Screens

import Welcome from "screens/Welcome";
import AudioRipple from "screens/AudioRipple";
import NLAI from "screens/NLAI";
import MangaApp from "screens/MangaApp";
import IphoneFarmer from "screens/IphoneFarmer";
import AtoSalary from "screens/AtoSalary";

export default [
  {
    label: "Welcome",
    path: "/welcome",
    component: Welcome
  },
  {
    label: "Audio visualizer",
    path: "/audio-ripple",
    component: AudioRipple
  },
  {
    label: "Manga App",
    path: "/mango-manga",
    component: MangaApp
  },
  {
    label: "iPhone Farmer",
    path: "/iphone-farmer",
    component: IphoneFarmer
  },
  {
    label: "N-Language AI",
    path: "/nl-ai",
    component: NLAI
  }
  // {
  //   label: "ATO salary",
  //   path: "/ato-salary",
  //   component: AtoSalary
  // }
];

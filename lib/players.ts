export type Feature = {
  name: string;
  support: (0 | 1)[];
};

// support order: [Ableplayer, AcornPlayer, Video.js, MediaElement.js, Plyr]
export const features: Feature[] = [
  { name: "Play/ Pause Controls", support: [1, 1, 1, 1, 1] },
  { name: "Volume Controls", support: [1, 1, 1, 0, 1] },
  { name: "Playlist Controls & Support", support: [1, 0, 0, 0, 0] },
  { name: "Keyboard Navigation", support: [1, 1, 1, 1, 1] },
  { name: "Fullscreen Controls", support: [1, 1, 1, 1, 1] },
  {
    name: "Closed Captions Control & Subtitles Support",
    support: [1, 1, 1, 1, 1],
  },
  { name: "Transcript Control & Support", support: [1, 0, 0, 0, 0] },
  { name: "Picture-in-Picture", support: [0, 0, 1, 0, 1] },
  { name: "Playback Speed Controls", support: [1, 0, 1, 0, 1] },
  { name: "HD Quality Controls", support: [0, 0, 0, 0, 0] },
  { name: "Duration Display", support: [1, 1, 1, 1, 1] },
  { name: "Buffer Icon", support: [1, 1, 1, 1, 1] },
  { name: "Load Icon", support: [1, 1, 1, 1, 1] },
  { name: "Fallback for older browsers", support: [1, 0, 0, 0, 0] },
  // double check this one
  { name: "Thumbnail Insertion", support: [1, 1, 1, 1, 1] },
  // temp, maybe media format supported
  { name: "HLS Streaming", support: [0, 0, 0, 0, 0] },
  { name: "Language Translations", support: [0, 0, 0, 0, 1] },
];

export type Player = {
  label: string;
  href: string;
  description: string[];
  pros: string[];
  cons: string[];
  links: { label: string; href: string }[];
};

export const players: Player[] = [
  {
    label: "Ableplayer",
    href: "/able",
    description: [
      "uses jQuery",
      "can customize keyboard navigation controls",
      "supports captions being read aloud",
      "can toggle between versions of videos w/ audio description",
      "automatic text highlighting of transcript as media plays",
      "can customize captions and subtitles",
    ],
    pros: ["Has all features old player held", "customizable in many aspects"],
    cons: [
      "Unorthodox speed control design, a turtle and rabbit icon for slower and faster",
      "Three features (Speed icons, settings and audio description) are unique to this media player and may impose initial light cognitive load. Icon placement may also cause some light cognitive load as most icons like the speed and closed caption icons are located on the  lower left rather than the typical right side of the display ",
      "Media player is inflexible to basic keyboard shortcuts. Keyboard shortcuts provided by the media player are difficult to comprehend and therefore impose cognitive load. All other functions including transcript are flexible. ",
    ],
    links: [
      { label: "Repo", href: "https://github.com/ableplayer/ableplayer" },
      { label: "Site", href: "https://ableplayer.github.io/ableplayer/" },
    ],
  },
  {
    label: "Acornplayer",
    href: "/acorn",
    description: [
      "Recently archived 3/31/26, possible it will no longer be maintained",
    ],
    pros: [],
    cons: [
      "Icon display box and closed captioning icon disappears in full screen mode. All other function icons and buffer player status were responsive. ",
      "There is little to no control over the playback function and the picture-in-picture icon as it is not available in the bottom display and must be accessed via full screen mode. Transcript can only be accessed when selecting closed captioning language.",
      "The playback and transcript functions do not have their own separate icons. Captions are not consistent as they disappear in full screen mode. Volume icon placement will change locations depending on the video or streaming platform. ",
      "The icon display box becomes transparent in full screen mode and icons cannot be separately identified from one another. In addition, based on heuristics 1, 3 and 4, the design is simple but complex and inconsistent. ",
      "lacks a few features old player held",
      "may no longer be maintained",
    ],
    links: [
      { label: "Repo", href: "https://github.com/ghinda/acornmediaplayer" },
    ],
  },
  {
    label: "Video.js",
    href: "/videojs",
    description: [],
    pros: [
      "recently updated (documentation is updated, compatible with vanilla js and react)",
      "customizable in most aspects",
    ],
    cons: [
      "Media player is inflexible with keyboard shortcuts. Functions require the user to interact with the icon to interact with the media player. ",
      "made for standard browsers, testing for fallbacks falls on us",
      "no transcript functionality",
    ],
    links: [
      { label: "Repo", href: "https://github.com/videojs/video.js" },
      { label: "Site", href: "https://videojs.com" },
    ],
  },
  {
    label: "MediaElement.js",
    href: "/mediaelement",
    description: [],
    pros: [],
    cons: [],
    links: [
      {
        label: "Repo",
        href: "https://github.com/mediaelement/mediaelement/blob/master/docs/usage.md#vanilla",
      },
      {
        label: "Repo for Plugins",
        href: "https://github.com/mediaelement/mediaelement-plugins?tab=readme-ov-file#es6",
      },
    ],
  },
  {
    label: "Plyr",
    href: "/plyr",
    description: [
      "contains community plugins to work with other web frameworks, customizable in most aspects but no transcript functionality",
    ],
    pros: [],
    cons: ["No transcript functionality"],
    links: [
      { label: "Repo", href: "https://github.com/sampotts/plyr" },
      { label: "Site", href: "https://plyr.io/" },
    ],
  },
  {
    label: "Non Demo Players",
    href: "/",
    description: [],
    pros: [],
    cons: [
      "JW Player is no longer maintained.",
      "Ozplayer - A repo for a plugin for OzPlayer says its accessible video player is under commerical software.",
      "Flowplayer is under Wowza.",
      "Accessible HTML5 (PayPal) - Repo is broken, the only resource is its npm page which requires assets from its repo.",
    ],
    links: [
      { label: "JW Player Repo", href: "https://github.com/jwplayer/jwplayer" },
      {
        label: "OzPlayer Plugin Repo",
        href: "https://github.com/accessibilityoz/ozplayer-wordpress",
      },
      { label: "Flowplayer Repo", href: "https://flowplayer.com/" },
      {
        label: "Accessible HTML5 (PayPal) Repo",
        href: "https://github.com/paypal/accessible-html5-video-player",
      },
    ],
  },
];

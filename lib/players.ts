export type Feature = {
  name: string;
  /** One entry per player, in the same order as the `players` array */
  support: (0 | 1)[];
};

// support order: [Ableplayer, AcornPlayer, Accessible HTML5 (paypal), Video.js, MediaElement.js, Plyr]
export const features: Feature[] = [
  { name: "Play/ Pause Controls", support: [1, 1, 0, 0, 0, 0] },
  { name: "Volume Controls", support: [1, 1, 0, 0, 0, 0] },
  { name: "Playlist Controls & Support", support: [1, 0, 0, 0, 0, 0] },
  { name: "Keyboard Navigation", support: [1, 1, 0, 0, 0, 0] },
  { name: "Fullscreen Controls", support: [1, 1, 0, 0, 0, 0] },
  {
    name: "Closed Captions Control & Subtitles Support",
    support: [1, 1, 0, 0, 0, 0],
  },
  { name: "Transcript Control & Support", support: [1, 0, 0, 0, 0, 0] },
  { name: "Picture-in-Picture", support: [0, 0, 0, 0, 0, 0] },
  { name: "Playback Speed Controls", support: [1, 0, 0, 0, 0, 0] },
  { name: "HD Quality Controls", support: [0, 0, 0, 0, 0, 0] },
  { name: "Duration Display", support: [1, 1, 0, 0, 0, 0] },
  { name: "Buffer Icon", support: [0, 1, 0, 0, 0, 0] },
  { name: "Load Icon", support: [0, 1, 0, 0, 0, 0] },
  { name: "Fallback for older browsers", support: [1, 0, 0, 0, 0, 0] },
  // double check this one
  { name: "Thumbnail Insertion", support: [1, 1, 0, 0, 0, 0] },
  // temp, maybe media format supported
  { name: "HLS Streaming", support: [0, 0, 0, 0, 0, 0] },
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
    description: [],
    pros: [],
    cons: [],
    links: [
      { label: "Repo", href: "https://github.com/ghinda/acornmediaplayer" },
    ],
  },
  {
    label: "Accessible HTML5 (paypal)",
    href: "/accesspaypal",
    description: [],
    pros: [],
    cons: [],
    links: [
      {
        label: "Repo",
        href: "https://github.com/paypal/accessible-html5-video-player",
      },
    ],
  },
  {
    label: "Video.js",
    href: "/videojs",
    description: [],
    pros: [
      "Large plugin ecosystem",
      "Active community and maintenance",
      "Skinnable via CSS",
    ],
    cons: [
      "Accessibility requires extra plugins",
      "Larger bundle size",
      "Plugin quality varies",
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
    description: [],
    pros: [],
    cons: ["No transcripts"],
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
    ],
    links: [
      { label: "JW Player Repo", href: "https://github.com/jwplayer/jwplayer" },
      {
        label: "OzPlayer Plugin Repo",
        href: "https://github.com/accessibilityoz/ozplayer-wordpress",
      },
      { label: "Flowplayer Repo", href: "https://flowplayer.com/" },
    ],
  },
];

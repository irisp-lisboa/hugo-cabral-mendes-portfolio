// src/content.js

export const contactData = {
  email: "hugocabralmendes.art@gmail.com",
  instagram: "https://www.instagram.com/hugocabralmendes/",
  vimeo: "https://vimeo.com/hugocabralmendes",
  youtube: "https://www.youtube.com/channel/UC.../videos"
};


export const aboutData = {
  name: "Hugo Cabral Mendes",
  portrait: "/hero.jpg",
  cvLink: "/img/hugo-cv.pdf",
  bio: [
    "Based in Lisbon, Hugo is a contemporary dancer and choreographer...",
    "His work focuses on the intersection of urban movement and technical precision.---------------"
  ],
  education: [
    { year: "2018-2021", institution: "Escola Superior de Dança", training: "BA in Dance" },
    { year: "2022", institution: "P.A.R.T.S.", training: "Summer Intensive" }
  ]
};

export const portfolioData = [
  { 
    id: "p1", 
    title: "Contemporary Solo", 
    type: "dancer", // or "choreo"
    intro: "A visceral exploration of memory.",
    synopsis: "Full description of the piece goes here, explaining the artistic research...",
    premiere: "Teatro Camões, 2024",
    
    // Press/Comments
    reviews: [
      { text: "A hauntingly precise performance.", author: "Publico" },
      { text: "Innovative use of light and floorwork.", author: "Dance Magazine" }
    ],

    // Dates
    upcomingDates: [
      { date: "Oct 12, 2026", venue: "Centro Cultural de Belém", city: "Lisbon, PT" }
    ],
    previousDates: [
      { date: "May 2024", venue: "Teatro Municipal", city: "Porto, PT" }
    ],

    // Assets
    images: ["/img1.jpg", "/img2.jpg"], 
    videos: ["https://vimeo.com/..."], 

    // Technical Team (Professional Credits)
    credits: {
      choreography: "Hugo Cabral Mendes",
      performers: "Hugo Cabral Mendes, Guest Artist",
      soundDesign: "Artist Name",
      lightDesign: "Artist Name",
      scenography: "Artist Name",
      costumeDesign: "Artist Name",
      artisticDirection: "Hugo Cabral Mendes",
      production: "Production House Name",
      technicalDirection: "Name"
    }
  }
];

export const workshopData = [
  {
    id: "w1",
    title: "Contemporary Flow",
    tagline: "Technical Precision — Advanced",
    intro: "Exploring momentum and floor transitions.",
    synopsis: "A 3-day intensive workshop designed to push physical limits...",
    images: ["/workshop1.jpg"],
    videos: ["/workshop-reel.mp4"],
    upcoming: [
      { date: "Sept 2026", location: "Lisbon", link: "#" }
    ],
    previous: [
      { date: "Jan 2026", location: "Madrid" }
    ]
  }
];


// AUTOMATIC GALLERY GENERATOR
// This gathers every video and image from your projects and workshops into one list
export const galleryData = [
  // 1. Get all Videos first (as you requested)
  ...portfolioData.filter(p => p.videos.length > 0).map(p => ({
    id: `v-${p.id}`,
    type: 'video',
    src: p.videos[0],
    thumbnail: p.images[0],
    title: p.title
  })),
  // 2. Get all Images
  ...portfolioData.flatMap(p => p.images.map((img, index) => ({
    id: `img-p-${p.id}-${index}`,
    type: 'image',
    src: img,
    title: p.title
  }))),
  ...workshopData.flatMap(w => w.images.map((img, index) => ({
    id: `img-w-${w.id}-${index}`,
    type: 'image',
    src: img,
    title: w.title
  })))
];
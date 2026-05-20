// ─────────────────────────────────────────────────────────────────────────────
// src/content.js — All site content lives here.
// Images go in the /public folder and are referenced as "/filename.jpg"
// Videos: use the full Vimeo or YouTube URL.
// ─────────────────────────────────────────────────────────────────────────────


// ─── CONTACT & SOCIAL ────────────────────────────────────────────────────────

export const contactData = {
  email:        "hugocabralmendes.art@gmail.com",
  location:     "Lisbon, Portugal",
  contactImage: "/images/about/banner.jpg",  // image shown at the top of the Contact page

  instagram: "https://www.instagram.com/hugocabralmendes/",
  vimeo:     "https://vimeo.com/hugocabralmendes",
  youtube:   "https://www.youtube.com/channel/UC.../videos",
};


// ─── ABOUT ───────────────────────────────────────────────────────────────────

export const aboutData = {
  name:         "Hugo Cabral Mendes",
  portrait:     "/images/about/portrait.jpg",  // portrait shown on the About page
  photographer: "",                // photo credit — leave empty to hide
  cvLink:       "/hugo-cv.pdf",   // place the PDF in /public

  // Each paragraph is a separate string
  bio: [
    "Hugo Cabral Mendes is a choreographer and performer based in Lisbon. His artistic work draws together, in his own words, body, memory, falling, pain, and the queering of the male body.",
    "His training began in dance through the Quorum Project, at the Quorum Ballet Academy, after which he went on to the Escola Superior de Dança (ESD). He is currently a student in the Master's programme in Choreographic Creation and Professional Practices at the ESD.",
    "As a performer, he began his professional activity in 2018 and has since collaborated with a significant range of creators. He has worked with figures such as Raimund Hoghe, Aldara Bizarro, Diana Niepce, Daniel Matos, Adriana Sá Couto, Rodrigo Teixeira, Miguel Moreira, and Marco Martins — a path that has brought him into contact with different languages and approaches within contemporary dance and the performing arts.",
    "Alongside his work as a performer, he has developed his own practice as a creator, producer, and director. He made his debut in this capacity in 2023 with the piece \"O Ser Inumano\" (The Inhuman Being), presented at the Cumplicidades Festival, and presented \"O Campo das Cebolas\" in Serpa (Musibéria). \"O Ser Inumano\" grew out of an artistic residency at the Estúdios Victor Cordon and was conceived as a performance for two bodies, two animals, and two pieces of meat, exploring themes surrounding death, memory, and dematerialisation.",
    "In 2022, he co-created the children's show \"A Maior Flor do Mundo\" (The Largest Flower in the World), with Inês Gomes — a theatrical adaptation of the work by José Saramago that has been touring since the writer's centenary, with stops at venues such as the Teatro Cine in Torres Vedras and the José Saramago Foundation.",
    "In 2024, his work turned toward more intimate and installation-based forms: he presented the installation \"Cartas para a Nuvem\" (Letters to the Cloud) at The Gate in Lisbon, and the solo \"Cartas de um Bailarino para a Nuvem\" (Letters from a Dancer to the Cloud) in Catalonia. More recently, he has been preparing \"This Is Only About Dance\", scheduled to premiere in 2026.",
    "Throughout his career, he has been a participating artist in the Artistic Residencies programme of the Estúdios Victor Cordon, in the 2022, 2023, and 2026 editions — a structure that has supported the development of his independent creative work.",
  ],

  // Most recent first
  education: [
    { year: "2018–2021", institution: "Escola Superior de Dança", training: "BA in Dance",      city: "Lisbon"   },
    { year: "2022",      institution: "P.A.R.T.S.",               training: "Summer Intensive", city: "Brussels" },
  ],
};


// ─── WORK ────────────────────────────────────────────────────────────────────
// type "dancer" → Performer tab   |   type "choreo" → Choreographer tab
// The first item of each type becomes the large featured piece on the Work page.
// images[0] is always the cover shown on the grid.

export const portfolioData = [

  {
    id:       "p1",           // unique — becomes the URL: /work/p1
    type:     "choreo",       // "dancer" or "choreo"
    title:    "This is Only About Dance, ou Cartas para a Nuvem",
    year:     "2026",         // displayed on the grid overlay
    category: "Performance",  // label shown above the title
    coverPosition: "bottom",  // top | center | bottom — controls crop position on grid/mosaic
    synopsis: "A multidisciplinary performance for three dancers exploring the intersection of dance, physical theatre, and the transmission of memory. The conclusion of a triptych begun in 2024.",
    premiere: "Torres Vedras — 2026",

    // Optional pull quote shown on the detail page
    citation: {
      text:   "Everyday the whole day from the minute you wake up is potentially a dance. To see that movement is everywhere — in the tree branches shifting, the cars rolling by, people pausing at a street corner, a newspaper blowing down the sidewalk, a bird landing on the telephone wire. The fluctuations, the pulsations, the ebb and flow of this universal movement partake of some universal order, creating an empyreal rapport. Dancing is the activity of being present in and consciously aware of one's own movement as part of this flux. To live the life as a dance.",
      author: "Susan Leigh Foster, Reading Dancing",
    },

    // Full description — each string is a paragraph on the detail page
    description: [
      "This project is part of a triptych developed in three distinct formats: Cartas para a Nuvem — a site-specific installation presented at THE GATE space in Lisbon, September 2024, conceived for galleries and unconventional spaces; Cartas de Um Bailarino para a Nuvem — a solo premiered at L'Obrador in Deltebre, Catalonia, November 2024, for conventional venues and festivals; and This Is Only About Dance ou Cartas para a Nuvem, the triptych's conclusion.",
      "We live in an era where attention is fragmented and validation is reduced to a click. We inhabit and immerse ourselves deeply within through the solitude of the screen, leaving memories eternally recorded in the Cloud. The idea of the cloud coexists with something mystical and intangible, accessible to all — almost as if it were a form of faith. In the Cloud, everything lives indefinitely after our death. The performing arts, by contrast, due to their ephemeral nature, are bound to the present moment, where the gazes of the audience meet in a unique space and time. In the Cloud, all memories — even the most fleeting — live forever, if digitally recorded.",
      "TOAD comes from all the dances extinguished by mere forgetting of choreography, or by years of violence of colonialism and imperialism that wiped out dances, traditions and memories. It comes from all the improvisations that were once made and only remain in the memory of those who saw them and those who performed them. It comes from traditions and customs that do not belong to us, yet are passed on to us and become part of collective memory — from the dances of idols and references that, in a memory transmitted to us, meet our imagination. It comes from nocturnal dances, among smiles and glances of those who danced and were forgotten in their apothetic state of intoxication of the now. It comes from the dances of life that many hearts and memories have carried.",
      "\"Cartas para a Nuvem\" exists in the search for how to eternalize something that only exists because it cannot be eternalized. Where is the place where one lives at peace with forgetting? \"This show only makes sense if we all inhabit the Cloud.\"",
      "The audience is invited to film and photograph the act in which ideas transform into sharing. The experience concludes in the invisible thread of gazes and synapses crossing through hearts, pierced by the exchange of what is born in the most intimate places within us — the DREAM. The audience is also invited to participate in the creation of a collective memory in this invisible place, sharing their letters to the cloud — uploading the experiences lived during the performance and the moments that, one day, in the ephemerality of dance, we forget. Dance becomes extinct when the last spectator and the last performer die. Through the digital Cloud, we can eternalize dance — eternizing the moment of direct exchange between the work and its audience.",
      "This is a multidisciplinary performance for three dancers that reflects on the attempt of an artist to remain relevant in the art world in a context dominated by social media, instant consumption and the urgency of validation. The cloud inhabits our daily life as something omnipresent — it knows everything, but only we have full access to it, almost as if it were a God or a superior force that accompanies us.",
      "This triptych is also a biographical journey through memories stored in the cloud: from the search for perfect repetition at the beginning of Hugo Cabral Mendes' path in dance and art, to the present moment and the influence of the day the performance takes place. The digital cloud is never complete — it constantly expands with new layers and memories. In TOAD, this incessant search and ambition to never close completely is reflected — seeking non-crystallisation, just as the cloud never crystallises. Innovation and tradition coexist: the formalism of the chosen language validates our bodies, just as violence and friction in difference are felt in every movement.",
      "The poetic space between what is seen and what is truly perceived is a valley fed by impulses that stitch these bodies together, inhabited by the formalism of language — directives to see, feel and process symbols and mythologies in real time. Inspired by the choreographic works of Pina Bausch and the cinematic universe of Akira Kurosawa, particularly Dreams, Hugo Cabral Mendes explores the idea of landscape and cultural fabric in real time, and how the subconscious activates the notion of the digital cloud — taking us on a journey through our own memory.",
    ],

    images: ["/images/works/toad/teaser-toad.mp4",
             "/images/works/toad/toad-3.jpg",
             "/images/works/toad/toad-4.jpg",
             "/images/works/toad/toad-5.jpg",
             "/images/works/toad/toad-1.jpg",
             "/images/works/toad/toad-2.jpg",
             "/images/works/toad/toad-6.jpg",
             "/images/works/toad/toad-7.jpg",
             "/images/works/toad/toad-8.jpg",
             "/images/works/toad/toad-9.jpg",
             "/images/works/toad/toad-10.jpg",
             "/images/works/toad/toad-11.jpg",
             "/images/works/toad/toad-12.jpg",
             "/images/works/toad/toad-13.jpg",
             "/images/works/toad/toad-14.jpg"],  // [cover, ...additional]
    // Map each image path to its photographer name (leave out images with no credit)
    photographers: {
      // "/images/works/toad/toad-1.jpg": "Guilherme Gouveia",
    },
    videos: [],                                                          // Vimeo or YouTube URLs

    upcomingDates: [
      { date: "May 22, 2026", venue: "Cineteatro Louletano", city: "Loulé, PT" },
    ],
    previousDates: [
      { date: "Mar 7, 2026",  venue: "Teatro-Cine Torres Vedras", city: "Torres Vedras, PT" },
      { date: "Nov 2024",     venue: "L'Obrador",                 city: "Deltebre, ES"      },
      { date: "Sept 2024",    venue: "THE GATE",                  city: "Lisbon, PT"        },
    ],

    credits: [
      { role: "Creation, Concept and Art Direction",      name: "Hugo Cabral Mendes"                                                                                                                                       },
      { role: "Movement Support",      name: "Olga Roriz"                                                                                                                                               },
      { role: "Dramaturgy",            name: "Guilherme Barroso"                                                                                                                                        },
      { role: "Creation Assistant",    name: "Mariana Rita"                                                                                                                                             },
      { role: "Performers",            name: "Andrea Ordoñez, Margers Vanags"                                                                                                                          },
      { role: "Performance Intern",    name: "Carolina Pereira"                                                                                                                                         },
      { role: "Lighting Design",       name: "Pedro Guimaraes"                                                                                                                                          },
      { role: "Set Design",            name: "Silveira Cabral"                                                                                                                                          },
      { role: "Costumes",              name: "Kevin Rodrigues"                                                                                                                                          },
      { role: "Original Music",        name: "David Taylor"                                                                                                                                             },
      { role: "Music Selection",       name: "Hugo Cabral Mendes"                                                                                                                                       },
      { role: "Music",                 name: "Caetano Veloso, Klaus Nomi, Antonio Vivaldi"                                                                                                              },
      { role: "Poster Photography",    name: "Bruno Simao"                                                                                                                                              },
      { role: "Rehearsal Photography", name: "Guilherme Gouveia, Ricardo Nunes da Silva"                                                                                                               },
      { role: "Physical Recovery",     name: "Goncalo Martins"                                                                                                                                          },
      { role: "Video",                 name: "Rui Ventura"                                                                                                                                              },
      { role: "External Eye",          name: "Felix Lozano, Angelica Isenarda"                                                                                                                         },
      { role: "Production Direction",  name: "Hugo Cabral Mendes"                                                                                                                                       },
      { role: "Executive Production",  name: "Diana Lopes"                                                                                                                                              },
      { role: "Production Assistant",  name: "Iris Lisboa"                                                                                                                                              },
      { role: "Co-production",         name: "Teatro Cine Torres Vedras / Camara Municipal de Torres Vedras, Cineteatro Louletano / Camara Municipal de Loule"                                         },
      { role: "Residency Support",     name: "Municipio de Vila Franca de Xira, Associacao Cultural Inestetica, OPART E.P.E./Estudios Victor Cordon, Polo Cultural Gaivotas Boavista/Camara Municipal de Lisboa, ESTUFA" },
      { role: "Financial Management",  name: "Associacao Cultural Teatro Levantado a 2"                                                                                                                 },
      { role: "Special Thanks",        name: "Catarina Cunha, Joana Ruela, Maria Luzia Cabral, Rui Mendes, Teatro do Electrico"                                                                       },
    ],

    reviews: [],
  },
  {
    id:       "p2",          // must be unique
    type:     "choreo",      // "dancer" or "choreo"
    coverPosition: "center",
    title:    "The Inhuman Being",
    year:     "2023",
    category: "Choreography",
    synopsis: "The Inhuman Being is a performance for two brothers, two bodies and a piece of meat where the death of the Sun is worked as an idea of a memoir about humanity and its fatal consequences.",
    premiere: "Cumplicidades Internation Contemporary Dance Festival, Lisbon -- 2023",
    citation: { text: "This can be a memoir about anything. About something internal, visceral. About someone. It can be the story of our End. The Inhuman Being is a performance for two brothers, two bodies and a piece of meat where the death of the Sun is worked as an idea of a memoir about humanity and its fatal consequences. It exploded. No one knows what it was. Nothing remained. Perhaps only devastation. Death didn't bother to stay. Neither did God. A vibration. A memory. Space debris in an infinite universe. The orchestra drags on. A suspended note.... hangs in the infinity of silence. They told me I was everything. That I carried everything with me. The sound, the music, the silence, the infinite. You can't survive this alone. Nobody can, but I can help you. At the end of the world... the transcendence of invisible matter will remain... of atoms... of molecules that will never cease to exist. Invisible matter. Transcendence of pleasure. Transcendence of time. Infinitely stretching the present. The end of good and evil. The end of our species. The end of the end. End of the World.", author: "Hugo Cabral Mendes" },
    description: [
      "The Inhuman Being is a performance for two siblings, two bodies, and a piece of meat, in which the death of the sun is explored as an idea of a memoir about humanity and its errors or fatal flaws.",
      "The stage set is constructed in various acts or memories - images of human fatal flaws and sinful desires, conveyed through the body/flesh, dance, and exhaustion, thus leaving the invisible matter that energetically, physically, and sensorially influences us. As beings of light, we carry the universe within us and are constantly on an internal search for memories and accidents/incidents that create an emotional and familial umbilical cord between two or more bodies, constructing an idea of the passage of time, how the body transforms into an immaterial landscape, and claims the time that was never theirs.",
    ],
    images:   ["/images/works/inumano/inumano-teaser.mp4",
               "/images/works/inumano/inumano-9.jpeg",
               "/images/works/inumano/inumano-1.jpg",
               "/images/works/inumano/inumano-2.jpg",
               "/images/works/inumano/inumano-3.jpg",
               "/images/works/inumano/inumano-4.jpg",
               "/images/works/inumano/inumano-5.jpg",
               "/images/works/inumano/inumano-6.jpg",
               "/images/works/inumano/inumano-7.jpeg",
               "/images/works/inumano/inumano-8.jpeg",
               "/images/works/inumano/inumano-10.jpeg",
               "/images/works/inumano/inumano-11.jpeg",
               "/images/works/inumano/inumano-12.jpeg",
               "/images/works/inumano/inumano-13.jpeg",
               "/images/works/inumano/inumano-14.jpeg",
               "/images/works/inumano/inumano-15.jpeg",
               "/images/works/inumano/inumano-16.jpeg"],
    // Map each image path to its photographer name (leave out images with no credit)
    photographers: {
      // "/images/works/inumano/inumano-1.jpg": "Bruno Saavedra",
    },
    videos:   [],
    upcomingDates:  [],
    previousDates:  [
      { date: "May 2023",  venue: "Cumplicidades Internation Contemporary Dance Festival", city: "Lisbon, PT" },
      { date: "June 2023",  venue: "Instituto da Vinha e do Vinho", city: "Torres Vedras, PT" },
      { date: "September 2023",  venue: "Quinzena de Dança de Almada", city: "Almada, PT" },
    ],
    credits: [
      { role: "Direction & Artistic Conception",  name: "Hugo Cabral Mendes"                                             },
      { role: "Co-creation & Interpretation",     name: "Hugo Cabral Mendes, Guilherme Barroso"                          },
      { role: "Artistic Collaboration",           name: "Romeu Runa"                                                     },
      { role: "Rehearsal Assistant",              name: "Ricardo Paz"                                                    },
      { role: "Creation Assistant",               name: "Adriana Xavier"                                                 },
      { role: "Dramaturgy Support",               name: "Guilherme Filipe"                                               },
      { role: "Body Preparation",                 name: "Sara Albuquerque Garcia"                                        },
      { role: "Muscle Recovery",                  name: "Matilde Machado"                                                },
      { role: "Sound Design",                     name: "David Taylor"                                                   },
      { role: "Light Design & Operation",         name: "Pedro Guimarães"                                                },
      { role: "Technical Direction & Light Design", name: "Jorge Rosado"                                                 },
      { role: "Photography",                      name: "Bruno Saavedra, Guilherme Gouveia, Ricardo Nunes e Silva"       },
      { role: "Promo Photography",                name: "Bruno Saavedra"                                                 },
      { role: "Teaser",                           name: "Hugo Pedro, Hugo Cabral Mendes"                                 },
      { role: "Production & Diffusion",           name: "Hugo Cabral Mendes"                                             },
      { role: "Administrative & Financial Management", name: "Teatro Levantado a 2 – Associação Cultural"                },
      { role: "Co-production",                    name: "Teatro Cine Torres Vedras"                                      },
      { role: "Residency Support",                name: "Estúdios Victor Córdon, Espaço Casa Cheia, Instituto da Vinha e Vinho, A Bela Associação — Belalab, Polo Cultural Gaivotas | Boavista" },
      { role: "Venue",                            name: "Largo Residências – Quartel do Largo Cabeço de Bola, Instituto da Vinha e do Vinho" },
      { role: "Special Thanks",                   name: "Beatriz Silva, João Cardoso, Magda Matias, Miguel Moreira, Ricardo Paz, Método de Rose Cascais, Faculdade de Belas Artes, Luzia Cabral & Rui Mendes" },
    ],
    reviews: [
      {
        text:        "Throughout the performance, the bodies of the two performers gradually come undone, returning to more rigid positions and assuming an abysmal degree of violence. They never cease to sustain a Kafkaesque quality of metamorphosis. Hugo Cabral Mendes says they could be slabs of cured ham, in a process of drying and maturing. In repetition — one of the most prevalent elements in the choreographic design — there lies a quality of penance. They are, after all, two bodies that separate, but that find their way back to each other.",
        author:      "Ricardo Ramos Gonçalves",   // reviewer name
        publication: "Observador",   // newspaper, magazine, or website
      },
    ],
  },
  {
    id:       "p3",                   // unique — becomes the URL: /work/p3
    type:     "choreo",               // "dancer" or "choreo"
    coverPosition: "center",
    title:    "The Biggest Flower in the World",
    year:     "2022",
    category: "Performance",          // label shown above the title on the grid
    synopsis: "Numa aldeia distante, morava um menino muito curioso e brincalhão que todos os dias gostava de ir brincar para um jardim cheio de flores e pequenos animais. Certo dia, distraído na brincadeira, o menino afastou-se um pouco mais da aldeia e, pelo caminho, encontrou uma pequena flor. A flor estava murcha e quase morta. Precisava de alguma coisa...O que seria? Será que o menino a conseguiria salvar? “A Maior Flor do Mundo” é um espetáculo imersivo para crianças e graúdos baseado no livro de José Saramago, que nos ensina a importância de preservar e cuidar da Natureza. Com cenários criados com a ajuda de crianças e do seu imaginário, esta peça atende ao desejo que Saramago expressa no livro - “Quem sabe se um dia virei a ler outra vez esta história, escrita por ti que me lês, mas muito mais bonita?...” Mas, “e se as histórias para crianças passassem a ser de leitura obrigatória para os adultos? Seriam eles capazes de aprender realmente o que há tanto tempo têm andado a ensinar?”. Talvez esta peça não seja só para os mais pequenos...",
    premiere: "Teatro-cine de Torres Vedras, Torres Vedras — 2022",
    citation: { text: "E se as historias para criancas passassem a ser de leitura obrigatoria para os adultos? Seriam eles capazes de aprender realmente o que ha tanto tempo tem andado a ensinar?”", author: "José Saramago" },
    description: [
      "This interdisciplinary performance project is based on and inspired by the work A Maior Flor do Mundo (The Biggest Flower in the World) by José Saramago.",
      "The creative proposal stems from an interest in collaborative practical exploration involving young audiences. The aim is to develop a framework rooted in the work itself, while giving primacy to the sharing and interpretation of the age group involved — nurturing future active cultural agents, attentive to engagement with others, with nature, and with themselves.",
      "This proposal addresses a discourse that transcends all ages, drawing on the pedagogical dimension of peers and educators. It seeks the fertile ground between intellect and imagination, forming an artistic purpose that culminates in the dissemination of a work of the Portuguese language and culture, raising awareness of current environmental concerns and aiming to restore the connection between humanity and nature.",
      "'Who knows if one day I shall read this story again, written by you who read me, but far more beautiful?...' The challenge Saramago posed in his work inspired the idea of a creative sharing. Artistic and educational methodologies are explored, interweaving the knowledge of the performers and creators with young audiences — also creators — invited to experience the work and present their own interpretations, shaped through encounters in both studio and outdoor settings, so as to carry out a synaesthetic exploration that appeals to the artistic enjoyment and creative freedom of each individual. The proposed creative workshops culminate in the creation of a living, ever-changing set, which forms part of the composition of the piece.",
      "In The Biggest Flower in the World, Saramago tells the story of a boy who, 'in that slow play that the high, wide and deep time of childhood allows us all,' wanders away from his village and, upon reaching the top of a hill, finds a flower nearly dead, starving and thirsting for care. The boy tends to the flower with all his strength throughout the day. Back in the village, everyone was searching for him. 'They ran everywhere, already in so many tears, (...) and saw in the distance an enormous flower (...).' Upon reaching the flower, they found the boy asleep in its care.",
      "'Progress does not need to be patented to be worthwhile. Progress can also be measured by our interactions with nature and its preservation. Can we teach children to look at a flower and see all the things it represents: beauty, the health of an ecosystem, and its healing potential?' (Louv R., 2005).",
      "Developing an artistic proposal of this nature in the current context is a challenge — not only because of the atypical temporality, but also because of the way the new generation is becoming disconnected from nature, giving rise to sedentary lifestyles and increased behavioural problems alongside the rise of the virtualisation of existence. 'A generation of children who is not only being raised indoors, but is also being confined to ever-smaller spaces.' (Louv R., 2005). Richard Louv, author of Last Child in the Woods, coined this condition Nature Deficit Disorder. The author states that the health of the child and the health of the planet are inseparable, and that these environments are making children 'less alive.'",
      "The aim is to create new learning environments filled with stimuli that appeal to intuition, imagination and lived experience: 'What would our lives be like if our days and nights were as immersed in nature as they are in technology?' (Louv R., 2005).",
      "The Biggest Flower in the World is the first piece by the emerging creative duo Hugo Cabral Mendes & Inês Gomes, inspired by and based on José Saramago's children's story of the same name. The relevance of this work lies in its tribute to the author — one of Portugal's most awarded and recognised writers — and to his literary contribution, as 2022 marked the centenary of José Saramago, born in 1922.",
      "Hugo Cabral Mendes & Inês Gomes begin their journey together as emerging creators in dance, doing so side by side with the young community, revisiting this space in order to organise, process, share and debate ideas, feelings and thoughts — seeking to build and tell together a new and generous perspective of the story, establishing for many of these children a first encounter with the work of the centenary author.",
      "All stories for children and young people carry a moral. The multidisciplinary dance piece The Biggest Flower in the World does not seek to convey the moral of the writer's tale. Instead, it seeks — within the young people's own searching — to find the moral of that present moment that exists in the exchange of sensations, ideas and thoughts, and to proclaim a different and unique moral within each of us.",
    ],
    images:   ["/images/works/mfdm/teaser-mfdm.mp4",
               "/images/works/mfdm/mfdm-1.jpeg",
               "/images/works/mfdm/mfdm-2.jpeg",
               "/images/works/mfdm/mfdm-3.jpeg",
               "/images/works/mfdm/mfdm-4.jpeg"],
    // Map each image path to its photographer name (leave out images with no credit)
    photographers: {
      // "/images/works/mfdm/mfdm-1.jpeg": "João Canhão",
    },
    videos:   [],                              // Vimeo or YouTube URLs
    upcomingDates: [],
    previousDates: [
      { date: "16 Feb 2022", venue: "Teatro-Cine Torres Vedras", city: "Torres Vedras, PT" },
      { date: "26 Feb 2022", venue: "Auditório Beatriz Costa", city: "Mafra, PT" },
      { date: "22 & 23 Apr 2022", venue: "CAE", city: "Sever do Vouga, PT" },
      { date: "30 Apr 2022", venue: "Abril Dança Festival", city: "Coimbra, PT" },
      { date: "16 Feb 2022", venue: "Teatro-Cine Torres Vedras", city: "Torres Vedras, PT" },
      { date: "16 Feb 2022", venue: "Teatro-Cine Torres Vedras", city: "Torres Vedras, PT" },
    ],
    credits: [
      { role: "Artistic Direction & Creation",   name: "Hugo Cabral Mendes, Inês Gomes"                                                                                                     },
      { role: "Interpretation",                  name: "Francisco Freire, Sofia Santos"                                                                    },
      { role: "Music Selection",                 name: "Hugo Cabral Mendes, Inês Gomes"                                                                                                     },
      { role: "Production Direction",            name: "Hugo Cabral Mendes"                                                                                                                  },
      { role: "Executive Production",            name: "Mila Cabral"                                                                                                                         },
      { role: "Technical Direction & Light Design", name: "Cláudia Rodrigues"                                                                                                               },
      { role: "Set Design",                      name: "Silveira Cabral"                                                                                                                     },
      { role: "Costumes",                        name: "Inês Gomes"                                                                                                                          },
      { role: "Audiovisual & Documentary",       name: "Miguel Pinheiro"                                                                                                                     },
      { role: "Promotional Video",               name: "Rui Ventura"                                                                                                                         },
      { role: "Photography",                     name: "João Canhão, Nuno Silva, Darry Diogo"                                                                                               },
      { role: "Illustration",                    name: "Inês Gomes"                                                                                                                          },
      { role: "External Eye",                    name: "Aldara Bizarro, Vítor Hugo Afonso"                                                                                                  },
      { role: "Residency Support",               name: "MOAGEM — Associação ESTUFA, Estúdios Vítor Córdon / OPART, Estúdio CAB"                                                            },
      { role: "Co-production",                   name: "Casa Amadis, Fundação José Saramago, Câmara Municipal de Loulé, Cineteatro Louletano, Teatro-Cine Torres Vedras, Associação ESTUFA, Conservatório de Música D. Dinis" },
    ],
    reviews: [],
  },

  // ─── To add a new work, copy the block below and fill in the fields ────────
  // {
  //   id:       "p3",                   // unique — becomes the URL: /work/p3
  //   type:     "choreo",               // "dancer" or "choreo"
  //   title:    "Title",
  //   year:     "2024",
  //   category: "Performance",          // label shown above the title on the grid
  //   synopsis: "Short description (1–2 sentences) shown in the info panel.",
  //   premiere: "Venue, City — Year",
  //   citation: { text: "Quote text.", author: "Author, Source" },
  //   description: [
  //     "First paragraph of the full description.",
  //     "Second paragraph.",
  //   ],
  //   images:   ["/images/works/p3-cover.jpg"],  // first image is the grid cover
  //   photographers: {
  //     "/images/works/p3-cover.jpg": "Photographer Name",
  //   },
  //   videos:   [],                              // Vimeo or YouTube URLs
  //   upcomingDates: [
  //     { date: "Oct 2025", venue: "Venue Name", city: "City, PT" },
  //   ],
  //   previousDates: [
  //     { date: "Jan 2024", venue: "Venue Name", city: "City, PT" },
  //   ],
  //   credits: [
  //     { role: "Direction & Artistic Conception", name: "" },
  //     { role: "Performers",                      name: "" },
  //     { role: "Light Design",                    name: "" },
  //     { role: "Sound Design",                    name: "" },
  //     { role: "Production",                      name: "" },
  //     { role: "Special Thanks",                  name: "" },
  //     // add or remove rows as needed
  //   ],
  //   reviews: [
  //     { text: "Review text.", author: "Reviewer Name", publication: "Newspaper or Magazine" },
  //   ],
  // },

];


// ─── WORKSHOPS ───────────────────────────────────────────────────────────────
// synopsis → 1–2 sentences shown below the image on the Workshops list page
// details  → full description shown on the Workshop detail page

export const workshopData = [

  {
    id:       "w1",
    title:    "Anatomy of the Fall",
    tagline:  "Performers · Actors · Dancers",
    synopsis: "An intensive workshop exploring falling as a principle of transformation — for actors, performers and dancers who wish to deepen their relationship with body, space, and the unexpected.",

    details: "For actors, performers and dancers who wish to deepen their relationship with the body, space, and the unexpected. It is ideal for those who want to explore new forms of physical expression, improve the connection between body and word, and develop greater performative availability. Whether for experienced professionals or students in training, this experience challenges each participant to inhabit risk, improvisation, and the freedom of the body in space.",

    takeaways: [
      { title: "Greater Body Awareness",              text: "Develop a deeper relationship with the body, exploring weight, balance, and falling as expressive tools." },
      { title: "Body–Voice Connection",               text: "Learn to integrate movement with the word, making the interpretation more organic and authentic." },
      { title: "Adaptation & Performative Availability", text: "Expand the ability to respond to the unexpected on stage, becoming a more versatile and spontaneous actor." },
      { title: "Risk & Performative Abandonment",     text: "Lose the fear of making mistakes and embrace the unknown as part of the creative process." },
      { title: "Relationship with the Floor",         text: "Work on contact techniques, improvisation, and fluid movement to gain more bodily freedom." },
      { title: "Expansion of Physical Expression",    text: "Broaden the gestural and emotional repertoire, enriching presence and non-verbal communication." },
    ],

    description: [
      "The human being is constantly falling. We live in a place of infinite falling. Walking is a small fall — off balance. Falling does not literally mean being down, whether emotionally, physically, or in any other aspect. Falling means using the weight and volume of our body in unexpected ways.",
      "Through body awareness exercises, group dynamics, and individual exploration, participants will deepen their awareness of their own axis and test the limits of their balance. This workshop proposes a dive into falling as a principle of transformation and adaptation. Exploring the relationship with the ground, improvisation, and performative abandonment allows the actor to develop an attentive, agile, and expressive body.",
      "Falling is not a mistake, but a starting point — an invitation to discover new paths and deepen the connection between body, voice, and emotion. To live in falling is to accept risk, trust the moment, and be truly present.",
      "Without an available body, the voice finds no root, emotion does not fully manifest, and presence loses strength. Through the idea and practice of Living in Falling, participants will be invited to explore their performative expressiveness in different contexts and body states.",
      "How can we inhabit imbalance without fear? How can we transform uncertainty into creative potential? Experimentation will be a path to deepen these questions, challenging each participant to expand their physicality and presence on stage.",
    ],

    citation: {
      text:   "I like to dance until I feel like I'm almost falling over. To feel the pleasure, the exhaustion, and the absurdity of dancing until I can no longer distinguish one thing from the other. I wear myself out because I want to, not because I have to. I physically exhaust myself. The further I go, the less distinction I make between my body, my mind, and what surrounds me. The external and internal worlds overlap. I stop being an observer and become the dance itself. Dance and silence are interconnected. Silence is as abstract as dance is concrete. Dance is as abstract as silence is concrete. I danced bored and euphoric. I danced to escape problems. I danced sad and happy. I danced until the end of the world.",
      author: "Hugo Cabral Mendes",
    },

    images: ["/images/workshops/w1/cover.jpg"],
    videos: [],
    upcoming: [],
    previous: [],
  },

  {
    id:       "w2",
    title:    "Composição do Detalhe",
    tagline:  "",
    synopsis: "",
    details:  "",
    description: [],
    takeaways: [],
    citation:  null,
    images: ["/images/workshops/w2/cover.jpg"],
    videos: [],
    upcoming: [],
    previous: [],
  },

  {
    id:       "w3",
    title:    "Letters to the Cloud: Body, Memory and Presence",
    tagline:  "Adults · With or without dance experience",
    synopsis: "A practical immersion in the principles behind This Is Only About Dance — exploring the body as an archive of memories, presence, and collective creation in the digital age.",
    details:  "Aimed at adults, with or without dance experience, this workshop proposes a practical immersion in the principles that underpin the performance This Is Only About Dance ou Cartas para a Nuvem.",
    description: [
      "Through movement exercises, guided improvisation and body listening practices, participants are invited to explore the body as an archive of memories — physical, emotional and imagined — and to reflect on the relationship between presence and record in the digital age. The workshop articulates contemporary dance practices with instant creation devices, where gesture is understood as a form of ephemeral writing.",
      "Moments of interaction with simple digital tools will also be introduced, allowing participants to think of the 'cloud' as an extension of the body and a space for collective sharing. The aim is to create a safe and inclusive space where each participant can develop their own movement language, activating creativity, sensory awareness and the relationship with the other.",
      "More than a technical training, this workshop proposes an artistic and reflective experience, where the body is summoned as a place of memory, transformation and creation in the present.",
    ],
    takeaways: [],
    citation:  null,
    images: ["/images/workshops/w3/cover.jpg"],
    videos: [],
    upcoming: [{ date: "May 21st 2026", venue: "Cineteatro Louletano", city: "Loulé, PT" }],
    previous: [],
  },

  {
    id:       "w4",
    title:    "Laboratório Criativo — A Maior Flor do Mundo",
    tagline:  "",
    synopsis: "",
    details:  "",
    description: [],
    takeaways: [],
    citation:  null,
    images: ["/images/workshops/w4/cover.jpg"],
    videos: [],
    upcoming: [],
    previous: [],
  },

  // ─── To add a new workshop, copy the block below and fill in the fields ───
  // {
  //   id:       "w2",          // must be unique
  //   title:    "Title",
  //   tagline:  "Level / Style",
  //   synopsis: "Short description (1–2 sentences).",
  //   details:  "Full description shown on the workshop page.",
  //   images:   ["/images/workshops/w2-cover.jpg"],
  //   videos:   [],
  //   upcoming: [],
  //   previous: [],
  // },

];


// ─── GALLERY ─────────────────────────────────────────────────────────────────
// Built automatically from all images and videos in portfolioData and workshopData.
// To add standalone images not linked to any project, add them to extraGalleryImages.

export const extraGalleryImages = [
  {
    id:        "hero-video",
    type:      "video",
    src:       "/images/hero-video.mp4",
    thumbnail: "",           // optional: add a still image path e.g. "/images/extra/hero-thumb.jpg"
    title:     "Hugo Cabral Mendes",
  },
  // { id: "extra-1", type: "image", src: "/images/extra/studio.jpg",   title: "Studio Session" },
  // { id: "extra-2", type: "image", src: "/images/extra/rehearsal.jpg", title: "Rehearsal"      },
];

// Auto-generated — do not edit below this line
export const galleryData = [
  ...portfolioData
    .filter(p => p.videos?.length > 0 && !p.videos[0].includes('...'))
    .map(p => ({ id: `v-${p.id}`, type: "video", src: p.videos[0], thumbnail: p.images[0], title: p.title })),
  ...portfolioData
    .flatMap(p => p.images.map((src, i) => ({ id: `img-p-${p.id}-${i}`, type: /\.(mp4|webm|mov)$/i.test(src) ? "video" : "image", src, title: p.title }))),
  ...workshopData
    .flatMap(w => w.images.map((src, i) => ({ id: `img-w-${w.id}-${i}`, type: /\.(mp4|webm|mov)$/i.test(src) ? "video" : "image", src, title: w.title }))),
  ...extraGalleryImages,
];

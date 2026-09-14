export const DESTINATIONS = [
  {
    id: 'abidjan',
    name: 'Abidjan',
    tagline: 'La Perle des Lagunes & Capitale Économique',
    category: 'Business',
    region: 'Lagunes',
    image: '/images/hero_abidjan.jpg',
    rating: 4.9,
    reviewsCount: 342,
    highlights: ['Le Plateau & sa skyline', 'Cathédrale Saint-Paul', 'Maquis chic de Cocody', 'Parc National du Banco'],
    description: 'Abidjan est la métropole la plus trépidante d\'Afrique de l\'Ouest. Entre gratte-ciel futuristes au Plateau, marchés colorés à Treichville et soirées animées à Zone 4 et Cocody, la ville ne dort jamais.',
    bestSeason: 'Novembre à Mars',
    durationRecommended: '3-4 jours',
    tags: ['Skyline', 'Vie Nocturne', 'Gastronomie', 'Business'],
    topAttractions: [
      { name: 'Le Plateau & skyline de la lagune', desc: 'Découvrez le Manhattan de l\'Afrique de l\'Ouest.' },
      { name: 'Parc National du Banco', desc: 'Une forêt primaire préservée en plein cœur de la métropole.' },
      { name: 'Musée des Civilisations de Côte d\'Ivoire', desc: 'Plus de 10 000 pièces d\'art traditionnel authentique.' },
      { name: 'Marché d\'Art de Cité des Arts', desc: 'Artisanat local, toiles de Korhogo et sculptures en bronze.' }
    ],
    // Photos du lieu (vous pouvez remplacer ces chemins par vos propres photos)
    gallery: [
      { url: '/images/hero_abidjan.jpg', title: 'Skyline du Plateau & Lagune Ébrié', tag: 'Vue Panoramique' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Saveurs & Maquis réputés d\'Abidjan', tag: 'Gastronomie & Maquis' },
      { url: '/images/campers_sunset.jpg', title: 'Ambiance festive au coucher de soleil', tag: 'Coucher de Soleil' },
      { url: '/images/smiling_hikers.jpg', title: 'Voyageurs en immersion culturelle', tag: 'Voyageurs & Ambiance' },
      { url: '/images/hikers_trail.jpg', title: 'Sentiers du Parc National du Banco', tag: 'Forêt du Banco' }
    ],
    testimonials: [
      {
        author: 'Alexandre G.',
        origin: 'Lyon, France',
        date: 'Il y a 2 semaines',
        rating: 5,
        title: 'Énergie vibrante et gastronomie au top',
        comment: 'Abidjan ne dort jamais ! Entre la vue sur la skyline du Plateau depuis la lagune, les maquis chics de Cocody et le meilleur Garba de ma vie, c\'est une ville électrisante et chaleureuse.'
      },
      {
        author: 'Mariam D.',
        origin: 'Bruxelles, Belgique',
        date: 'Il y a 1 mois',
        rating: 5,
        title: 'Accueil Akwaba inégalable',
        comment: 'La traversée de la forêt primaire du Banco en plein cœur de la métropole suivie d\'une soirée festive au maquis restera l\'un de mes plus beaux souvenirs de voyage.'
      }
    ]
  },
  {
    id: 'yamoussoukro',
    name: 'Yamoussoukro',
    tagline: 'Capitale Politique & Joyau Architectural',
    category: 'Culture',
    region: 'Bélier',
    image: '/images/yamoussoukro_basilica.jpg',
    rating: 4.95,
    reviewsCount: 289,
    highlights: ['Basilique Notre-Dame de la Paix', 'Fondation Félix Houphouët-Boigny', 'Lac aux Crocodiles', 'Hôtel du Président'],
    description: 'Capitale politique et administrative de la Côte d\'Ivoire, Yamoussoukro abrite la plus grande basilique au monde ainsi qu\'une architecture monumentale entourée de légendes et de parcs d\'exception.',
    bestSeason: 'Toute l\'année',
    durationRecommended: '1-2 jours',
    tags: ['Architecture', 'Histoire', 'Patrimoine', 'Spiritualité'],
    topAttractions: [
      { name: 'Basilique Notre-Dame de la Paix', desc: 'Superbe édifice en marbre d\'Italie avec vitraux spectaculaires de 8 400 m².' },
      { name: 'Lac des Crocodiles Sacrés', desc: 'Observation du rituel quotidien des caïmans du Palais Présidentiel.' },
      { name: 'Maison des Hôtes de Yamoussoukro', desc: 'Palais aux lignes futuristes au cœur de la savane.' }
    ],
    gallery: [
      { url: '/images/yamoussoukro_basilica.jpg', title: 'Basilique Notre-Dame de la Paix', tag: 'Vue Principale' },
      { url: '/images/smiling_hikers.jpg', title: 'Visite guidée des marbres et esplanades', tag: 'Visite Architecturale' },
      { url: '/images/campers_sunset.jpg', title: 'Lumière dorée sur les lacs de la capitale', tag: 'Lacs & Crépuscule' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Spécialités culinaires du pays Baoulé', tag: 'Cuisine Régionale' },
      { url: '/images/hikers_trail.jpg', title: 'Promenades dans les grands parcs arborés', tag: 'Parcs & Allées' }
    ],
    testimonials: [
      {
        author: 'Sophie & Lucas M.',
        origin: 'Genève, Suisse',
        date: 'Il y a 3 semaines',
        rating: 5,
        title: 'Une merveille architecturale mondiale',
        comment: 'Entrer dans la Basilique Notre-Dame de la Paix coupe le souffle. La lumière qui traverse les vitraux immenses et la grandeur des marbres sont inoubliables. Le guide Akwaba connaissait chaque détail historique.'
      },
      {
        author: 'Koffi A.',
        origin: 'Bouaké, Côte d\'Ivoire',
        date: 'Il y a 1 mois',
        rating: 5,
        title: 'Sérénité et fierté nationale',
        comment: 'La visite de la Fondation Félix Houphouët-Boigny et les lacs sacrés offrent un moment de paix unique. Yamoussoukro porte une âme majestueuse qu\'il faut vivre en vrai.'
      }
    ]
  },
  {
    id: 'assinie',
    name: 'Assinie-Mafia',
    tagline: 'Plages Paradisiaques, Lagune Aby & Écolodges VIP',
    category: 'Plages & Écotourisme',
    region: 'Sud-Comoé',
    image: '/images/assinie_beach.jpg',
    rating: 4.98,
    reviewsCount: 512,
    highlights: ['Presqu\'île d\'Assinie-Mafia', 'La Passe d\'Assinie (Océan & Lagune)', 'Balades en pirogue & mangroves', 'Écolodges d\'exception pieds dans l\'eau'],
    description: 'Des kilomètres de sable blanc bordés de cocotiers majestueux entre la lagune Aby et l\'Océan Atlantique. Assinie-Mafia est la station balnéaire d\'exception de Côte d\'Ivoire, réputée pour ses écolodges haut de gamme, ses balades en bateau et ses spots de détente paradisiaques.',
    bestSeason: 'Octobre à Mai',
    durationRecommended: '2-4 jours',
    tags: ['Plage', 'Luxe', 'Lagune', 'Détente'],
    topAttractions: [
      { name: 'La Passe d\'Assinie', desc: 'Le spectacle grandiose où les eaux calmes de la lagune rejoignent les rouleaux de l\'océan.' },
      { name: 'Presqu\'île d\'Assinie-Mafia', desc: 'Plages privées immaculées, cocotiers et détente absolue loin du tumulte urbain.' },
      { name: 'Lagune Aby & Forêts de Mangroves', desc: 'Croisière en pirogue motorisée à la découverte d\'une biodiversité aquatique préservée.' }
    ],
    gallery: [
      { url: '/images/assinie_beach.jpg', title: 'Plages de sable blanc et cocoteraies', tag: 'Vue Littorale' },
      { url: '/images/campers_sunset.jpg', title: 'Soirée et feu de camp sur la plage', tag: 'Feu de Camp' },
      { url: '/images/smiling_hikers.jpg', title: 'Excursions en bateau sur la lagune Aby', tag: 'Balade Nautique' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Poissons et crustacés frais grillés', tag: 'Saveurs Océanes' },
      { url: '/images/hero_abidjan.jpg', title: 'Écolodges d\'exception en bord de mer', tag: 'Écolodges VIP' }
    ],
    testimonials: [
      {
        author: 'Élodie & Thomas V.',
        origin: 'Paris, France',
        date: 'Il y a 2 semaines',
        rating: 5,
        title: 'Le paradis préservé les pieds dans l\'eau',
        comment: 'Assinie est un véritable joyau. La traversée en bateau sur la lagune Aby pour rejoindre notre lodge privé et le coucher de soleil à la Passe étaient magiques. Un calme absolu et un accueil aux petits soins.'
      },
      {
        author: 'Jean-Marc D.',
        origin: 'Abidjan, Côte d\'Ivoire',
        date: 'Il y a 3 semaines',
        rating: 5,
        title: 'Week-end d\'évasion totale',
        comment: 'Le meilleur spot pour déconnecter complètement du tumulte urbain. Plages de sable fin à perte de vue et langoustes fraîches grillées au feu de bois... Une parenthèse féerique.'
      }
    ]
  },
  {
    id: 'man',
    name: 'Man & Les Montagnes',
    tagline: 'La Région des Dix-Huit Montagnes & Cascades',
    category: 'Plages & Écotourisme',
    region: 'Tonkpi',
    image: '/images/man_mountains.jpg',
    rating: 4.88,
    reviewsCount: 204,
    highlights: ['Mont Tonkpi', 'La Cascade de Man', 'Les Singes Sacrés de Gbeple', 'Pont de Lianes de Lieupleu'],
    description: 'Une immersion dans la fraîcheur des montagnes de l\'Ouest ivoirien. Man offre des panoramas verdoyants, des ponts de lianes sacrés tressés en une nuit selon la tradition Dan, et une faune fascinante.',
    bestSeason: 'Novembre à Février',
    durationRecommended: '3-4 jours',
    tags: ['Randonnée', 'Nature', 'Tradition', 'Cascades'],
    topAttractions: [
      { name: 'Mont Tonkpi & Dent de Man', desc: 'Sommet offrant une vue panoramique jusqu\'aux frontières guinéenne et libérienne.' },
      { name: 'Cascade Naturelle de Man', desc: 'Baignade rafraîchissante dans un écrin de forêt tropicale dense.' },
      { name: 'Pont de Lianes Sacré de Lieupleu', desc: 'Un chef-d\'œuvre d\'ingénierie ancestrale au-dessus du fleuve Cavally.' }
    ],
    gallery: [
      { url: '/images/man_mountains.jpg', title: 'Massif des Dix-Huit Montagnes et cascades', tag: 'Panoramas Alpins' },
      { url: '/images/hikers_trail.jpg', title: 'Sentiers de randonnée vers le Mont Tonkpi', tag: 'Trek & Sentiers' },
      { url: '/images/campers_sunset.jpg', title: 'Coucher de soleil sur les cimes brumeuses', tag: 'Coucher de Soleil' },
      { url: '/images/smiling_hikers.jpg', title: 'Randonneurs aux cascades de Zadepleu', tag: 'Cascades Fraîches' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Riz des montagnes et sauces traditionnelles', tag: 'Saveurs de Montagne' }
    ],
    testimonials: [
      {
        author: 'Marc Kouassi',
        origin: 'Montréal, Canada',
        date: 'Il y a 3 semaines',
        rating: 5,
        title: 'La fraîcheur et la magie de l\'Ouest',
        comment: 'La vue depuis le sommet du Mont Tonkpi au lever du soleil et la traversée du pont de lianes sacré sont des expériences inoubliables. Des paysages verdoyants et une culture Dan passionnante.'
      },
      {
        author: 'Émilie R.',
        origin: 'Nantes, France',
        date: 'Il y a 1 mois',
        rating: 5,
        title: 'Cascades vivifiantes et guides d\'exception',
        comment: 'Une baignade mémorable dans l\'eau pure de la cascade de Man et une rencontre respectueuse avec les singes sacrés. L\'équipe locale nous a guidés avec passion et sécurité.'
      }
    ]
  },
  {
    id: 'gastronomie',
    name: 'Circuit Gourmand Ivoirien',
    tagline: 'Garba, Alloco, Kedjenou & Maquis Authentiques',
    category: 'Gastronomie',
    region: 'National',
    image: '/images/ivory_gastronomy.jpg',
    rating: 4.96,
    reviewsCount: 630,
    highlights: ['Garba de Poisson Thon', 'Alloco & Piment Fait Maison', 'Kedjenou de Poulet au Four de Terre', 'Poisson Grillé au Feu de Bois'],
    description: 'La Côte d\'Ivoire est la capitale gastronomique incontournable de l\'Afrique de l\'Ouest. Savourez l\'attiéké frais, le Garba croustillant et les sauces graines traditionnelles mijotées au feu de bois.',
    bestSeason: 'Toute l\'année',
    durationRecommended: 'En continu',
    tags: ['Garba', 'Alloco', 'Attiéké', 'Maquis'],
    topAttractions: [
      { name: 'Maquis du Val d\'Angré & Marcory', desc: 'Dégustation des meilleurs poissons grillés et choucouya d\'agneau.' },
      { name: 'Garbadrome VIP', desc: 'L\'expérience ultime du Garba préparé par les meilleurs maitres artisans.' }
    ],
    gallery: [
      { url: '/images/ivory_gastronomy.jpg', title: 'Garba croustillant, Alloco et poissons braisés', tag: 'Plats Emblématiques' },
      { url: '/images/campers_sunset.jpg', title: 'Dîners gourmands en plein air au crépuscule', tag: 'Dîner en Plein Air' },
      { url: '/images/smiling_hikers.jpg', title: 'Moments de partage autour de tables conviviales', tag: 'Convivialité' },
      { url: '/images/assinie_beach.jpg', title: 'Fruits exotiques frais et poissons au bord de l\'eau', tag: 'Fruits & Bord de Mer' },
      { url: '/images/hero_abidjan.jpg', title: 'Maquis chics et adresses branchées', tag: 'Maquis Branchés' }
    ],
    testimonials: [
      {
        author: 'David L.',
        origin: 'Toulouse, France',
        date: 'Il y a 2 semaines',
        rating: 5,
        title: 'Le paradis des gourmands',
        comment: 'L\'attiéké frais avec un thon braisé croustillant et du piment doux maison... C\'était tout simplement le meilleur repas de ma vie. Les maquis d\'Abidjan ont une ambiance festive unique au monde !'
      }
    ]
  },
  {
    id: 'grand-bassam',
    name: 'Grand-Bassam',
    tagline: 'Cité Historique & Patrimoine Mondial UNESCO',
    category: 'Culture',
    region: 'Sud-Comoé',
    image: '/images/campers_sunset.jpg',
    rating: 4.94,
    reviewsCount: 418,
    highlights: ['Quartier France UNESCO', 'Musée National du Costume', 'Artisanat & Vannerie', 'Plages de l\'Ancien Phare'],
    description: 'Première capitale coloniale de la Côte d’Ivoire, Grand-Bassam est un musée à ciel ouvert au charme intemporel, bordé par les rouleaux de l\'Atlantique et les ateliers d\'artistes réputés.',
    bestSeason: 'Toute l\'année',
    durationRecommended: '1-2 jours',
    tags: ['UNESCO', 'Histoire', 'Architecture', 'Artisanat'],
    topAttractions: [
      { name: 'Quartier France & Palais Colonial', desc: 'Architecture de la fin du XIXe siècle classée au patrimoine mondial.' },
      { name: 'Musée National du Costume', desc: 'Collection d\'habits royaux et masques traditionnels.' },
      { name: 'Village des Potières & Céramistes', desc: 'Savoir-faire séculaire transmis de mère en fille.' }
    ],
    gallery: [
      { url: '/images/campers_sunset.jpg', title: 'Crépuscule sur les plages de l\'ancien phare', tag: 'Coucher de Soleil' },
      { url: '/images/smiling_hikers.jpg', title: 'Exploration guidée des bâtisses du Quartier France', tag: 'Quartier France' },
      { url: '/images/assinie_beach.jpg', title: 'Plages atlantiques et cocotiers centenaires', tag: 'Rivages Atlantiques' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Gastronomie littorale et poissons braisés', tag: 'Cuisine Côtière' },
      { url: '/images/hikers_trail.jpg', title: 'Ruelles historiques et ateliers de créateurs', tag: 'Ruelles & Ateliers' }
    ],
    testimonials: [
      {
        author: 'Claire & Antoine B.',
        origin: 'Bordeaux, France',
        date: 'Il y a 3 semaines',
        rating: 5,
        title: 'Un voyage émouvant dans l\'Histoire ivoirienne',
        comment: 'Le Quartier France a une âme poétique rare. Flâner entre les façades historiques patinées par l\'océan, échanger avec les artisans potiers et déjeuner les pieds dans le sable... Une expérience culturelle sublime.'
      },
      {
        author: 'Fatou Traoré',
        origin: 'Dakar, Sénégal',
        date: 'Il y a 1 mois',
        rating: 5,
        title: 'Atmosphère artistique et apaisante',
        comment: 'Grand-Bassam est idéal pour s\'imprégner de l\'art et de la mémoire ivoirienne à seulement 40 minutes d\'Abidjan. Le Musée du Costume est une merveille.'
      }
    ]
  },
  {
    id: 'san-pedro',
    name: 'San-Pédro & Baie des Sirènes',
    tagline: 'Plages Sauvages & Écotourisme Littoral',
    category: 'Plages & Écotourisme',
    region: 'San-Pédro',
    image: '/images/smiling_hikers.jpg',
    rating: 4.91,
    reviewsCount: 275,
    highlights: ['Baie des Sirènes', 'Piscines Naturelles de Taki', 'Grand-Béréby', 'Port Cacaoyer'],
    description: 'Le Sud-Ouest ivoirien offre le littoral le plus préservé du pays. Des criques rocheuses cachées de Grand-Béréby aux plages infinies de sable doré, une déconnexion totale en pleine nature.',
    bestSeason: 'Novembre à Mai',
    durationRecommended: '3-5 jours',
    tags: ['Criques', 'Écotourisme', 'Nature Sauvage', 'Détente'],
    topAttractions: [
      { name: 'Baie des Sirènes à Grand-Béréby', desc: 'L\'un des plus beaux spots balnéaires secrets de toute l\'Afrique de l\'Ouest.' },
      { name: 'Piscines Naturelles de Taki', desc: 'Bassins d\'eau de mer sculptés dans la roche volcanique.' },
      { name: 'Forêt Littorale Préservée', desc: 'Randonnées d\'observation des oiseaux et singes côtiers.' }
    ],
    gallery: [
      { url: '/images/smiling_hikers.jpg', title: 'Voyageurs aux piscines naturelles de Taki', tag: 'Piscines Naturelles' },
      { url: '/images/assinie_beach.jpg', title: 'Criques sauvages et sable doré de Grand-Béréby', tag: 'Criques Sauvages' },
      { url: '/images/campers_sunset.jpg', title: 'Coucher de soleil sur la Baie des Sirènes', tag: 'Baie des Sirènes' },
      { url: '/images/hikers_trail.jpg', title: 'Pistes d\'observation de la forêt littorale', tag: 'Sentiers Côtiers' },
      { url: '/images/ivory_gastronomy.jpg', title: 'Langoustes fraîches et poissons du jour', tag: 'Pêche du Jour' }
    ],
    testimonials: [
      {
        author: 'Aurélie & Paul N.',
        origin: 'Marseille, France',
        date: 'Il y a 3 semaines',
        rating: 5,
        title: 'Criques secrètes et nature sauvage',
        comment: 'La Baie des Sirènes et les piscines naturelles de Taki sont des coins de paradis préservés. Déconnexion totale, vagues douces et langoustes fraîches au bord de l\'eau.'
      }
    ]
  }
];

export const GASTRONOMY_DISHES = [
  {
    name: 'Le Garba National',
    category: 'Incontournable',
    desc: 'Semoule de manioc (Attiéké) servie avec un darne de thon frit croustillant, des piments frais pilés et oignons coupés en dés.',
    vibe: '🔥 Plat National #1',
    image: '/images/ivory_gastronomy.jpg'
  },
  {
    name: 'Alloco & Poisson Grillé',
    category: 'Street Food & Resto',
    desc: 'Bananes plantains mûres frites à l\'huile de palme ou d\'arachide, accompagnées d\'un capitaine ou mérou grillé au feu de bois.',
    vibe: '🍌 Sucré & Épicé',
    image: '/images/assinie_beach.jpg'
  },
  {
    name: 'Kedjenou de Poulet',
    category: 'Traditionnel',
    desc: 'Ragoût de poulet bicyclette mijoté à l\'étouffée dans une jarre en terre cuite (canari) avec tomates, aubergines et piments.',
    vibe: '🍲 Mijoté Ancestral',
    image: '/images/hero_abidjan.jpg'
  },
  {
    name: 'Sauce Graine & Attiéké',
    category: 'Spécialité',
    desc: 'Sauce onctueuse préparée à partir de la pulpe des noix de palme, accompagnée de viande de brousse ou de poisson fumé.',
    vibe: '🥥 Saveurs Intenses',
    image: '/images/yamoussoukro_basilica.jpg'
  }
];

export const GUIDES = [
  {
    id: 'guide-1',
    name: 'Kouassi Yao Édouard',
    title: 'Expert Culturel & Histoire d\'Abidjan & Yamoussoukro',
    experience: '12 ans d\'expérience',
    languages: ['Français', 'Anglais', 'Baoulé'],
    rating: 4.98,
    toursDone: 420,
    avatar: '👨🏽‍💼',
    specialty: 'Patrimoine & Musées',
    bio: 'Passionné par l\'histoire des royaumes ivoiriens et l\'urbanisme d\'Abidjan, je vous fais découvrir la Côte d\'Ivoire authentique en toute sécurité.'
  },
  {
    id: 'guide-2',
    name: 'Awa Koné',
    title: 'Guide Écotourisme & Randonnée (Man & Cascades)',
    experience: '8 ans d\'expérience',
    languages: ['Français', 'Dioula', 'Espagnol'],
    rating: 4.95,
    toursDone: 310,
    avatar: '👩🏽‍🌾',
    specialty: 'Nature, Cascades & Randonnée',
    bio: 'Née dans les montagnes du Tonkpi, je vous emmène au sommet du Mont Tonkpi et à la découverte des ponts de lianes ancestraux.'
  },
  {
    id: 'guide-3',
    name: 'Jean-Christophe Akré',
    title: 'Concierge VIP & Nightlife Abidjan / Assinie',
    experience: '10 ans d\'expérience',
    languages: ['Français', 'Anglais', 'Ébrié'],
    rating: 5.0,
    toursDone: 550,
    avatar: '🕺🏽',
    specialty: 'Gastronomie & Maquis VIP',
    bio: 'Spécialiste de la vie nocturne abidjanaise, des meilleurs maquis secrets et des yachts privés à Assinie.'
  }
];

export const AMBIENCE_TRACKS = [
  {
    id: 'zouglou',
    title: 'Ambiance Zouglou & Magic',
    genre: 'Zouglou',
    artist: 'Wôyô d\'Abidjan',
    desc: 'Musique philosophique et festive de la jeunesse ivoirienne, portée par le tam-tam et le maracas.',
    bpm: '115 BPM'
  },
  {
    id: 'coupe-decale',
    title: 'Coupé-Décalé Abidjan Direct',
    genre: 'Coupé-Décalé',
    artist: 'DJ Sagacité',
    desc: 'Rythme endiablé, basses puissantes et ambiance festive des plus grands clubs de la Rue Princesse.',
    bpm: '130 BPM'
  },
  {
    id: 'jazz-lagune',
    title: 'Saxo & Brise de la Lagune Ebrié',
    genre: 'Afro-Jazz Smooth',
    artist: 'Abidjan Sunset Ensemble',
    desc: 'Détente et élégance pour accompagner vos couchers de soleil sur la lagune.',
    bpm: '85 BPM'
  }
];

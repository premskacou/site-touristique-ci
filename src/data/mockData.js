export const DESTINATIONS = [
  {
    id: 'abidjan',
    name: 'Abidjan',
    tagline: 'La Perle des Lagunes & Capitale Économique',
    category: 'Business',
    region: 'Lagunes',
    image: '/images/abidjan/abidjan-main.jpg',
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
      { 
        url: '/images/abidjan/abidjan-bridge.jpg', 
        title: { fr: 'Pont Alassane Ouattara de nuit', en: 'Alassane Ouattara Bridge at night' }, 
        tag: { fr: 'Architecture Moderne', en: 'Modern Architecture' }, 
        desc: { fr: 'Un chef-d\'œuvre d\'ingénierie qui illumine majestueusement la lagune Ébrié à la tombée de la nuit.', en: 'An engineering masterpiece that majestically illuminates the Ébrié Lagoon at nightfall.' } 
      },
      { 
        url: '/images/abidjan/abidjan-cathedral.jpg', 
        title: { fr: 'Cathédrale Saint-Paul du Plateau', en: 'St. Paul\'s Cathedral of Plateau' }, 
        tag: { fr: 'Patrimoine & Foi', en: 'Heritage & Faith' }, 
        desc: { fr: 'L\'architecture audacieuse de cette cathédrale emblématique veille sur la capitale économique ivoirienne.', en: 'The bold architecture of this iconic cathedral watches over the Ivorian economic capital.' } 
      },
      { 
        url: '/images/abidjan/abidjan-stade.jpg', 
        title: { fr: 'Stade Olympique Alassane Ouattara', en: 'Alassane Ouattara Olympic Stadium' }, 
        tag: { fr: 'Ferveur Sportive', en: 'Sports Fervor' }, 
        desc: { fr: 'Surnommé "Arc de Triomphe", ce joyau architectural à Ébimpé est le temple de la passion sportive ivoirienne.', en: 'Nicknamed the "Arc de Triomphe", this architectural jewel in Ébimpé is the temple of Ivorian sports passion.' } 
      },
      { 
        url: '/images/abidjan/abidjan-parc.jpg', 
        title: { fr: 'Parc des Expositions d\'Abidjan', en: 'Abidjan Exhibition Center' }, 
        tag: { fr: 'Événementiel & Business', en: 'Events & Business' }, 
        desc: { fr: 'Un immense espace ultra-moderne conçu pour accueillir les plus grandes rencontres internationales en Afrique de l\'Ouest.', en: 'A huge, ultra-modern space designed to host the largest international meetings in West Africa.' } 
      },
      { 
        url: '/images/abidjan/abidjan-musee.jpg', 
        title: { fr: 'Musée des Civilisations de Côte d\'Ivoire', en: 'Museum of Civilizations of Ivory Coast' }, 
        tag: { fr: 'Art & Histoire', en: 'Art & History' }, 
        desc: { fr: 'Plongez dans l\'histoire riche et fascinante de la Côte d\'Ivoire à travers une collection inestimable d\'œuvres d\'art.', en: 'Dive into the rich and fascinating history of Ivory Coast through an invaluable collection of artworks.' } 
      },
      { 
        url: '/images/abidjan/abidjan-night.jpg', 
        title: { fr: 'Vibrante ambiance nocturne (Abidjan By Night)', en: 'Vibrant nightlife (Abidjan By Night)' }, 
        tag: { fr: 'Vie Nocturne', en: 'Nightlife' }, 
        desc: { fr: 'Quand le soleil se couche, Abidjan s\'éveille : maquis, rooftops et restaurants chics offrent une ambiance festive inégalée.', en: 'When the sun sets, Abidjan awakens: maquis, rooftops, and chic restaurants offer an unparalleled festive atmosphere.' } 
      }
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
    image: '/images/yamoussoukro/yamoussoukro-main.jpg',
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
      { 
        url: '/images/yamoussoukro/basilique-1.jpg', 
        title: { fr: 'Intérieur sous la coupole immense', en: 'Inside the massive dome' }, 
        tag: { fr: 'Architecture Majestueuse', en: 'Majestic Architecture' }, 
        desc: { fr: 'Une élévation vertigineuse sous la plus grande coupole du monde, ornée de détails dorés et de marbre importé d\'Italie.', en: 'A breathtaking elevation under the world\'s largest dome, adorned with golden details and marble imported from Italy.' } 
      },
      { 
        url: '/images/yamoussoukro/basilique-2.jpg', 
        title: { fr: 'Vitraux spectaculaires et couleurs', en: 'Spectacular stained glass' }, 
        tag: { fr: 'Lumière & Couleurs', en: 'Light & Colors' }, 
        desc: { fr: 'Avec ses 8 400 m² de vitraux, la basilique offre un spectacle lumineux unique qui évolue au fil de la journée.', en: 'With its 8,400 m² of stained glass, the basilica offers a unique light show that evolves throughout the day.' } 
      },
      { 
        url: '/images/yamoussoukro/lac-caimans.jpg', 
        title: { fr: 'Observation des Caïmans sacrés', en: 'Sacred crocodiles watching' }, 
        tag: { fr: 'Faune Locale', en: 'Local Wildlife' }, 
        desc: { fr: 'Assistez au rituel quotidien des célèbres caïmans qui protègent symboliquement l\'ancien Palais Présidentiel.', en: 'Witness the daily ritual of the famous crocodiles symbolically protecting the former Presidential Palace.' } 
      },
      { 
        url: '/images/yamoussoukro/basilique-tourisme.jpg', 
        title: { fr: 'Esplanade et majestueuses colonnades', en: 'Esplanade and majestic colonnades' }, 
        tag: { fr: 'Grandeur', en: 'Grandeur' }, 
        desc: { fr: 'Inspirée de la Place Saint-Pierre de Rome, cette esplanade grandiose peut accueillir des centaines de milliers de fidèles.', en: 'Inspired by St. Peter\'s Square in Rome, this grandiose esplanade can accommodate hundreds of thousands of worshippers.' } 
      },
      { 
        url: '/images/yamoussoukro/basilique-3.jpg', 
        title: { fr: 'La Basilique s\'illuminant de nuit', en: 'The Basilica illuminated at night' }, 
        tag: { fr: 'Atmosphère Nocturne', en: 'Night Atmosphere' }, 
        desc: { fr: 'À la tombée de la nuit, l\'édifice se pare d\'illuminations magiques, créant une atmosphère empreinte de spiritualité.', en: 'At nightfall, the building is adorned with magical illuminations, creating an atmosphere imbued with spirituality.' } 
      },
      { 
        url: '/images/yamoussoukro/yamoussoukro-main.jpg', 
        title: { fr: 'Vue d\'ensemble sur le chef-d\'œuvre', en: 'Overview of the masterpiece' }, 
        tag: { fr: 'Vue Principale', en: 'Main View' }, 
        desc: { fr: 'Symbole de la paix et de la vision du président Félix Houphouët-Boigny, émergeant tel un mirage de la savane.', en: 'A symbol of peace and the vision of President Félix Houphouët-Boigny, emerging like a mirage from the savannah.' } 
      }
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
    image: '/images/assinie/assinie-beach.jpg',
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
      { 
        url: '/images/assinie/assinie-main.jpg', 
        title: { fr: 'Sable fin et eaux turquoises', en: 'Fine sand and turquoise waters' }, 
        tag: { fr: 'Plage Paradisiaque', en: 'Paradisiacal Beach' }, 
        desc: { fr: 'Profitez des vastes étendues de sable blanc bordées de cocotiers, idéales pour se ressourcer loin de l\'agitation.', en: 'Enjoy the vast stretches of white sand lined with coconut trees, ideal for recharging away from the hustle and bustle.' } 
      },
      { 
        url: '/images/assinie/assinie-lagune.jpg', 
        title: { fr: 'La Lagune Aby rencontre l\'Océan', en: 'Aby Lagoon meets the Ocean' }, 
        tag: { fr: 'Nature Vierge', en: 'Untouched Nature' }, 
        desc: { fr: 'Découvrez la célèbre Passe d\'Assinie, un spectacle naturel où les eaux calmes de la lagune embrassent les vagues de l\'Atlantique.', en: 'Discover the famous Assinie Pass, a natural spectacle where the calm waters of the lagoon embrace the waves of the Atlantic.' } 
      },
      { 
        url: '/images/assinie/assinie-hotel.jpg', 
        title: { fr: 'Écolodges d\'exception pieds dans l\'eau', en: 'Exceptional waterfront ecolodges' }, 
        tag: { fr: 'Hébergement VIP', en: 'VIP Accommodation' }, 
        desc: { fr: 'Séjournez dans des hébergements de luxe parfaitement intégrés à la nature, offrant confort et vue imprenable sur l\'eau.', en: 'Stay in luxury accommodations perfectly integrated with nature, offering comfort and breathtaking views of the water.' } 
      },
      { 
        url: '/images/assinie/assinie-resort.jpg', 
        title: { fr: 'Détente absolue au Resort', en: 'Absolute relaxation at the Resort' }, 
        tag: { fr: 'Luxe & Détente', en: 'Luxury & Relaxation' }, 
        desc: { fr: 'Laissez-vous choyer dans les complexes hôteliers prestigieux avec piscines à débordement et services haut de gamme.', en: 'Let yourself be pampered in prestigious resort complexes with infinity pools and premium services.' } 
      },
      { 
        url: '/images/assinie/assinie-tourism.jpg', 
        title: { fr: 'L\'évasion tropicale par excellence', en: 'The ultimate tropical escape' }, 
        tag: { fr: 'Évasion', en: 'Escape' }, 
        desc: { fr: 'Une destination prisée par la jet-set et les amoureux de la nature, mêlant exclusivité et paysages grandioses.', en: 'A popular destination for the jet set and nature lovers, blending exclusivity with grandiose landscapes.' } 
      },
      { 
        url: '/images/assinie/assinie-beach-club.jpg', 
        title: { fr: 'Ambiance festive au Beach Club', en: 'Festive vibe at the Beach Club' }, 
        tag: { fr: 'Beach Club', en: 'Beach Club' }, 
        desc: { fr: 'Savourez un cocktail les pieds dans le sable, au rythme d\'une musique ensoleillée dans les célèbres clubs d\'Assinie.', en: 'Enjoy a cocktail with your feet in the sand, to the rhythm of sunny music in Assinie\'s famous clubs.' } 
      }
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
    image: '/images/man/man-cascade.jpg',
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
      { 
        url: '/images/man/man-top.jpg', 
        title: { fr: 'Massif des Dix-Huit Montagnes', en: 'Eighteen Mountains Massif' }, 
        tag: { fr: 'Panoramas Alpins', en: 'Alpine Panoramas' }, 
        desc: { fr: 'Admirez la vue imprenable depuis les sommets verdoyants qui entourent la ville, offrant un paysage à couper le souffle.', en: 'Enjoy the breathtaking view from the lush peaks surrounding the city, offering a stunning landscape.' } 
      },
      { 
        url: '/images/man/man-cascade.jpg', 
        title: { fr: 'Cascade Naturelle de Man', en: 'Man Natural Waterfall' }, 
        tag: { fr: 'Cascades Fraîches', en: 'Fresh Waterfalls' }, 
        desc: { fr: 'Une chute d\'eau spectaculaire nichée au cœur d\'une végétation luxuriante, idéale pour une baignade rafraîchissante.', en: 'A spectacular waterfall nestled in lush vegetation, ideal for a refreshing swim.' } 
      },
      { 
        url: '/images/man/man-liasse.jpg', 
        title: { fr: 'Pont de Lianes Sacré', en: 'Sacred Vine Bridge' }, 
        tag: { fr: 'Mystères & Légendes', en: 'Mysteries & Legends' }, 
        desc: { fr: 'Traversez ces ponts impressionnants tissés en une nuit par des initiés, un véritable chef-d\'œuvre d\'ingénierie traditionnelle.', en: 'Cross these impressive bridges woven in one night by initiates, a true masterpiece of traditional engineering.' } 
      },
      { 
        url: '/images/man/man-masques.jpg', 
        title: { fr: 'Masques Traditionnels', en: 'Traditional Masks' }, 
        tag: { fr: 'Culture Dan', en: 'Dan Culture' }, 
        desc: { fr: 'Plongez dans la richesse spirituelle de la région à travers ses masques sacrés et ses rituels ancestraux.', en: 'Immerse yourself in the spiritual richness of the region through its sacred masks and ancestral rituals.' } 
      },
      { 
        url: '/images/man/man-yacouba.jpg', 
        title: { fr: 'Danseuses Yacouba', en: 'Yacouba Dancers' }, 
        tag: { fr: 'Danses & Traditions', en: 'Dances & Traditions' }, 
        desc: { fr: 'Assistez aux performances envoûtantes des danseuses, célébrant l\'identité culturelle vibrante de l\'Ouest ivoirien.', en: 'Witness the mesmerizing performances of the dancers, celebrating the vibrant cultural identity of western Ivory Coast.' } 
      },
      { 
        url: '/images/man/man-drc.jpg', 
        title: { fr: 'Exploration de la nature sauvage', en: 'Exploring the wild nature' }, 
        tag: { fr: 'Aventure', en: 'Adventure' }, 
        desc: { fr: 'Partez en trek sur les sentiers escarpés du Mont Tonkpi et découvrez une faune et une flore exceptionnelles.', en: 'Go trekking on the steep trails of Mount Tonkpi and discover exceptional flora and fauna.' } 
      }
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
    image: '/images/gastronomie/gastro-plat.jpg',
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
      { 
        url: '/images/gastronomie/gastro-plat.jpg', 
        title: { fr: 'Le Foyer de la Gastronomie', en: 'The Heart of Gastronomy' }, 
        tag: { fr: 'Plats Emblématiques', en: 'Iconic Dishes' }, 
        desc: { fr: 'Un festin ivoirien traditionnel, riche en couleurs et en saveurs, reflétant la générosité locale.', en: 'A traditional Ivorian feast, rich in colors and flavors, reflecting local generosity.' } 
      },
      { 
        url: '/images/gastronomie/gastro-aloko.jpg', 
        title: { fr: 'Alloco & Poissons Braisés', en: 'Alloco & Braised Fish' }, 
        tag: { fr: 'Street Food', en: 'Street Food' }, 
        desc: { fr: 'Dégustez ces fameuses bananes plantains frites, croustillantes et fondantes, accompagnant parfaitement viandes et poissons.', en: 'Enjoy these famous fried plantains, crispy and melting, perfectly accompanying meats and fish.' } 
      },
      { 
        url: '/images/gastronomie/gastro-snails.jpg', 
        title: { fr: 'Spécialités Locales (Escargots)', en: 'Local Specialties (Snails)' }, 
        tag: { fr: 'Saveurs Uniques', en: 'Unique Flavors' }, 
        desc: { fr: 'Laissez-vous tenter par les mets les plus audacieux et prisés, épicés et préparés avec passion.', en: 'Let yourself be tempted by the most daring and prized dishes, spicy and prepared with passion.' } 
      },
      { 
        url: '/images/gastronomie/gastro-sauce.jpg', 
        title: { fr: 'Sauces Ivoiriennes & Piron', en: 'Ivorian Sauces & Piron' }, 
        tag: { fr: 'Mijotés', en: 'Stews' }, 
        desc: { fr: 'Les incontournables sauces aux textures riches et onctueuses, le secret des grands repas de famille.', en: 'The unmissable sauces with rich and creamy textures, the secret of great family meals.' } 
      },
      { 
        url: '/images/gastronomie/gastro-main.jpg', 
        title: { fr: 'Plat Traditionnel (Foutou/Attiéké)', en: 'Traditional Dish (Foutou/Attiéké)' }, 
        tag: { fr: 'Tradition', en: 'Tradition' }, 
        desc: { fr: 'Le cœur de la cuisine ivoirienne servi généreusement pour une expérience gustative inoubliable.', en: 'The heart of Ivorian cuisine generously served for an unforgettable tasting experience.' } 
      },
      { 
        url: '/images/gastronomie/gastro-efe.jpg', 
        title: { fr: 'Moments de Convivialité', en: 'Moments of Conviviality' }, 
        tag: { fr: 'Maquis', en: 'Maquis' }, 
        desc: { fr: 'Partagez un repas chaleureux dans l\'ambiance unique et vibrante des maquis ivoiriens.', en: 'Share a warm meal in the unique and vibrant atmosphere of Ivorian maquis.' } 
      }
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
    image: '/images/grand-bassam/gb-main.jpg',
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
      { 
        url: '/images/grand-bassam/gb-main.jpg', 
        title: { fr: 'Quartier France UNESCO', en: 'UNESCO France Quarter' }, 
        tag: { fr: 'Histoire', en: 'History' }, 
        desc: { fr: 'Flânez dans les ruelles coloniales aux bâtisses d\'époque, témoins silencieux de l\'histoire de la première capitale.', en: 'Stroll through colonial streets with period buildings, silent witnesses to the history of the first capital.' } 
      },
      { 
        url: '/images/grand-bassam/gb-musee.jpg', 
        title: { fr: 'Musée National du Costume', en: 'National Costume Museum' }, 
        tag: { fr: 'Patrimoine', en: 'Heritage' }, 
        desc: { fr: 'Ancien palais du gouverneur, il abrite aujourd\'hui la riche mémoire vestimentaire et culturelle du pays.', en: 'Former governor\'s palace, it now houses the rich clothing and cultural memory of the country.' } 
      },
      { 
        url: '/images/grand-bassam/gb-sculpture.jpg', 
        title: { fr: 'Artisanat & Sculptures', en: 'Crafts & Sculptures' }, 
        tag: { fr: 'Art', en: 'Art' }, 
        desc: { fr: 'Admirez le savoir-faire des artisans locaux avec leurs magnifiques sculptures sur bois, bronze et vanneries.', en: 'Admire the craftsmanship of local artisans with their beautiful wood, bronze, and basketry sculptures.' } 
      },
      { 
        url: '/images/grand-bassam/gb-azuretti.jpg', 
        title: { fr: 'Village d\'Azuretti', en: 'Azuretti Village' }, 
        tag: { fr: 'Tradition', en: 'Tradition' }, 
        desc: { fr: 'Découvrez ce charmant village de pêcheurs lové entre lagune et océan, où règne une atmosphère paisible.', en: 'Discover this charming fishing village nestled between lagoon and ocean, where a peaceful atmosphere reigns.' } 
      },
      { 
        url: '/images/grand-bassam/gb-phare.jpg', 
        title: { fr: 'Le Vieux Phare', en: 'The Old Lighthouse' }, 
        tag: { fr: 'Monument', en: 'Monument' }, 
        desc: { fr: 'Un repère emblématique surplombant la ville, guidant autrefois les navires et offrant une vue panoramique.', en: 'An iconic landmark overlooking the city, once guiding ships and offering a panoramic view.' } 
      },
      { 
        url: '/images/grand-bassam/gb-culture.jpg', 
        title: { fr: 'Centre Culturel', en: 'Cultural Center' }, 
        tag: { fr: 'Rencontres', en: 'Meetings' }, 
        desc: { fr: 'Le cœur battant de la scène artistique locale, lieu d\'échanges et de célébration de l\'identité ivoirienne.', en: 'The beating heart of the local art scene, a place for exchange and celebration of Ivorian identity.' } 
      }
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
    image: '/images/san-pedro/sp-monogaga.jpg',
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
      { 
        url: '/images/san-pedro/sp-monogaga.jpg', 
        title: { fr: 'La Baie des Sirènes', en: 'Mermaid Bay' }, 
        tag: { fr: 'Lieu Mythique', en: 'Mythical Place' }, 
        desc: { fr: 'Un cadre idyllique où le temps semble s\'arrêter, parfait pour se ressourcer loin de tout.', en: 'An idyllic setting where time seems to stand still, perfect for recharging away from it all.' } 
      },
      { 
        url: '/images/san-pedro/sp-main.jpg', 
        title: { fr: 'Plage de Monogaga', en: 'Monogaga Beach' }, 
        tag: { fr: 'Plage Mythique', en: 'Mythical Beach' }, 
        desc: { fr: 'Considérée comme la plus belle plage de Côte d\'Ivoire, un joyau de sable fin à l\'état brut.', en: 'Considered the most beautiful beach in Ivory Coast, a jewel of raw fine sand.' } 
      },
      { 
        url: '/images/san-pedro/sp-beach.jpg', 
        title: { fr: 'Les Plages Sauvages', en: 'Wild Beaches' }, 
        tag: { fr: 'Sable Doré', en: 'Golden Sand' }, 
        desc: { fr: 'Des kilomètres de côtes immaculées, offrant une déconnexion totale bercée par les vagues de l\'océan.', en: 'Kilometers of pristine coastlines, offering total disconnection rocked by ocean waves.' } 
      },
      { 
        url: '/images/san-pedro/sp-rocher.jpg', 
        title: { fr: 'Le Rocher des Amoureux', en: 'Lover\'s Rock' }, 
        tag: { fr: 'Curiosité Naturelle', en: 'Natural Curiosity' }, 
        desc: { fr: 'Découvrez les formations rocheuses spectaculaires de la région, véritables sculptures de la nature.', en: 'Discover the spectacular rock formations of the region, true sculptures of nature.' } 
      },
      { 
        url: '/images/san-pedro/sp-crique.jpg', 
        title: { fr: 'Criques Secrètes', en: 'Secret Coves' }, 
        tag: { fr: 'Évasion', en: 'Escape' }, 
        desc: { fr: 'Explorez des bassins naturels et des criques cachées, des refuges paradisiaques baignés de soleil.', en: 'Explore natural pools and hidden coves, paradisiacal refuges bathed in sunlight.' } 
      },
      { 
        url: '/images/san-pedro/sp-nature.jpg', 
        title: { fr: 'Nature Luxuriante', en: 'Lush Nature' }, 
        tag: { fr: 'Forêt Littorale', en: 'Coastal Forest' }, 
        desc: { fr: 'Une biodiversité incroyable où la dense forêt équatoriale vient embrasser l\'océan Atlantique.', en: 'Incredible biodiversity where the dense equatorial forest embraces the Atlantic Ocean.' } 
      }
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
    image: '/images/gastronomie/gastro-plat.jpg'
  },
  {
    name: 'Alloco & Poisson Grillé',
    category: 'Street Food & Resto',
    desc: 'Bananes plantains mûres frites à l\'huile de palme ou d\'arachide, accompagnées d\'un capitaine ou mérou grillé au feu de bois.',
    vibe: '🍌 Sucré & Épicé',
    image: '/images/gastronomie/gastro-aloko.jpg'
  },
  {
    name: 'Kedjenou de Poulet & Escargots',
    category: 'Traditionnel',
    desc: 'Ragoût de poulet bicyclette et escargots mijotés à l\'étouffée dans une jarre en terre cuite avec tomates, aubergines et piments.',
    vibe: '🍲 Mijoté Ancestral',
    image: '/images/gastronomie/gastro-sauce.jpg'
  },
  {
    name: 'Sauce Graine & Plastique Gourmet',
    category: 'Spécialité',
    desc: 'Sauce onctueuse préparée à partir de la pulpe des noix de palme, accompagnée de viande de brousse ou de poisson fumé.',
    vibe: '🥥 Saveurs Intenses',
    image: '/images/gastronomie/gastro-main.jpg'
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

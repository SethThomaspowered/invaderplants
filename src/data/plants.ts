// Data about invasive plant species in Kentucky
export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  identifyingFeatures: string[];
  impact: string;
  whereFound: string;
  imageUrl: string;
  difficultyLevel: 'easy' | 'medium' | 'hard';
}

export const invasivePlants: Plant[] = [
  {
    id: 'japanese-honeysuckle',
    name: 'Japanese Honeysuckle',
    scientificName: 'Lonicera japonica',
    description: 'Japanese Honeysuckle is a woody vine that can grow up to 80 feet long. It has fragrant white or yellow flowers and produces black berries.',
    identifyingFeatures: [
      'Fragrant white or yellow tubular flowers',
      'Opposite, oval leaves that stay green late into fall',
      'Woody vine that twines around other plants',
      'Small black berries in fall'
    ],
    impact: 'It can wrap around small trees and shrubs and kill them by blocking sunlight. It creates "mats" that prevent native plants from growing.',
    whereFound: 'Found in forests, fields, and along roads throughout Kentucky.',
    imageUrl: 'https://images.pexels.com/photos/7788525/pexels-photo-7788525.jpeg',
    difficultyLevel: 'easy'
  },
  {
    id: 'kudzu',
    name: 'Kudzu',
    scientificName: 'Pueraria montana',
    description: 'Kudzu is a fast-growing vine that can grow up to a foot per day! It covers trees, buildings, and anything in its path.',
    identifyingFeatures: [
      'Hairy vines that can be as thick as your arm',
      'Large leaves with three leaflets',
      'Sweet-smelling purple flowers in late summer',
      'Hairy seed pods that look like fuzzy bean pods'
    ],
    impact: 'Known as "the vine that ate the South," it smothers other plants and trees, eventually killing them by blocking sunlight.',
    whereFound: 'Common in southern and eastern Kentucky along roadsides and in abandoned fields.',
    imageUrl: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg',
    difficultyLevel: 'easy'
  },
  {
    id: 'japanese-barberry',
    name: 'Japanese Barberry',
    scientificName: 'Berberis thunbergii',
    description: 'Japanese Barberry is a spiny shrub with red berries. It was brought to America as a decorative plant for gardens.',
    identifyingFeatures: [
      'Small, rounded leaves that turn bright red in fall',
      'Sharp thorns along branches',
      'Small yellow flowers in spring',
      'Bright red berries that stay on the plant through winter'
    ],
    impact: 'Creates very dense thickets that crowd out native plants and provide perfect habitat for ticks that spread Lyme disease.',
    whereFound: 'Found in forests, fields, and gardens across Kentucky.',
    imageUrl: 'https://images.pexels.com/photos/4505947/pexels-photo-4505947.jpeg',
    difficultyLevel: 'medium'
  },
  {
    id: 'tree-of-heaven',
    name: 'Tree of Heaven',
    scientificName: 'Ailanthus altissima',
    description: 'Despite its name, this tree is not so heavenly! It grows very quickly and can reach 80 feet tall.',
    identifyingFeatures: [
      'Compound leaves with many leaflets that have a distinct bad smell when crushed',
      'Smooth stems with pale gray bark',
      'Reddish seed clusters that twist like helicopter blades',
      'Leaf scars on twigs shaped like a heart'
    ],
    impact: 'Produces chemicals that prevent other plants from growing nearby. It also grows very quickly, taking space and resources from native trees.',
    whereFound: 'Common in urban areas, along highways, and disturbed forests throughout Kentucky.',
    imageUrl: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    difficultyLevel: 'medium'
  },
  {
    id: 'multiflora-rose',
    name: 'Multiflora Rose',
    scientificName: 'Rosa multiflora',
    description: 'This thorny shrub can form impenetrable thickets. It was originally planted to control erosion and create living fences for livestock.',
    identifyingFeatures: [
      'Arching canes with sharp, curved thorns',
      'Clusters of many small white flowers in spring',
      'Compound leaves with 5-11 toothed leaflets',
      'Small red rose hips (fruits) that stay on the plant through winter'
    ],
    impact: 'Forms dense thickets that prevent native plants from growing and make areas impassable for humans and wildlife.',
    whereFound: 'Common in old fields, forest edges, and pastures throughout Kentucky.',
    imageUrl: 'https://images.pexels.com/photos/133472/pexels-photo-133472.jpeg',
    difficultyLevel: 'medium'
  },
  {
    id: 'garlic-mustard',
    name: 'Garlic Mustard',
    scientificName: 'Alliaria petiolata',
    description: 'Garlic Mustard is a biennial herb that smells like garlic when the leaves are crushed. It can quickly take over forest floors.',
    identifyingFeatures: [
      'Heart-shaped, toothed leaves',
      'Smells like garlic when crushed',
      'Small white flowers with four petals',
      'Long, skinny seed pods that look like green beans'
    ],
    impact: 'Produces chemicals that prevent tree seedlings and other forest plants from growing. Can completely cover a forest floor in just a few years.',
    whereFound: 'Found in forested areas throughout Kentucky, especially in moist, shaded areas.',
    imageUrl: 'https://images.pexels.com/photos/1634294/pexels-photo-1634294.jpeg',
    difficultyLevel: 'hard'
  }
];
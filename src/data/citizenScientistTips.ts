export interface Tip {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const citizenScientistTips: Tip[] = [
  {
    id: 'observe',
    title: 'Observe Carefully',
    description: 'Take your time to look at the whole plant. Notice the leaves, stems, flowers, and where it\'s growing. The more details you can see, the better!',
    icon: 'eye'
  },
  {
    id: 'document',
    title: 'Document What You Find',
    description: 'Take clear photos of the whole plant and close-ups of leaves, flowers, and stems. Write down where and when you saw it.',
    icon: 'camera'
  },
  {
    id: 'compare',
    title: 'Compare With Known Species',
    description: 'Use field guides or plant identification apps to compare your findings with known invasive species. Look for matching characteristics.',
    icon: 'search'
  },
  {
    id: 'report',
    title: 'Report Your Findings',
    description: 'Share what you find with adults or report to Kentucky\'s Invasive Plant Council. Your observations help scientists track the spread of invasive plants!',
    icon: 'send'
  },
  {
    id: 'safety',
    title: 'Stay Safe',
    description: 'Never touch plants you don\'t recognize. Some invasive plants can cause skin irritation or have thorns. Always go with an adult when exploring outdoors.',
    icon: 'shield'
  },
  {
    id: 'respect',
    title: 'Respect Nature',
    description: 'Don\'t pick or remove plants unless you\'re certain they\'re invasive and you have permission from an adult or land owner.',
    icon: 'heart'
  }
];
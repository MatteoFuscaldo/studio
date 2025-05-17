import type { ContentItem, ContentType } from '@/types/content';

// --- Define Cheers ---
const cheers: ContentItem[] = [
  {
    type: 'cheer',
    text: 'Brinda con la prima persona che hai conosciuto nel gruppo. jekill',
    imageUrl: '{{ site.baseurl }}/images/occhiali.png',
  },
  {
    type: 'cheer',
    text: 'Brinda con la prima persona che hai conosciuto nel gruppo. double',
    imageUrl: '../../images/occhiali.png',
  },
  {
    type: 'cheer',
    text: 'Brinda con la prima persona che hai conosciuto nel gruppo. single',
    imageUrl: '../images/occhiali.png',
  },
  {
    type: 'cheer',
    text: 'Brinda per ogni volta che hai detto "soffritto" questo mese.',
  },
  {
    type: 'cheer',
    text: 'Brinda con il più scarso a basket.',
    youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube ID
  },
   {
    type: 'cheer',
    text: 'Brinda con chi ti farebbe il culo a zombie.',
  },
  {
    type: 'cheer',
    text: 'Brindisi di gruppo.',
    imageUrl: 'https://picsum.photos/seed/cheers2/600/400',
  }
];

// --- Define Challenges ---
const challenges: ContentItem[] = [
  {
    type: 'challenge',
    text: 'Fai 10 flessioni. Ora!',
    imageUrl: 'https://picsum.photos/seed/challenge1/600/400',
  },
  {
    type: 'challenge',
    text: 'Bevi un cocktail dal naso',
    youtubeVideoId: 'AgS7AmDkNxY', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Mima di zappare a vigna',
    youtubeVideoId: 'JWl3t7N0YAY', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Te posso canta na canzone! Canta un ritornello in mezzo a una piazza / bar',
    youtubeVideoId: 'lawoYDTbcwU', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Cerca di vendere il tuo cellulare per un maximo ritorno',
    youtubeVideoId: 'qYubEfDfue4', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Questa è benzina! Fatti dare un accendino per accendere una sizza.',
    youtubeVideoId: '0c6980BkqOE', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Ho pagato e non me fanno entra! Paga da bere a uno del gruppo. Hai pagato ma non bevi.',
    youtubeVideoId: 'LBFg4kQUQLY', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Chiedi una sigaretta senza che nessuno chiami il 118',
    youtubeVideoId: 'MUAvAx9skgI', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: '15+18? Ripeti la tabellina 7 al contrario senza sbagliare, se sbagli bevi.',
    youtubeVideoId: '9tzXmOauEy0', // Example YouTube ID - maybe a karaoke track?
  },



  
];

// Combine all content
const allContent: ContentItem[] = [...cheers, ...challenges];

/**
 * Retrieves a random content item of the specified type.
 * @param type The type of content to retrieve ('cheer' or 'challenge').
 * @returns A random ContentItem object of the specified type, or null if no content of that type exists.
 */
export function getRandomContent(type: ContentType): ContentItem | null {
  const filteredContent = allContent.filter(item => item.type === type);
  if (filteredContent.length === 0) {
    return null; // No content of this type available
  }
  const randomIndex = Math.floor(Math.random() * filteredContent.length);
  return filteredContent[randomIndex];
}

/**
 * Retrieves all content items (useful if needed elsewhere, though not currently used by page).
 * @returns An array of all ContentItem objects.
 */
export function getAllContent(): ContentItem[] {
  return allContent;
}

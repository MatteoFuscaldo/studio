import type { ContentItem, ContentType } from '@/types/content';

// --- Define Cheers ---
const cheers: ContentItem[] = [
  {
    type: 'cheer',
    text: 'To the Groom! May your life together be full of love, and your fridge always full of beer!',
    imageUrl: 'https://picsum.photos/seed/cheers1/600/400',
  },
  {
    type: 'cheer',
    text: 'Cheers to the nights we\'ll never remember with the friends we\'ll never forget!',
  },
  {
    type: 'cheer',
    text: 'A toast to the bachelor! May he always remember the good times... especially tonight!',
    youtubeVideoId: 'dQw4w9WgXcQ', // Example YouTube ID
  },
   {
    type: 'cheer',
    text: 'To freedom, friendship, and the final countdown!',
  },
  {
    type: 'cheer',
    text: 'May your wedding day be just the start of a long and happy journey. Cheers!',
    imageUrl: 'https://picsum.photos/seed/cheers2/600/400',
  }
];

// --- Define Challenges ---
const challenges: ContentItem[] = [
  {
    type: 'challenge',
    text: 'Challenge: Get a photo with someone wearing a wedding dress (not the bride!).',
    imageUrl: 'https://picsum.photos/seed/challenge1/600/400',
  },
  {
    type: 'challenge',
    text: 'Challenge: Serenade a stranger with a love song.',
    youtubeVideoId: 'o_v9MY_FMcw', // Example YouTube ID - maybe a karaoke track?
  },
  {
    type: 'challenge',
    text: 'Challenge: Convince the bartender to give you a free drink using only mime.',
  },
  {
    type: 'challenge',
    text: 'Challenge: Find someone with the same first name as the bride-to-be and get their autograph.',
    imageUrl: 'https://picsum.photos/seed/challenge2/600/400',
  },
  {
    type: 'challenge',
    text: 'Challenge: Do 10 push-ups right here, right now!',
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

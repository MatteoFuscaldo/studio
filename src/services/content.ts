import type { ContentItem, ContentType } from '@/types/content';

const BASE_PATH = '/studio';

// --- Define Cheers ---
const cheers: ContentItem[] = [
  {
    type: 'cheer',
    text: 'Brinda con la prima persona del gruppo con cui sei andato in vacanza.',
    imageUrl: `${BASE_PATH}/images/tuffi.jpg`,
  },
  {
    type: 'cheer',
    text: 'Brinda per ogni volta che hai detto "soffritto" questo mese.',
    imageUrl: `${BASE_PATH}/images/soffritto.jpg`,
  },
  {
    type: 'cheer',
    text: 'Brinda con il più scarso a basket.',
    imageUrl: `${BASE_PATH}/images/basket.jpg`,
  },
   {
    type: 'cheer',
    text: 'Brinda con chi ti farebbe il culo a zombie.',
    imageUrl: `https://hips.hearstapps.com/hmg-prod/images/cicciogamer-1571412863.jpg?resize=640:*`,
  },
  {
    type: 'cheer',
    text: 'Brindisi di gruppo.',
    imageUrl: `${BASE_PATH}/images/brindisi.jpg`,
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha avuto piu infortuni',
  },
  {
    type: 'cheer',
    text: 'Brinda con il miglior nuotatore',
  },
  {
    type: 'cheer',
    text: 'Brinda con il migliore amico della palla.',
  },
  {
    type: 'cheer',
    text: 'Brinda con un prof.',
  },
  {
    type: 'cheer',
    text: 'Brinda con il piu milanese del gruppo.',
  },
  {
    type: 'cheer',
    text: 'Brinda con il piu fisicato del gruppo.',
  },
  {
    type: 'cheer',
    text: 'Brinda con il piu tatuato del gruppo.',
  },
  {
    type: 'cheer',
    text: 'Brinda con un cazzo di ingegnere.',
  },
  {
    type: 'cheer',
    text: 'Brinda con il più casinista del gruppo.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha fatto la figuraccia più epica.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più stronzo della compagnia.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il tatuaggio più tamarro.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più ubriacone del gruppo.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il soprannome più volgare.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più fissato con le tipe.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha la macchina più schifosa.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più incasinato con i soldi.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha la ex più pazza.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più negato a ballare.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il lavoro più schifoso.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più fissato col porno.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha combinato il casino più grosso.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha la risata più schifosa.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più fissato con le scommesse.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il tatuaggio più imbarazzante.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più negato con le tipe.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha fatto il viaggio più sfigato.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più famoso per le cazzate.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il capo più rompipalle.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più ossessionato dalla palestra.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il vizio più schifoso.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più tamarro del gruppo.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più famoso per le corna fatte.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il fetish più assurdo.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più incasinato con le droghe.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha il tatuaggio più osceno.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più fissato con le stronzate online.'
  },
  {
    type: 'cheer',
    text: 'Brinda con chi ha fatto la scopata più imbarazzante.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più noto per le sbronze da coma.'
  },
  {
    type: 'cheer',
    text: 'Brinda con il più cazzone del gruppo.'
  }
];

// --- Define Challenges ---
const challenges: ContentItem[] = [
  {
    type: 'challenge',
    text: 'Fai 10 flessioni. Ora!',
    imageUrl: `${BASE_PATH}/images/superman.jpg`,
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
  {
    type: 'challenge',
    text: 'Fai una garo di sputo con Mirko',
    imageUrl: `${BASE_PATH}/images/sputo.jpg`,
  },
  {
    type: 'challenge',
    text: 'Canta una serenata a uno sconosciuto in strada'
  },
  {
    type: 'challenge',
    text: 'Chiedi a una cameriera di inventare un cocktail e bevilo'
  },
  {
    type: 'challenge',
    text: 'Indossa un capo di abbigliamento al contrario per un’ora'
  },
  {
    type: 'challenge',
    text: 'Convinci uno sconosciuto a scambiare un accessorio con te'
  },
  {
    type: 'challenge',
    text: 'Fai un brindisi epico in un bar davanti a tutti'
  },
  {
    type: 'challenge',
    text: 'Chiedi a un passante di consigliarti una mossa di ballo e mostrala'
  },
  {
    type: 'challenge',
    text: 'Fai una gara di ballo con un amico in mezzo alla strada'
  },
  {
    type: 'challenge',
    text: 'Ordina un piatto a sorpresa al ristorante e mangialo'
  },
  {
    type: 'challenge',
    text: 'Inventa un soprannome per ogni partecipante e usalo tutta la sera'
  },
  {
    type: 'challenge',
    text: 'Convinci un gruppo di persone a fare un trenino con te'
  }
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

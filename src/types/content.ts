/**
 * Represents a type of content, either a 'cheer' or a 'challenge'.
 */
export type ContentType = 'cheer' | 'challenge';

/**
 * Represents a content item with text, optional image URL, and optional YouTube video ID.
 */
export interface ContentItem {
  /**
   * The type of content ('cheer' or 'challenge').
   */
  type: ContentType;
  /**
   * The text content of the item.
   */
  text: string;
  /**
   * An optional URL to an image. Use picsum for placeholders if needed.
   */
  imageUrl?: string;
  /**
   * An optional YouTube video ID.
   */
  youtubeVideoId?: string;
  /**
   * Unique identifier for the content item
   */
  id?: string;
}

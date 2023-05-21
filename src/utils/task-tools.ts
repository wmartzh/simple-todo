import { TagType } from "../types/tasks";

const TILE_REGEX = /^(.*?)\s?\d{1,2}:\d{2}\s?[ap]m/;
const TIME_REGEX = /\b\d{1,2}:\d{2}\s?[ap]m\b/i;
const TAG_REGEX = /#(\w+)/g;
export function extractTitle(text: string): string | undefined {
  const match = text.match(TILE_REGEX);
  return match ? match[1].trim() : undefined;
}

export function extractTime(text: string): string | undefined {
  const match = text.match(TIME_REGEX);
  return match ? match[0].trim() : undefined;
}

export function extractTags(text: string, tags: TagType[]): TagType[] {
  const matchedTags: TagType[] = [];

  const matches = text.match(TAG_REGEX);
  if (matches) {
    for (const tagName of matches) {
      const trimmedTagName = tagName.trim().replace("#", "");
      const matchedTag = tags.find(
        (tag) => tag.name?.toLowerCase() === trimmedTagName.toLocaleLowerCase()
      );
      if (matchedTag) {
        matchedTags.push(matchedTag);
      }
    }
  }

  return matchedTags;
}

import {contains} from './string';

function appendProtocol(link: string, useHttps: boolean = false): string {
  const protocol = `http${useHttps ? 's' : ''}`;
  const clearLink = link.replace(/^https?:\/\//,'');

  return `${protocol}://${clearLink}`;
}

function isValidLink(link: string): boolean {
  try {
    const url = new URL(appendProtocol(link, true));

    return contains(url.hostname, 'youtube') &&
           contains(url.pathname, '/watch') &&
           url.searchParams.get('v') !== null;
  } catch (e) { return false; }
}

function getLinkFromId(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export { isValidLink, getLinkFromId };
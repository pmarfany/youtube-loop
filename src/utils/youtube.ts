import {contains} from './string';

const HOSTNAME = 'youtube';
const PATHNAME = '/watch';
const ID_PARAM = 'v';

function appendProtocol(link: string, useHttps: boolean = false): string {
  const protocol = `http${useHttps ? 's' : ''}`;
  const clearLink = link.replace(/^https?:\/\//,'');

  return `${protocol}://${clearLink}`;
}

function isValidLink(link: string): boolean {
  try {
    const url = new URL(appendProtocol(link, true));

    return contains(url.hostname, HOSTNAME) &&
           contains(url.pathname, PATHNAME) &&
           url.searchParams.get(ID_PARAM) !== null;
  } catch (e) { return false; }
}

function getLinkFromId(videoId: string): string {
  return `https://www.${HOSTNAME}.com${PATHNAME}?${ID_PARAM}=${videoId}`;
}

export { ID_PARAM, isValidLink, getLinkFromId };
export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  scope: string;
  stack: string;
  href: string;
  linkLabel: string;
  status: string;
  features: string[];
};

export const projects: Project[] = [
  {
    slug: 'sift',
    title: 'Sift',
    type: 'Research infrastructure',
    description: 'A local research engine that searches, crawls, indexes, and synthesizes the web while keeping the material close at hand.',
    scope: 'A personal research engine for moving from a question to a sourced, searchable body of material without handing the whole workflow to a cloud service.',
    stack: 'Python · SQLite FTS5 · LLM APIs',
    href: 'https://github.com/gh0stprince/sift',
    linkLabel: 'View project',
    status: 'public repository',
    features: ['Web search and full-page extraction', 'SQLite full-text indexing', 'Recursive research pulses', 'RSS and Atom feed ingestion', 'Streaming synthesis with inline citations'],
  },
  {
    slug: 'scribble',
    title: 'Scribble',
    type: 'Creative tools',
    description: 'A handwriting-to-text system built around drawing, on-device recognition, local persistence, and offline-friendly work.',
    scope: 'A connected writing system spanning handwritten input, OCR, local notebooks, and an offline queue so the work remains available when the network does not.',
    stack: 'TypeScript · Go · Tesseract.js · PWA',
    href: 'https://github.com/gh0stprince',
    linkLabel: 'Profile / private build',
    status: 'private build',
    features: ['Canvas-based handwriting input', 'OCR-assisted text conversion', 'IndexedDB local persistence', 'Offline submission queue', 'Bridge-ready web architecture'],
  },
  {
    slug: 'contract-autopsy',
    title: 'Contract Autopsy',
    type: 'On-chain tooling',
    description: 'A plain-English post-mortem for ERC-721 contracts, turning on-chain state into a report people can actually read.',
    scope: 'A diagnostic tool that translates contract state into a readable report instead of assuming the user wants to inspect raw chain data or ABI output.',
    stack: 'TypeScript · OpenSea SDK · Base',
    href: 'https://github.com/gh0stprince',
    linkLabel: 'Profile / private build',
    status: 'private build',
    features: ['ERC-721 contract inspection', 'Death and liveness signals', 'Mint and metadata checks', 'Holder-to-supply analysis', 'Plain-English post-mortem output'],
  },
  {
    slug: 'inn-protocol',
    title: 'Inn Protocol',
    type: 'Protocol design',
    description: 'An agent-first application protocol for communication across a trusted private network, with a formal specification and reference implementation.',
    scope: 'A small application-layer protocol for trusted agent communication inside a private network, designed around readable messages and a documented wire format.',
    stack: 'Python · TCP · WireGuard · 333 tests',
    href: 'https://github.com/gh0stprince',
    linkLabel: 'Profile / local build',
    status: 'local build',
    features: ['Agent-first inn:// protocol', 'TCP server and client reference implementation', 'WireGuard / tailnet trust model', 'Formal protocol specification', '333 passing tests'],
  },
];

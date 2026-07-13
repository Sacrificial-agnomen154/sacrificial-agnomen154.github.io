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
  references: string[];
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
    references: ['sift/README.md'],
  },
  {
    slug: 'scribble',
    title: 'Scribble',
    type: 'Creative tools',
    description: 'A tablet-first canvas for handwriting, browser-side OCR, local notebooks, and an offline FIFO send queue.',
    scope: 'A Phase 1 web MVP that keeps the writing flow local: draw on the canvas, recognize with Tesseract.js, persist notebooks in IndexedDB, and queue sends before transport.',
    stack: 'TypeScript · Go · Tesseract.js · PWA',
    href: 'https://github.com/gh0stprince',
    linkLabel: 'Profile / private build',
    status: 'private build',
    features: ['Vite and TypeScript tablet-first canvas', 'Tesseract.js browser-side OCR', 'Dexie / IndexedDB notebooks', 'Persist-before-transport send semantics', 'Oldest-first offline FIFO queue', 'Go same-origin API proxy'],
    references: ['scribble-web/README.md', 'scribble-web/web/README.md'],
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
    references: ['contract-autopsy/README.md'],
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
    references: ['inn/README.md', 'inn/SPEC.md'],
  },
];

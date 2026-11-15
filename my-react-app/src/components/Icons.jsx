const base = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const Logo = () => (
  <svg {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><path d="M10 8.5v7l5.5-3.5z" fill="currentColor" /></svg>
);
export const HomeIcon = () => (
  <svg {...base}><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" /></svg>
);
export const ReelsIcon = () => (
  <svg {...base}><rect x="3" y="3" width="18" height="18" rx="5" /><path d="M3 9h18M9 3l3 6M15 3l3 6" /><path d="M10.5 12.5v5l4-2.5z" fill="currentColor" /></svg>
);
export const HeartIcon = () => (
  <svg {...base}><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" /></svg>
);
export const MessageIcon = () => (
  <svg {...base}><path d="M12 3a9 9 0 1 0 4.5 16.8L21 21l-1.3-4.3A9 9 0 0 0 12 3z" /><path d="M7.5 13.5l3.2-3.4 2 2 3.3-2.8" /></svg>
);
export const CommentIcon = () => (
  <svg {...base}><path d="M12 3a9 9 0 1 0 4.5 16.8L21 21l-1.3-4.3A9 9 0 0 0 12 3z" /></svg>
);
export const ProfileIcon = () => (
  <svg {...base}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6 18.5c1.5-2.5 3.5-3.5 6-3.5s4.5 1 6 3.5" /></svg>
);
export const ShareIcon = () => (
  <svg {...base}><path d="M21 3L10 14M21 3l-7 18-4-7-7-4z" /></svg>
);
export const SendIcon = () => (
  <svg {...base}><path d="M21 3L3 10l7 3 3 7z" /></svg>
);
export const BookmarkIcon = () => (
  <svg {...base}><path d="M6 3h12v18l-6-5-6 5z" /></svg>
);
export const MoreIcon = () => (
  <svg {...base}><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg>
);
export const ChevronUp = () => (
  <svg {...base} strokeWidth={2.4}><path d="M5 15l7-7 7 7" /></svg>
);
export const ChevronDown = () => (
  <svg {...base} strokeWidth={2.4}><path d="M5 9l7 7 7-7" /></svg>
);
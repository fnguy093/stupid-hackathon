// Swap `video` for a real file/URL (e.g. "/dog.mp4") to play actual footage.
export const reels = [
    { id: 1, emoji: "🐕", avatar: "🐶", handle: "@thecutestmax", totalLikes: "1.2M", caption: "Absolute vibe #dogsofinsta #cutedogs", likes: 150000, score: 96, video: null },
    { id: 2, emoji: "🐈", avatar: "🐱", handle: "@whiskerwave", totalLikes: "860K", caption: "Monday mood #catsofinsta #zoomies", likes: 92000, score: 88, video: null },
    { id: 3, emoji: "🦜", avatar: "🦜", handle: "@birdbrained", totalLikes: "430K", caption: "He learned a new word #parrot", likes: 48000, score: 91, video: null },
  ];
  
  export const formatCount = (n) =>
    n >= 1000 ? (n / 1000).toFixed(n % 1000 ? 1 : 0).replace(/\.0$/, "") + "k" : String(n);
// 📊 src/data/mockData.js

// ========================
// 📈 Daily Engagement Data (Line Chart)
// ========================
export const dailyEngagement = [
  { day: "Mon", value: 320 },
  { day: "Tue", value: 450 },
  { day: "Wed", value: 380 },
  { day: "Thu", value: 520 },
  { day: "Fri", value: 610 },
  { day: "Sat", value: 720 },
  { day: "Sun", value: 690 },
];

// ========================
// 🧩 Platform-Level Engagement (Pie Chart)
// ========================
export const platforms = [
  { platform: "Instagram", users: 5200 },
  { platform: "Twitter", users: 3100 },
  { platform: "LinkedIn", users: 1900 },
  { platform: "YouTube", users: 4300 },
];

// ========================
// 📊 Monthly Audience Growth (Bar Chart)
// ========================
export const timeline = [
  { month: "Jan", engagement: 420 },
  { month: "Feb", engagement: 510 },
  { month: "Mar", engagement: 600 },
  { month: "Apr", engagement: 710 },
  { month: "May", engagement: 820 },
  { month: "Jun", engagement: 880 },
  { month: "Jul", engagement: 960 },
  { month: "Aug", engagement: 1040 },
  { month: "Sep", engagement: 980 },
  { month: "Oct", engagement: 1100 },
];

// ========================
// ❤️ Engagement Types (Optional Chart)
// ========================
export const engagementTypes = [
  { type: "Likes", value: 400 },
  { type: "Comments", value: 300 },
  { type: "Shares", value: 200 },
  { type: "Saves", value: 150 },
];

// ========================
// 🌐 Post Reach by Platform (Bar Chart)
// ========================
export const postReach = [
  { platform: "Instagram", reach: 15000 },
  { platform: "Twitter", reach: 9000 },
  { platform: "LinkedIn", reach: 7000 },
  { platform: "YouTube", reach: 12000 },
];

// ========================
// 😊 Sentiment Data (Pie Chart)
// ========================
export const sentimentData = [
  { name: "Positive", value: 68 },
  { name: "Neutral", value: 22 },
  { name: "Negative", value: 10 },
];

// ========================
// 📊 Analytics Page Data
// ========================

// Platform-level deep analytics (Bar Chart)
export const analyticsData = [
  { platform: "Instagram", engagement: 8200, reach: 12000, impressions: 18000 },
  { platform: "Twitter", engagement: 4300, reach: 9600, impressions: 13000 },
  { platform: "YouTube", engagement: 10200, reach: 14500, impressions: 24000 },
  { platform: "LinkedIn", engagement: 3900, reach: 8500, impressions: 11000 },
];

// Content performance (Radar Chart)
export const contentPerformance = [
  { metric: "Reels", value: 85 },
  { metric: "Posts", value: 65 },
  { metric: "Stories", value: 50 },
  { metric: "Comments", value: 70 },
  { metric: "Shares", value: 60 },
];

// Weekly audience sentiment trend (Area Chart)
export const sentimentTrend = [
  { day: "Mon", positive: 70, neutral: 20, negative: 10 },
  { day: "Tue", positive: 68, neutral: 22, negative: 10 },
  { day: "Wed", positive: 75, neutral: 15, negative: 10 },
  { day: "Thu", positive: 73, neutral: 18, negative: 9 },
  { day: "Fri", positive: 80, neutral: 12, negative: 8 },
  { day: "Sat", positive: 85, neutral: 10, negative: 5 },
  { day: "Sun", positive: 78, neutral: 14, negative: 8 },
];

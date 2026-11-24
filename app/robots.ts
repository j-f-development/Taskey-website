import { MetadataRoute } from "next";

/**
 * Shared disallow rules for every crawler.
 * Named crawler entries remain in the list as explicit allow-signals for AI
 * search indexes (Google-Extended, GPTBot, ClaudeBot, PerplexityBot, etc.),
 * so they can see they are deliberately welcomed rather than defaulting to
 * the wildcard rule.
 */
const DISALLOW = [
  "/api/",
  "/410",
  "/dashboard",
  "/signup",
  "/redesign-preview",
  "/en/redesign-preview",
  "/fr/redesign-preview",
];

const USER_AGENTS = [
  // Default
  "*",
  // Classic search engines
  "Googlebot",
  "Bingbot",
  "msnbot",
  "BingPreview",
  "AdIdxBot",
  "DuckDuckBot",
  "YandexBot",
  "Applebot",
  "Baiduspider",
  "Slurp",
  "Seznambot",
  // AI search and training crawlers
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "facebookexternalhit",
  "LinkedInBot",
  "Twitterbot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "YouBot",
  "MistralAI-User",
  "Amazonbot",
  "DuckAssistBot",
  "Diffbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: "/",
      disallow: DISALLOW,
    })),
    sitemap: "https://www.taskeyapp.com/sitemap.xml",
    host: "https://www.taskeyapp.com",
  };
}

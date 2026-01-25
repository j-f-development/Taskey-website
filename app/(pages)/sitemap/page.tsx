import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Übersicht aller Seiten auf Taskey.de",
  robots: {
    index: true,
    follow: true,
  },
};

// Redirect to /sitemap from root
export default function SitemapRedirect() {
  redirect('/sitemap-html');
}

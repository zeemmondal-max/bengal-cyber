import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions | Bengal Cyber - Digital Marketing Agency Bangladesh",
  description: "Official Terms and Conditions for Bengal Cyber. Comprehensive guidelines covering our digital marketing, website design, performance media buying, payment terms, and Bangladesh legal compliance.",
  keywords: [
    "Bengal Cyber Terms and Conditions",
    "Digital Marketing Agency Bangladesh Terms",
    "Media Buying Agreement Dhaka",
    "Website Design Contract Bangladesh",
    "Digital Marketing Legal Guidelines",
    "Ad Spend VAT Bangladesh NBR",
    "Bengal Cyber Legal Policy"
  ],
  alternates: {
    canonical: "https://bengalcyber.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Bengal Cyber",
    description: "Legal policies, service scopes, and client guidelines for Bengal Cyber - Bangladesh's premier digital marketing & web design agency.",
    url: "https://bengalcyber.com/terms",
    siteName: "Bengal Cyber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Bengal Cyber",
    description: "Official client guidelines, payment milestones, and legal policies for digital marketing services in Bangladesh.",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}

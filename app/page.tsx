import HomeHero from "./components/HomeHero";
import TrendingNow from "./components/TrendingNow";
import CreatorTools from "./components/CreatorTools";
import CreatorEconomy from "./components/CreatorEconomy";
import FeaturedCreators from "./components/FeaturedCreators";
import SuccessStories from "./components/SuccessStories";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import NewsletterSignup from "./components/NewsletterSignup";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <TrendingNow />
      <CreatorTools />
      <CreatorEconomy />
      <FeaturedCreators />
      <SuccessStories />
      <PricingSection />
      <FAQSection />
      <NewsletterSignup />
    </main>
  );
}

import Head from 'next/head';
import data from '../../data/portfolio.json';

const SEO = ({ title, description, image }) => {
  const seoData = {
    title: title || `${data.name} - Data & Analytics Engineer`,
    description: description || "Data & Analytics Engineer and founder of HakunaMatata AI, helping startups and SMEs navigate data, AI, and digital transformation.",
    image: image || "https://johnaschami.vercel.app/images/profile.jpg", // Add your profile image URL
    url: "https://johnaschami.vercel.app",
  };

  return (
    <Head>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={seoData.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoData.url} />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={seoData.image} />

      {/* Additional SEO tags */}
      <meta name="keywords" content="data engineer, analytics, AI, digital transformation, Johnas Chami, HakunaMatata AI" />
      <meta name="author" content={data.name} />
      <link rel="canonical" href={seoData.url} />
    </Head>
  );
};

export default SEO; 
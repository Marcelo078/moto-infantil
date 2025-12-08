import { Helmet } from "react-helmet-async";

interface WebsiteJsonLdProps {
  type: "website";
}

interface ArticleJsonLdProps {
  type: "article";
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
}

interface ProductJsonLdProps {
  type: "product";
  name: string;
  description: string;
  image?: string;
  brand?: string;
  sku?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

interface FAQJsonLdProps {
  type: "faq";
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

interface BreadcrumbJsonLdProps {
  type: "breadcrumb";
  items: Array<{
    name: string;
    url: string;
  }>;
}

type JsonLdProps = 
  | WebsiteJsonLdProps 
  | ArticleJsonLdProps 
  | ProductJsonLdProps 
  | FAQJsonLdProps
  | BreadcrumbJsonLdProps;

const JsonLd = (props: JsonLdProps) => {
  let jsonLd: object;

  switch (props.type) {
    case "website":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Melhores Motos Infantil Elétrica",
        description: "O melhor portal de análises e comparativos de motos elétricas infantis do Brasil",
        url: window.location.origin,
        potentialAction: {
          "@type": "SearchAction",
          target: `${window.location.origin}/busca?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      };
      break;

    case "article":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: props.title,
        description: props.description,
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        author: {
          "@type": "Person",
          name: props.author
        },
        publisher: {
          "@type": "Organization",
          name: "Melhores Motos Infantil Elétrica",
          logo: {
            "@type": "ImageObject",
            url: `${window.location.origin}/logo.png`
          }
        },
        image: props.image,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": window.location.href
        }
      };
      break;

    case "product":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: props.name,
        description: props.description,
        image: props.image,
        brand: props.brand ? {
          "@type": "Brand",
          name: props.brand
        } : undefined,
        sku: props.sku,
        aggregateRating: props.aggregateRating ? {
          "@type": "AggregateRating",
          ratingValue: props.aggregateRating.ratingValue,
          reviewCount: props.aggregateRating.reviewCount
        } : undefined
      };
      break;

    case "faq":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: props.questions.map(q => ({
          "@type": "Question",
          name: q.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: q.answer
          }
        }))
      };
      break;

    case "breadcrumb":
      jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: props.items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };
      break;

    default:
      jsonLd = {};
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default JsonLd;

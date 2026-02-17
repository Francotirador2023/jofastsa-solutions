import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

export const SEOHead = ({
    title = 'Jofastsa Consulting | Agencia de Consultoría y Estrategia de Datos',
    description = 'Transformamos ideas en soluciones digitales. Desarrollo Web, Apps Móviles, IA y Cloud Computing para escalar tu negocio.',
    image = '/og-image.jpg',
    url = 'https://jofastsa.com'
}: SEOHeadProps) => {
    const siteTitle = title.includes('Jofastsa') ? title : `${title} | Jofastsa Consulting`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={description} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
        </Helmet>
    );
};

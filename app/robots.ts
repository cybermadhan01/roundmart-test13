import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/checkout', // Don't index checkout page
        },
        sitemap: 'https://roundmart.com/sitemap.xml',
    };
}

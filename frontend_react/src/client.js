import sanityclient from '@sanity/client';
import ImageUrlBuilder from  '@sanity/image-url';

export const client = sanityclient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-08-07',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
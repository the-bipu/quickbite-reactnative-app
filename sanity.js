import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: "qxr3am6t",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
});

const builder = imgUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;




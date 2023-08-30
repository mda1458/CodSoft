import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const token = import.meta.env.VITE_SANITY_TOKEN;
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const sanityClient = createClient({
  projectId,
  dataset: "production",
  useCdn: true,
  token,
});


const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => {
  return builder.image(source);
};

export default sanityClient;


import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2024-03-01',
    dataset: 'production',
    projectId: 'dhn2e9ju',
    useCdn: false,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
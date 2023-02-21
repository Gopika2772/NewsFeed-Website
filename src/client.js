import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "notf8xbo",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-03-25"
});
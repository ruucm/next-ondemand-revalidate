import { RevalidateButton } from "../../components/RevalidateButton";
import { getResolvedUrl } from "../../utils";

export const dynamic = "force-static",
  dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const url = `https://source.unsplash.com/random/?${id}`;
  const searchedURL: any = await getResolvedUrl(url);

  return (
    <div>
      searching: {url}
      <br />
      <RevalidateButton pageId={id} />
      <img src={searchedURL} style={{ width: "100%" }} />
    </div>
  );
}

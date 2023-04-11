import Link from "next/link";

export default async function IssueLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <main>
      <div>
        <div>
          <a
            href={`https://github.com/leerob/on-demand-isr/issues/${params.id}`}
            target="_blank"
            rel="noreferrer"
          >
            #{params.id}
          </a>
        </div>
      </div>
      {children}
    </main>
  );
}

export const metadata = {
  title: "Search Images (by params)",
  description: "(Revalidate Test)",
};

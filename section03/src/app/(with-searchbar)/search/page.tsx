import ClientComponent from "@/components/client-component";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return (
    <div>search page : {q}</div>
    <ClientComponent>
      <></>
    </ClientComponent>
  )
}


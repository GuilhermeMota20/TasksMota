export default async function Head({ params }: { params: { dir: string } }) {
  return (
    <>
      <title>ToDoTask. | Diretorio {params?.dir}</title>
    </>
  );
}
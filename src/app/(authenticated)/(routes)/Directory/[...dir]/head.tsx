export default async function Head({ params }: { params: { dir: string } }) {
  return (
    <>
      <head>
        <title>ToDoTask. | Diretorio {params?.dir}</title>
      </head>
    </>
  );
}
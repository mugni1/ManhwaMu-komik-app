export default async function ({ params }) {
  const { slug } = await params;
  return <h1>Ini detail {slug}</h1>;
}

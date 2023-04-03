import Layout from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <article style={{ display: "grid", justifyContent: "center" }}>
        <h1>Home</h1>
      </article>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

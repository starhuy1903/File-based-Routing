import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return <div>The Portfolio Project Page</div>;
}

export default PortfolioProjectPage;

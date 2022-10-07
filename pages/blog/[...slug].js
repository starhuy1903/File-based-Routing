import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query);
  return <div>The Blog Posts</div>;
}

export default BlogPostsPage;

import { NextPage } from "next";
import Link from "next/link";

interface Props {
  title: string;
  description: string;
  slug: string;
}

const BlogCard: NextPage<Props> = ({ title, description, slug }) => {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <div className="bg-green-100 p-2 rounded cursor-pointer">
        <h1 className="text-3xl text-gray-900 font-semibold">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;

import BlogCard from "@/components/BlogCard";
import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="text-gray-400  p-5 max-w-3xl mx-auto space-y-5">
      <BlogCard title="Title" description="Description"/>
      <BlogCard title="Title" description="Description"/>
      <BlogCard title="Title" description="Description"/>
    </div>
  );
};

export default Blogs;

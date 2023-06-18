import BlogCard from "@/components/BlogCard";
import { InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";

interface PostApiResponse {
  postInfo: {
    title: string;
    slug: string;
    meta: string
  }[];
}

export const getStaticProps = async () => {
  
  const {postInfo}:PostApiResponse =  await fetch('http://localhost:3000/api/posts').then(data => data.json());

  return {
    props: {posts: postInfo}
  }
}

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Blogs: NextPage<Props> = ({posts}) => {


  return (
    <div className="text-gray-400  p-5 max-w-3xl mx-auto space-y-5">
      {posts.map(post => <BlogCard key={post.title} title={post.title} description={post.meta}/>)}
    </div>
  );
};

export default Blogs;

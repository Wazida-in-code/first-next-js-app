import React from 'react';

const blogsData = [
  {
    id: 1,
    title: "Getting Started with React",
    author: "Wazida Momtaz",
    category: "React",
    description: "Learn the basics of React and how components make web development easier.",
    date: "2026-09-10",
  },
  {
    id: 2,
    title: "Understanding JavaScript Arrays",
    author: "Washika Momtaz",
    category: "JavaScript",
    description: "A beginner-friendly guide to working with arrays in JavaScript.",
    date: "2026-09-08",
  },
  {
    id: 3,
    title: "Why Learn TypeScript?",
    author: "Ertiza Momtaz",
    category: "TypeScript",
    description: "Discover how TypeScript can make your JavaScript projects safer and easier to maintain.",
    date: "2026-09-05",
  },
  {
    id: 4,
    title: "Building Responsive Websites",
    author: "Omor Bin Momtaz",
    category: "CSS",
    description: "Learn how to create websites that look good on mobile, tablet, and desktop.",
    date: "2026-09-02",
  },
  {
    id: 5,
    title: "Introduction to Next.js",
    author: "Mom & Dad",
    category: "Next.js",
    description: "Explore the fundamentals of Next.js and how it builds on top of React.",
    date: "2026-08-30",
  },
];



const PostMore = async ({params}) => {
    const {MorePost} = await params;
    
    const more = blogsData.find(more => more.id === parseInt(MorePost));
    console.log(more);

    return (
        <div>
            <h2>Do you want to know more about me? {MorePost}</h2>

            {
                more && <div>
                    <h2>Post author: {more.author}</h2>
                    <h3>Post category: {more.category}</h3>
                    <p>Post description: {more.description}</p>
                    <h3>Post date: {more.date}</h3>
                </div>
            }

        </div>
    );
};

export default PostMore;
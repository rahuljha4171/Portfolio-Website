import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://rahuljha.info";

const pages = {
  "/": {
    title: "Rahul Jha | Senior Software Engineer & Full-Stack Developer",
    description:
      "Rahul Jha is a Senior Software Engineer building scalable web applications, mobile apps, backend APIs, and cloud solutions with React, Node.js, React Native, PHP, and the MERN stack.",
  },
  "/about": {
    title: "About Rahul Jha | Full-Stack Software Engineer",
    description:
      "Learn about Rahul Jha's software engineering experience, full-stack development approach, technical skills, tools, and focus on reliable web and mobile products.",
  },
  "/services": {
    title: "Engineering Expertise | React, Node.js & Mobile Development",
    description:
      "Explore Rahul Jha's expertise in full-stack web development, React Native mobile apps, Node.js APIs, MERN architecture, databases, e-commerce, and cloud deployment.",
  },
  "/project": {
    title: "Software Development Projects | Rahul Jha",
    description:
      "View Rahul Jha's selected full-stack projects, including e-commerce, real-time chat, finance tracking, React interfaces, Node.js APIs, Firebase, and MongoDB applications.",
  },
};

function updateMeta(selector, content) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute("content", content);
}

function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = pages[pathname] || pages["/"];
    const pageUrl = pathname === "/" ? `${siteUrl}/` : `${siteUrl}${pathname}`;

    document.title = page.title;
    updateMeta('meta[name="description"]', page.description);
    updateMeta('meta[property="og:title"]', page.title);
    updateMeta('meta[property="og:description"]', page.description);
    updateMeta('meta[property="og:url"]', pageUrl);
    updateMeta('meta[name="twitter:title"]', page.title);
    updateMeta('meta[name="twitter:description"]', page.description);

    document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", pageUrl);
  }, [pathname]);

  return null;
}

export default Seo;

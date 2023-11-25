import React from "react";
import styles from "./blogPreview.module.css";
import { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
    // replace everything between the <div> & </div> tags
    // with your code from earlier milestones
    <>
      <main>
        <div className={styles.blog_div}>
          <h1>{props.title}</h1>
          <p>{props.date}</p>
          <p>{props.description}</p>
          
          
        </div>
      </main>
      
    </>
  );
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Home({content}) {
  const { attributes } = content;
  
  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <ReactMarkdown>
        {attributes.hero_description}
      </ReactMarkdown>
      <img src={attributes.hero_image} alt='hero image' />
    </>
  );
}

export const getStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};

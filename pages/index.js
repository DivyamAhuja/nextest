import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({content}) {
  const { attributes } = content;
  return (
    <>
      <h1>{attributes.hero_title}</h1>
      <p>{attributes.hero_description}</p>
      <img src={attributes.hero_image} alt='hero image' />
    </>
  );
}

export const getStaticProps = async () => {
  const content = await import(`../content/pages/${'home'}.md`);
  return { props: { content: content.default } };
};

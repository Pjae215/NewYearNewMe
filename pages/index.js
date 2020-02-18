import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>Mel's Daughter</h1>
      <ul>
        <PostLink title="Here's my Resume" />
        <PostLink title="Here are things I like to do" />
        <PostLink title="Here are my goals" />
      </ul>
    </Layout>
  );
}
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import {getSortedPostsData} from '../lib/posts'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData()
  return{
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="ceshi" content="look head where"/>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>NUAA CCST</p>
        <p>
          This is a my first Next try , hello world
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
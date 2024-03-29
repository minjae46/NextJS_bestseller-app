import Link from "next/link";
import styles from "../../../styles/list.module.css";

export async function generateMetadata({ params: { id } }) {
  const list: IList = await getList(id);
  return {
    title: list.results.list_name,
  };
}

const BASE_URL = "https://books-api.nomadcoders.workers.dev/list?name=";

async function getList(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const json = await (await fetch(`${BASE_URL}${id}`)).json();
  return json;
}

interface IList {
  status: string;
  copyright: string;
  num_results: number;
  last_modified: string;
  results: {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: string;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: [];
    corrections: [];
  };
}

interface IBook {
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  asterisk: number;
  dagger: number;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  description: string;
  price: string;
  title: string;
  author: string;
  contributor: string;
  contributor_note: "";
  book_image: string;
  book_image_height: number;
  amazon_product_url: string;
  age_group: string;
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
  isbns: [];
  buy_links: [];
  book_uri: string;
}

export default async function List({ params: { id } }) {
  const list: IList = await getList(id);
  return (
    <div className={styles.container}>
      <h1 className={styles.category}>{list.results.list_name} Books</h1>
      <ul className={styles.list}>
        {list.results.books.map((book: IBook, i) => (
          <li className={styles.book} key={i}>
            <img src={book.book_image} />
            <span className={styles.title}>{book.title}</span>
            <span className={styles.author}>{book.author}</span>
            <span className={styles.go_buy}>
              <Link href={book.amazon_product_url}>Buy Now &rarr;</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

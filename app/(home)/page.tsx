import Link from "next/link";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "HOME",
};

const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getLists() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const json = await (await fetch(API_URL)).json();
  return json;
}

interface ILists {
  status: string;
  copyright: string;
  num_results: number;
  results: [];
}

interface IList {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default async function Home() {
  const lists: ILists = await getLists();
  return (
    <div className={styles.container}>
      <ul className={styles.lists}>
        {lists.results.map((list: IList, i) => (
          <Link key={i} prefetch href={`list/${list.list_name_encoded}`}>
            <li>{list.list_name} &rarr;</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import about from '@/styles/about.module.scss'



const List = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  function dataget() {
    axios
      .get("/api/hello", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => setData(res.data));
  }

  function dataDelete(id) {
    axios.delete("/api/hello", { data: id });
    dataget();
  }
  console.log(data)
  useEffect(dataget, []);

  if (!data.length) return (<>loading....<Link href="/src/Write"> 글쓰기 </Link></>);


  return (
    <>
      <article className={about.section}>
        <h2 className={about.name}>LIST</h2>
        <ul className={about.textbox01}>
          {data.map((obj) => (
            <li key={obj.id}>
              {obj.name} / {obj.email} / {obj.tel}
              <button
                onClick={() =>
                  router.push({ pathname: "/src/Update", query: obj })
                }
              >
                수정
              </button>
              <button onClick={() => dataDelete(obj.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </article>
      <Link href="/src/Write"> 글쓰기 </Link>
    </>
  );
};

export default List;

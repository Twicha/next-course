import Link from "next/link";

import { MainContainer } from "../components/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer>
      <h1>Users page</h1>
      <ul>
        {users.map(({ name, id }) => (
          <li key={id}>
            <Link href={`/users/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const users = await response.json();

  return {
    props: { users },
  };
}

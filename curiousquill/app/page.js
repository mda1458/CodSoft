import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64c8ccec42a3fd2a39a9");

export default function Home() {
  return (
    <>
      <div className="text-5xl">Curious Quill</div>
    </>
  );
}

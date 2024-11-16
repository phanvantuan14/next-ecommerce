"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function SearchBar() {
  const router = useRouter();
  function handleSeach(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (name) {
      router.push(`/list/name=${name}`);
    }
  }
  return (
    <form
      className="flex flex-1 items-center bg-gray-100 rounded-md p-2"
      onSubmit={handleSeach}
    >
      <input
        name="name"
        type="text"
        placeholder="Search"
        className="outline-none border p-2 flex-1 bg-transparent rounded-md"
      />
      <button className="cursor-pointer p-3">
        <Image src="/search.png" width={16} height={16} alt="search" />
      </button>
    </form>
  );
}

export default SearchBar;

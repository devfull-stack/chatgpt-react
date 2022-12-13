import ThemeSelect from "@components/ui/Theme/ThemeSelect";
import { type NextPage } from "next";
import Head from "next/head";
import Chat from "../components/Chat/Chat";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-screen grid-cols-6">
        <div className="col-span-1 h-full border-r-[1px] bg-base-200">
          <div className="flex h-full flex-col items-center justify-between">
            <div className="pt-4">
              <span className="text-xl-4 font-semibold">Chat Bot Starter</span>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required/>
            </div>
            <div className="py-4">
              <ThemeSelect />
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="flex h-full w-full flex-col">
            <Chat />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import IntroComponents from "../Components/IntroComponents";
import PortfolioContent from "../Components/PortfolioContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Maachi Sami</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Software developer portfolio" />
        <meta
          name="keywords"
          content="Web development, Software engineering , full stack development"
        />
        <meta name="author" content="Sami Maachi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div>
        {/* <IntroComponents /> */}
        <PortfolioContent showCompDelay={0} />
      </div>
    </>
  );
};

export default Home;

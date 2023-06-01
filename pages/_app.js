import "../styles/globals.css";
import SEO from "@bradgarropy/next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Assignmint"
        description="Academic Excellence Made Effortless: Speedy Assignments and Exam Assistance at Unbeatable Prices"
        keywords={[
          "assignment solver",
          "assignment at cheap price",
          "java assignment",
          "assignmint",
          "web assignment",
          "spring boot assignment",
          "data structures assignment",
          "dbms assignment",
          "Enterprise assignment",
          "cheap assignment",
        ]}
        icon="/favicon/favicon.ico"
        colorScheme="light"
        themeColor="#000000"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

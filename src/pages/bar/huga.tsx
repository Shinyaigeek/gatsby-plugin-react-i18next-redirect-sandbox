import React from "react";
import { graphql } from "gatsby";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import { Header } from "../../components/Header";

const Home = () => {
  const { t } = useTranslation();
  const { languages } = useI18next();
  return (
    <div>
      <Header /> bar- fuga - {t("hello")}{" "}
      {languages.map((language) => (
        <div>{language}</div>
      ))}
    </div>
  );
};

export default Home;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

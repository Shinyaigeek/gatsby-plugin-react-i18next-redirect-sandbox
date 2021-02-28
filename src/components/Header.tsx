import { useI18next } from "gatsby-plugin-react-i18next";
import React, { useCallback, useMemo } from "react";

export const Header = () => {
  const { changeLanguage, language } = useI18next();

  const currentTargetLanguage = useMemo(() => {
    return language === "ja" ? "en" : "ja";
  }, [language]);

  const changeCurrentLanguage = useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      evt.preventDefault();
      changeLanguage(currentTargetLanguage);
    },
    [currentTargetLanguage]
  );

  return (
    <header>
      Header
      <div>
        <a onClick={changeCurrentLanguage} href="#">
          {currentTargetLanguage}
        </a>
      </div>
    </header>
  );
};

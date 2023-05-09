import { useRouter } from "next/router";
import React from "react";

const TranslationSelect = () => {
  const { locale, locales, push, asPath } = useRouter();
  const selectLng = (e: { target: { value: string } }) => {
    push(asPath, undefined, { locale: e.target.value });
  };

  return (
    <select
      onChange={selectLng}
      defaultValue={locale}
      className="ring-0 bg-transparent text-AAsecondary"
    >
      {locales.map((row, idx) => (
        <option className="bg-AAprimary" value={row} key={idx}>
          {row}
        </option>
      ))}
    </select>
  );
};

export default TranslationSelect;

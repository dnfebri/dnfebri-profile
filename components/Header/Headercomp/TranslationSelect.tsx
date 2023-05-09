import { useRouter } from "next/router";
import React from "react";

const TranslationSelect = props => {
  const { locale, locales, push, asPath } = useRouter();
  const selectLng = (e: { target: { value: string } }) => {
    push(asPath, undefined, { locale: e.target.value });
    if (props.rotate) {
      props.setRotate(!props.rotate);
      props.setShowElement(!props.ShowElement);
    }
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

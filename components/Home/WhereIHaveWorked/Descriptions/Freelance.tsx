import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
import { t } from "i18next";
import { Trans } from "react-i18next";
import { TDescription } from "../../../../Types/type";

export default function Freelance() {
  const description = t<any, any>(
    "section.workExperience.freelance.description",
    {
      returnObjects: true,
    }
  );

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <p className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            <Trans
              i18nKey={"section.workExperience.freelance.title"}
              components={{
                span: <span className="text-AAsecondary" />,
              }}
            />
          </p>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            {t("section.workExperience.freelance.date")}
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {description.map((item: TDescription, index: number) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import { SectionData } from "@/data/theFilmSections";

const splitSentences = (text: string): string[] =>
  text.match(/[^.!?]+[.!?]/g) || [text];

export default function Section({
  text,
  reverse = false,
  hasImage = true,
  imageSize = "w-1/3",
  textSize = "w-2/3",
  className = "",
}: SectionData & { imageSize?: string }) {
  return (
    <div
      className={`section-block flex flex-col md:flex-row items-center gap-x-6 gap-y-6 overflow-hidden ${
        reverse ? "md:flex-row-reverse" : ""
      } ${className}`}
    >
      {hasImage && (
        <Image
          src="/assets/images/moc-the-film-banner.png"
          alt="Section illustration"
          width={800}
          height={600}
          className={`${imageSize} w-full object-cover section-image`}
        />
      )}

      <div className={`${textSize} text-white`}>
        {text.map((p, i) => {
          if (typeof p === "string") {
            return (
              <p key={i} className="section-text">
                {splitSentences(p).map((sentence, j) => (
                  <span key={j} className="sentence opacity-0 inline-block">
                    {sentence.trim()}&nbsp;
                  </span>
                ))}
              </p>
            );
          }

          return (
            <div key={i} className="section-text">
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { ReactNode } from "react";

export type SectionData = {
  id: string;
  hasImage?: boolean;
  reverse?: boolean;
  textSize?: string;
  className?: string;
  text: ReactNode[];
};

export const filmSections: SectionData[] = [
  {
    id: "intro",
    hasImage: true,
    className:
      "px-12 py-32 font-productsFont tracking-tight3 text-[16px] leading-snug",
    text: [
      `<>
               <p className="w-[558px]">
          This year's winner of the AJD Award for Best African Feature offers a
          patient portrayal of what it means to persist in spite of terror,
          personal loss, and indefinite longing.
        </p>
        <p className="pl-20 py-1">
          Framed gracefully in natural light, the director measures the passage
          of time from seed to harvest, exalting these women who — undeterred by
          fear — continue to cultivate the land so they can educate their
          children.
        </p>
        <p className="w-[558px]">
          For this, and its delicate treatment of incorruptible love, the AJD
          Award for <br />
          Best African Feature goes to MOTHERS OF CHIBOK directed by Joel Kachi
          Benson.
        </p>
            </>`,
    ],
  },
  {
    id: "story",
    hasImage: false,
    textSize:
      "w-10/12 font-productsFont tracking-tight3 text-2xl leading-snug px-12 py-20",
    text: [
      `
         <>
        <p className="pl-28">
          In a small village in Northeast Nigeria, a community of mothers
        </p>
        <p>
          forge a path forward after the tragic events of April 2014 when their
          daughters <br /> were kidnapped by Boko Haram. The film follows four
          mothers over a farming <br /> season as they fight for their children
          and their futures. <br />
          Mothers of Chibok paints a visceral portrait of courage, faith, and
          the enduring <br />
          power of hope.
        </p>
      </>
        `,
    ],
  },
  {
    id: "closing",
    hasImage: false,
    reverse: true,
    className: "p-12",
    textSize:
      "w-10/12 font-productsFont tracking-tight3 text-[16px] leading-snug px-12 py-20",
    text: [
      `
        <>
        <p className="w-[558px]">
          This year's winner of the AJD Award for Best African Feature offers a
          patient portrayal of what it means to persist in spite of terror,
          personal loss, and indefinite longing.
        </p>
        <p className="pl-20 py-1">
          Framed gracefully in natural light, the director measures the passage
          of time from seed to harvest, exalting these women who — undeterred by
          fear — continue to cultivate the land so they can educate their
          children.
        </p>
        <p className="w-[558px]">
          For this, and its delicate treatment of incorruptible love, the AJD
          Award for <br />
          Best African Feature goes to MOTHERS OF CHIBOK directed by Joel Kachi
          Benson.
        </p>
      </>
        `,
    ],
  },
];

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export type Beneficiary = {
  id: number;
  src: string;
  name: string;
  title: string;
  bio: string;
  fullStory: string;
};

const PLACEHOLDER_STORY = `
 
`;

export const allBeneficiaries: Beneficiary[] = [

  {
    id: 1,
    src: "/assets/images/Beneficiary Photos/LydiaYama.jpg",
    name: "LYDIA YAMA",
    title: "Hope Over Fear",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Lydia Yama survived the 2014 attacks and the fear that followed. At one point, that fear led her to withdraw her children from school, an act of protection in a time of uncertainty. But over time, her courage returned in a new form: the decision to send them back. Lydia’s story is about a mother choosing the future despite fear. Chibok Groundnut Initiative (CGI) support helps her sustain that choice through farming and continued care for her children.`,
  },
  {
    id: 2,
    src: "/assets/images/Beneficiary Photos/YanaGalang.jpg",
    name: "YANA GALANG",
    title: "The Mother Who Waits",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Twelve years after her daughter Rifkatu was taken, Yana Galang continues to live with the ache of waiting. Yet even in that waiting, life has not stopped. She remains present for her other children, celebrating their milestones and working to keep the family steady. Her love holds both grief and gratitude in the same breath. Chibok Groundnut Initiative (CGI) support helps Yana continue providing for the children beside her, while she carries hope for the daughter still missing.`,
  },
  {
    id: 3,
    src: "/assets/images/Beneficiary Photos/EstherMusa.jpeg",
    name: "ESTHER MUSA",
    title: "The Unending Vigil",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Esther Musa carries the pain of widowhood alongside the ache of a missing child. Even in grief, she continues to work for the children still beside her, holding her family together with patience and strength. Her days are shaped by both memory and responsibility, by longing and labour. Chibok Groundnut Initiative (CGI) support helps Esther strengthen her farming efforts, giving her more room to provide while she continues to hope for the day her family is whole again.`,
  },
  {
    id: 4,
    src: "/assets/images/Beneficiary Photos/RifkatuAyuba.jpg",
    name: "RIFKATU AYUBA",
    title: "A Glimmer of Hope",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Rifkatu Ayuba is a mother of four, including an abduction survivor. She has carried the burden of poverty largely on her own, working the fields to protect what remains possible for her children. Two are currently out of school, a reality that weighs heavily on her. Still, Rifkatu continues to work with hope and discipline. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming, giving her a better chance to restore stability and keep education within reach.`,
  },
  {
    id: 5,
    src: "/assets/images/Beneficiary Photos/LadiLawanZanna.JPEG",
    name: "LADI LAWAN ZANNA",
    title: "From the Ground Up",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Ladi Lawan Zanna has spent years rebuilding a life interrupted by violence. Her days are shaped by the practical demands of motherhood: feeding her children, keeping them in school, and finding stability in uncertain conditions. The farm has become more than a place of labour; it is where she turns effort into possibility. With seedlings, inputs, and training from Chibok Groundnut Initiative (CGI), Ladi is better equipped to grow what her family needs and protect the future she continues to work for.
 `,
  },
  {
    id: 6,
    src: "/assets/images/Beneficiary Photos/HadizaYidau.jpg",
    name: "HADIZA YIDAU",
    title: "Keeping Focus",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Widowed by the insurgency, Hadiza Yidau is raising eight children, with five still in school. She relies on farming to provide, stretching what she earns across food, fees, and the many demands of family life. Her focus has remained steady despite hardship: keep the children learning, keep the household standing, keep hope alive. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming efforts, giving Hadiza a better chance to turn her hard work into lasting stability.`,
  },
  {
    id: 7,
    src: "/assets/images/Beneficiary Photos/RuthKwakwi.jpeg",
    name: "RUTH KWAKWI",
    title: "Through Rough Edges",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `The insurgency took Ruth Kwakwi husband, but it did not take her resolve. Left with seven children, she works every day to keep four of them in school and her household moving forward. Her life has rough edges but also a clear centre: her children’s wellbeing. Ruth’s strength shows in her refusal to give up. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming, giving her a more stable path beyond the exhausting cycle of survival.`,
  },
  {
    id: 8,
    src: "/assets/images/Beneficiary Photos/MaryShettima.jpeg",
    name: "MARY SHETTIMA",
    title: "A Mother’s Love",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `After losing her husband in the 2014 crisis, Mary Shetima has carried the responsibility of seven children. Four are in school, and keeping them there has required deep sacrifice. Mary’s love is not sentimental; it is active, measured in work, endurance, and the decisions she makes each day for her family. Chibok Groundnut Initiative's (CGI) support helps ease some of that pressure, strengthening her ability to provide and protect the future she has worked so hard to preserve.`,
  },
  {
    id: 9,
    src: "/assets/images/Beneficiary Photos/HannatuDauda.jpg",
    name: "HANNATU DAUDA",
    title: "Quiet Strength",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Hanatu Dauda survived the 2014 abductions and still carries the memory of her daughter with deep emotion. But her life is not defined by sorrow alone. She continues to pour herself into the children she raises, keeping their education and wellbeing at the centre of her efforts. Her strength is tender, but it is not fragile. Chibok Groundnut Initiative's (CGI) support helps Hanatu continue farming with greater stability, nurturing the future of her family while holding hope close.`,
  },
  {
    id: 10,
    src: "/assets/images/Beneficiary Photos/AduwaPogu.jpg",
    name: "ADUWA POGU",
    title: "The Weight of Care",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Aduwa Pogu’s life is built around care. As a mother of five, she works through long days to provide food, school fees, and a measure of stability for her children. Each small victory carries the weight of effort: a meal prepared, a fee paid, a child kept in school. Her strength is not loud, but it is constant. Through Chibok Groundnut Initiative (CGI), Aduwa receives farming support that helps ease the pressure on her household and strengthens her path forward.`,
  },
  {
    id: 11,
    src: "/assets/images/Beneficiary Photos/AishaTablet.jpg",
    name: "AISHA TABLET",
    title: "Defiance in the Soil",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Aisha has refused to let violence determine the shape of her children’s lives. After terror disrupted her village, she held firmly to one conviction: her seven children must still have a chance at education. Farming is one of the ways she turns that conviction into daily action. Her strength is practical, rooted in work and sacrifice. Through Chibok Groundnut Initiative (CGI), Aisha receives support that helps her farm more productively and keep her children’s academic dreams alive.`,
  },
  {
    id: 12,
    src: "/assets/images/Beneficiary Photos/AminaPeter.jpg",
    name: "AMINA PETER",
    title: "The Field as a Future",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Amina Peter is raising six children alone in a place where insecurity has made farming harder and more dangerous. Her family’s survival depends on the land, yet access to that land is not always guaranteed. Still, Amina continues to speak for her household with clarity and courage. Chibok Groundnut Initiative's (CGI) support helps restore some measure of confidence to her farming efforts, giving her family a better chance at food, schooling, and a more settled future.`,
  },
  {
    id: 13,
    src: "/assets/images/Beneficiary Photos/AwaganaAli.jpg",
    name: "AWAGANA ALI",
    title: "A new Beginning",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Awagana Ali, a widow living in Chibok with her children, was faced with profound hardship since her husband’s death. Struggling to cover school fees and daily needs, she realized that her primary income from farming has become increasingly difficult to sustain. Through the Chibok Groundnut Initiative (CGI), Awagana is now receiving vital assistance, including agricultural training, quality seeds, and herbicides, alongside guaranteed post-harvest sales support to help her family find a path toward stability.`,
  },
  {
    id: 14,
    src: "/assets/images/Beneficiary Photos/BinduAbubakar.jpeg",
    name: "BINDU ABUBAKAR",
    title: "Hope Renewed",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Bindu Abubakar, a mother in Mbalala, carries the heavy, enduring grief of a parent whose daughter was among those abducted in 2014. With no news of her child’s whereabouts after all these years, the constant anguish has taken a severe toll on her health, leaving her to battle hypertension while struggling to afford school fees for her four remaining children. Amidst the ongoing insecurity, she has reached out to individuals and organizations, praying for the support needed to find peace and provide for her family. The Chibok Groundnut Initiative (CGI) has since reached out to support Bindu, providing the training, seeds, and herbicides necessary to cultivate her farm, along with dedicated post-harvest sales support to ensure she can secure a stable future for her children.
`,
  },
  {
    id: 15,
    src: "/assets/images/Beneficiary Photos/DanaPogu.jpeg",
    name: "DANA POGU",
    title: "The Stolen Harvest",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Widowed after a tragic accident, Dana Pogu has worked hard to keep her children in school. But insecurity has changed her relationship with the land, turning farming into a risk and making every season more uncertain. Still, she continues to look for ways to provide and to keep her family moving forward. Chibok Groundnut Initiative's (CGI) support helps Dana rebuild confidence in her farm work, giving her a stronger chance to secure the future she wants for her children.`,
  },
  {
    id: 16,
    src: "/assets/images/Beneficiary Photos/EstherJoseph.jpg",
    name: "ESTHER JOSEPH",
    title: "A Steadfast Purpose",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Esther Joseph is both a widow and a survivor of the 2014 abductions. She has carried pain that could have silenced her, yet she has turned her attention toward her children’s education and the future still possible for them. Her life is marked by endurance, but also by direction. She continues to farm, plan, and provide. Chibok Groundnut Initiative's (CGI) support comes alongside that purpose, helping Esther cultivate greater stability for the family she continues to lead.`,
  },
  {
    id: 17,
    src: "/assets/images/Beneficiary Photos/EstherYakubu.jpg",
    name: "ESTHER YAKUBU",
    title: "Carrying Absence, Building Tomorrow",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Esther Yakubu balances a small business and farming to provide for her five children. Alongside that daily work, she carries the heavy absence of a daughter taken by force. Her life holds both grief and movement: the ache of what is missing, and the responsibility of what remains. Esther’s resolve is found in her ability to keep going. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming, giving her more stability as she continues to protect her children’s future.`,
  },
  {
    id: 18,
    src: "/assets/images/Beneficiary Photos/FatiMohammed.jpeg",
    name: "FATI MOHAMMED",
    title: "Hope Alive",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Fati Mohammed, a widow from Mbalala, lost her husband to a violent attack by Boko Haram on their farm this year. Left to raise nine children alone, she experienced the agony of struggling to provide food and school fees while living in constant fear. We added her to our Chibok Groundnut Initiative (CGI) and are currently working to secure her family’s future through the comprehensive agricultural training and high-quality seedlings to boost her harvest, alongside essential herbicides to protect her crops. Beyond the field, the initiative ensures her financial stability by providing critical post-harvest support, handling the logistics of sale so she can focus on her children's education and well-being.`,
  },
  {
    id: 19,
    src: "/assets/images/Beneficiary Photos/GloryWilliam.jpg",
    name: "GLORY WILLIAM",
    title: "Beginning Again",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Glory William has had to rebuild more than once. A mother of twelve, she carries the memory of the 2014 abduction, displacement from her ancestral home, and the recent loss of her son. Still, her attention remains fixed on the children in her care, especially the seven still in school. For Glory, farming is a way to keep standing. This season, Chibok Groundnut Initiative's (CGI) support strengthens the work she is already doing to hold her family together.`,
  },
  {
    id: 20,
    src: "/assets/images/Beneficiary Photos/GraceNuhu.jpg",
    name: "GRACE NUHU",
    title: "Her Own Pillar",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Grace Nuhu raises four children on her own, balancing farm work with the demands of operating a grinding machine. The work is physically demanding, but she meets it with faith and a deep sense of responsibility. Grace does not wait for life to become easy before she acts; she keeps building with what is in her hands. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming, adding to the enterprise and discipline she already brings to her family’s survival.`,
  },
  {
    id: 21,
    src: "/assets/images/Beneficiary Photos/HadizaGrema.jpeg",
    name: "HADIZA GREMA",
    title: "Fierce Defiance",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Hadiza Grema’s life was marked by the 2014 crisis, but she has continued to build with courage. As a mother of seven, she has become the architect of her family’s daily survival, keeping four children in school through discipline and grit. Her strength is practical, visible in every choice to keep going. Chibok Groundnut Initiative's (CGI) support helps reinforce her farming efforts, giving Hadiza more stability as she continues shaping a future for her children.`,
  },
  {
    id: 22,
    src: "/assets/images/Beneficiary Photos/HajiaMulima.jpg",
    name: "HAJIA MULIMA",
    title: "Never Say Never",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `For twelve years, Hajja Mulima has balanced farming and a small business while raising five children after her husband’s death. Her life has not been free of setbacks, but her resolve has remained firm. She keeps working, keeps planning, and keeps finding ways to support her children’s education. Hajja’s strength is in her refusal to stop trying. Chibok Groundnut Initiative's (CGI) support helps reinforce her efforts, giving her a better chance to turn persistence into stability`,
  },
  {
    id: 23,
    src: "/assets/images/Beneficiary Photos/HajiaMutah.jpg",
    name: "HAJIA MUTAH",
    title: "Quiet Power",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Hajja Mutah is raising eight children as a widow, carrying responsibility with a quiet strength that does not need to announce itself. In a community shaped by economic hardship, she has refused to let scarcity define her children’s dreams. Farming is one of the ways she keeps moving, one season at a time. With support from Chibok Groundnut Initiative (CGI), Hajja is better able to turn her labour into a more stable harvest and a steadier future for her family.`,
  },

  {
    id: 24,
    src: "/assets/images/Beneficiary Photos/HauwaAkiliya.jpg",
    name: "HAUWA AKILIYA",
    title: "Love in Practice",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Since becoming a widow eight years ago, Hauwa Akiliya has raised seven children with remarkable steadiness. She farms, runs a small business when she can, and makes daily sacrifices that are often unseen but deeply felt. For Hauwa, education is not an abstract dream; it is something she works for meal by meal, season by season. Chibok Groundnut Initiative's (CGI) support comes alongside her labour, giving her more room to provide for her children with dignity and hope.`,
  },
  {
    id: 25,
    src: "/assets/images/Beneficiary Photos/HauwaEmmanuel.jpeg",
    name: "HAUWA EMMANUEL",
    title: "Reaching for Stability",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Hauwa Emmanuel is a widow raising five children, with three still in school. Her days are shaped by the effort to keep them learning, fed, and hopeful. Insecurity has limited her access to more productive farmland, forcing her to work within difficult boundaries. Even so, Hauwa continues to push forward. With support from Chibok Groundnut Initiative (CGI), she has a stronger chance to rebuild stability through farming and keep her children’s education from slipping out of reach.`,
  },
  {
    id: 26,
    src: "/assets/images/Beneficiary Photos/HauwaUmar.jpg",
    name: "HAUWA UMAR",
    title: "Beyond Tragic Losses",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Hauwa Umar is a widow raising seven children, pouring her energy into the soil to meet the cost of their education. Her life has been marked by tragedy, but she refuses to let tragedy write the final story for her children. Farming is one way she pushes back, turning labour into school fees, meals, and hope. Chibok Groundnut Initiative's (CGI) support helps make that labour more productive, giving Hauwa’s family a stronger foundation for the future.`,
  },
  {
    id: 27,
    src: "/assets/images/Beneficiary Photos/JummaiAdamu.jpg",
    name: "JUMMAI ADAMU",
    title: "The Promise of the Harvest",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `As a widow raising six children, Jummai sees her farm as part of her children’s future. Two have already completed school, a milestone that speaks to years of sacrifice and persistence. She remains determined to see the others continue on that path. For Jummai, every planting season carries meaning beyond food; it is tied to dignity, knowledge, and opportunity. Chibok Groundnut Initiative's (CGI) support helps strengthen the work she is already doing to keep that promise alive.`,
  },
  {
    id: 28,
    src: "/assets/images/Beneficiary Photos/JummaiJohn.jpg",
    name: "JUMMAI JOHN",
    title: "A Steady Hope",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Jummai John has known displacement, hardship, and the long shadow of the 2014 abductions. But her story is also one of movement: waking each day, working with what she has, and keeping five of her seven children in school. Even with limited space, she continues to farm with discipline and hope. Chibok Groundnut Initiative's (CGI) support helps her make more of the land available to her, strengthening the quiet determination with which she holds her family together. `,
  },
  {
    id: 29,
    src: "/assets/images/Beneficiary Photos/KanaShettima.jpg",
    name: "KANA SHETTIMA",
    title: "Every Seed Counts",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Since losing her husband, Kana Shettima has become the sole provider for her five children. She approaches farming with the seriousness of someone who understands that every seed planted carries a purpose. For her, the land is tied to school fees, meals, and the possibility of a different life for her children. Kana’s self-reliance is hard-earned. Chibok Groundnut Initiative's (CGI) support helps make her effort more secure, strengthening the foundation she continues to build for her family.`,
  },

  {
    id: 30,
    src: "/assets/images/Beneficiary Photos/LarabaPogu.jpg",
    name: "LARABA POGU",
    title: "Still Standing",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `After fleeing the heart of the insurgency and losing her husband, Laraba Pogu found herself carrying the weight of five children alone. She has learned to coax survival from the soil and to keep going even when the path is uncertain. Her story is not only one of loss, but of endurance, skill, and maternal resolve. Chibok Groundnut Initiative's (CGI) support strengthens Laraba’s farming efforts, helping her protect the future she continues to build for her children.`,
  },
  {
    id: 31,
    src: "/assets/images/Beneficiary Photos/LydiaMusaNkeki.jpeg",
    name: "LYDIA MUSA NKEKI",
    title: "Things Will Get Better",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Lydia Musa Nkeki survived the 2014 tragedy and continues to protect her seven children with fierce determination. She works the soil under the sun, doing what she can to keep two of them in school and maintain hope for the family. Her words carry a quiet belief that better days are still possible. Chibok Groundnut Initiative's (CGI) support helps lighten some of the pressure, strengthening Lydia’s ability to turn farming into growth rather than mere survival`,
  },

  {
    id: 32,
    src: "/assets/images/Beneficiary Photos/MarthaMarkus.jpeg",
    name: "MARTHA MARKUS",
    title: "Hope That Returns",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Martha Markus knows the miracle of return. After living through the abduction of her daughter, she has also witnessed her coming home. That experience has deepened her prayers for the girls still missing and strengthened her commitment to the children in her care. Martha works hard to support her two children, carrying both gratitude and responsibility. Chibok Groundnut Initiative's (CGI) support helps her continue farming with stability, sustaining the hope she has learned to protect through persistence.
`,
  },
  {
    id: 33,
    src: "/assets/images/Beneficiary Photos/MARYAMALI 1.jpeg",
    name: "MARYAM ALI",
    title: "Double Opportunity for Education",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `One of the kidnapped Chibok girls who escaped captivity, taking along with her Ali, her son conceived while in the Boko Haram den, Maryam Ali is courageously rebuilding her life as a university student. She remains focused between the demands of her education and the responsibility of motherhood. 
And the Chibok Groundnut Initiative (CGI) has been a vital lifeline, providing the consistent support through the provision of seeds, herbicides and the requisite training she needs to ensure a harvest that will assure that Ali continues his education while Maryam pursues her dreams.
`,
  },
  {
    id: 34,
    src: "/assets/images/Beneficiary Photos/MaryIshaya.jpg",
    name: "MARY ISHAYA",
    title: "Replanting a Life",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Forced to flee her home in Hirpaya because of violence, Mary Ishaya is now a displaced mother of four in Chibok. Losing access to home also meant losing a primary source of income, but Mary continues to search for ways to provide. Her story is one of uprooting, but also of replanting. Chibok Groundnut Initiative's (CGI) support helps her rebuild through farming, giving her children’s dreams a better chance to take root again.`,
  },
  {
    id: 35,
    src: "/assets/images/Beneficiary Photos/MaryMusa.jpeg",
    name: "MARY MUSA",
    title: "Standing for the Next Generation",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Mary Musa survived the 2014 abductions and understands how fragile peace can be. Since becoming a widow, she has moved through life with grace and responsibility, guiding the children in her care and keeping their attention fixed on education. Her strength is seen in the way she mentors, provides, and steadies others. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming efforts, allowing Mary to continue nurturing a new generation with courage and purpose.`,
  },

  {
    id: 36,
    src: "/assets/images/Beneficiary Photos/NaomiMaina.jpeg",
    name: "NAOMI MAINA",
    title: "Work, Dignity, Resolve",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Naomi Maina knows the weight of starting each day with responsibility on her shoulders. As a widow, she works as a day labourer to keep her five children fed and in school. She has watched insecurity unsettle the rhythms of her community, but she has not surrendered her sense of purpose. Chibok Groundnut Initiative's (CGI) support helps Naomi move toward more stable farming, strengthening her ability to provide with dignity and reduce the uncertainty surrounding her household.`,
  },
  {
    id: 37,
    src: "/assets/images/Beneficiary Photos/PalmataYama.jpeg",
    name: "PALMATA YAMA",
    title: "The Work of Hope",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Palmata Yama works the land while carrying the unresolved pain of her daughter’s abduction in 2014. She is a mother who knows what it means to grieve and still provide, to wait and still work. Her harvests are stretched carefully to cover the needs of the four children in her care. Chibok Groundnut Initiative's (CGI) support helps Palmata strengthen her farming efforts, giving her more stability as she continues to hold her family close and hope for reunion.`,
  },
  {
    id: 38,
    src: "/assets/images/Beneficiary Photos/RahabPeter.jpeg",
    name: "RAHAB PETER",
    title: "Holding On to School",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Rahab Peter is a widow and mother of six who continues to fight for her children’s education, even when resources fall short. Her business has struggled under pressure, and two of her children have had to leave school. Still, she remains committed to the four who are still in the classroom. Rahap’s determination is clear in what she continues to protect. Chibok Groundnut Initiative's (CGI) support helps her build a more stable path for her family.`,
  },
  {
    id: 39,
    src: "/assets/images/Beneficiary Photos/RebeccaPogu.jpg",
    name: "REBECCA POGU",
    title: "The Unbroken Promise",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `After losing her husband in a 2014 attack, Rebecca Pogu raised four children alone. She balances farming with a small business, stretching her labour across every need at home. Two of her children are now nearing university, a sign of her discipline and long sacrifice. Rebecca’s promise to her children has never been broken. Chibok Groundnut Initiative's (CGI) support helps strengthen the work behind that promise, giving her family a steadier path toward opportunity.`,
  },

  {
    id: 40,
    src: "/assets/images/Beneficiary Photos/RuthDauda.jpg",
    name: "RUTH DAUDA",
    title: "The Quiet Sacrifice",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Ruth Dauda works as a day labourer when the harvest does not stretch far enough. Every extra hour of work is tied to a purpose: keeping her five children in school. Her belief in education remains firm, even when the cost is heavy. Ruth’s strength is found in consistency, in the ordinary sacrifices that rarely receive applause. Chibok Groundnut Initiative's (CGI) support helps reinforce her farming efforts, giving her more room to provide for her children with steadiness.`,
  },

  {
    id: 41,
    src: "/assets/images/Beneficiary Photos/RuthYahonna.jpeg",
    name: "RUTH YAHONNA",
    title: "A Vigil in Mbalala",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Since losing her husband, Ruth Yahonna has raised ten children on her own. Her life has been shaped by responsibility, but also by an unwavering belief in education. Even as insecurity limits her access to fertile land, she continues to work with what is available, determined to keep her children’s dreams alive. Chibok Groundnut Initiative's (CGI) support provides inputs that help Ruth make her farm more reliable, giving her household a stronger foundation in a difficult season.
`,
  },
  {
    id: 42,
    src: "/assets/images/Beneficiary Photos/RuthYakubu.jpeg",
    name: "RUTH YAKUBU",
    title: "Undaunted",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Ruth Yakubu carries the responsibility of raising seven children after the death of her husband, with four still in school. For years, she has weathered hardship through determination, work, and faith in the future she wants for them. Her resilience has kept the family moving, even in difficult seasons. Chibok Groundnut Initiative's (CGI) support helps strengthen her farming, giving Ruth a more reliable harvest and a steadier way to continue providing for the children in her care.`,
  },
  {
    id: 43,
    src: "/assets/images/Beneficiary Photos/SalomiTitus.jpeg",
    name: "SALOMI TITUS",
    title: "A Voice That Still Hopes",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Salomi Titus is a mother of nine who continues to pray for the return of her daughter, abducted from school during the 2014 attacks. Yet even as she carries that absence, she works the land and remains present for the children beside her. Her hope is not passive; it is held together by work, prayer, and memory. Chibok Groundnut Initiative's (CGI) support helps Salomi continue providing for her family while honouring the daughter she still waits for.`,
  },
  {
    id: 44,
    src: "/assets/images/Beneficiary Photos/SaratuIbrahim.jpeg",
    name: "SARATU IBRAHIM",
    title: "Living With the Wait",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `For more than a decade, Saratu Ibrahim has lived with the pain of a missing daughter abducted in 2014. Around that absence, she has continued to build a life, farming in a region where insecurity makes even ordinary work feel uncertain. Her strength lies in this daily decision to continue. Chibok Groundnut Initiative's (CGI) support helps Saratu farm with better resources and greater stability, strengthening her ability to care for her family while she carries a hope that has not faded.`,
  },
  {
    id: 45,
    src: "/assets/images/Beneficiary Photos/SaratuJames.jpeg",
    name: "SARATU JAMES",
    title: "An Anchor for Six",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `After her husband was killed by insurgents in 2015, Saratu James became the anchor of her family. With six children depending on her, she has relied on farming to keep food on the table and school within reach. The harvest is not always predictable, but Saratu’s commitment has remained steady. Chibok Groundnut Initiative's (CGI) support helps her improve what she already knows how to do: work the land, provide for her children, and build stability from season to season.`,
  },
  {
    id: 46,
    src: "/assets/images/Beneficiary Photos/SarayaElijah.jpeg",
    name: "SARAYA ELIJAH",
    title: "Rising from the Ashes",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Widowed by the violence of war, Saraya Elijah has chosen to build from what remains. She farms to provide for her children and to give them tools for a life beyond survival. Her grief is real, but so is her vision. Saraya understands that a future is not wished into being; it is worked for, season after season. Chibok Groundnut Initiative's (CGI) support helps strengthen that work, giving her family a more stable path toward growth.
`,
  },
  {
    id: 47,
    src: "/assets/images/Beneficiary Photos/YakoloAdam.jpg",
    name: "YAKOLO ADAM",
    title: "Hope Despite the Odds",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Widowed by the insurgency, Yakolo Adam has learned to stretch a small harvest across the many needs of six children. Her days are demanding, but she continues to work with focus and resilience. Education remains one of the ambitions she refuses to surrender, even when resources are thin. Yakolo’s strength lies in her ability to keep going despite the odds. Chibok Groundnut Initiative's (CGI) support helps her farm more securely and protect her children’s academic future.`,
  },

  {
    id: 48,
    src: "/assets/images/Beneficiary Photos/YankeShettima.jpg",
    name: "YANKE SHETTIMA",
    title: "Holding the Line",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `For more than a decade, Yanke Shettima has lived with the weight of displacement and the memory of the 2014 abduction. Yet she continues to show up for her nine children with the steady resolve of a mother who refuses to let hardship have the final word. Six of her children are in school, and farming remains one of the ways she keeps their future within reach. Chibok Groundnut Initiative's (CGI) support adds strength to the work Yanki already carries with courage.`,
  },
  {
    id: 49,
    src: "/assets/images/Beneficiary Photos/ZainabIbrahim.jpg",
    name: "ZAINAB IBRAHIM",
    title: "A Hope That Holds",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Since the 2014 abduction of her daughter, Zainab Ibrahim has worked tirelessly to protect the children still in her care. School fees, food, and daily survival all place demands on her, but she continues to see education as a shield for the future. Her hope is not untouched by pain; it exists alongside it. Chibok Groundnut Initiative's (CGI) support helps Zainab strengthen her farming, giving her more stability as she continues to fight for her children’s dreams.`,
  },
  {
    id: 50,
    src: "/assets/images/Beneficiary Photos/ZaraAbbas.jpg",
    name: "ZARA ABBAS",
    title: "Against All Odds",
    bio: "A beneficiary profile awaiting final approved story and photograph.",
    fullStory: `Zara Abbas’s life changed in 2014 when her daughter was abducted. Since then, she has continued to care for her three remaining children through farming and animal rearing. Her days carry the weight of memory, but also the discipline of provision. Zara’s sacrifices are rooted in love and in the desire to secure a better future for her children. Chibok Groundnut Initiative's (CGI) support helps strengthen her income and bring more stability to the life she is rebuilding.`,
  },
];

export const beneficiaries: Beneficiary[] = allBeneficiaries.slice(0, 6);

export function BeneficiaryDialog({
  beneficiary,
  onClose,
}: {
  beneficiary: Beneficiary;
  onClose: () => void;
}) {
  const storyParagraphs = beneficiary.fullStory
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/90 p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative mx-auto flex h-full max-h-[calc(100svh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 text-white shadow-2xl md:grid md:max-h-[92svh] md:grid-cols-[0.9fr_1.1fr] md:rounded-[32px]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-[1000] rounded-full bg-white p-2 text-black shadow-lg transition hover:bg-[#B89C58]"
          aria-label="Close beneficiary story"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-[190px] flex-shrink-0 sm:h-[240px] md:h-full">
          <Image
            src={beneficiary.src}
            alt={beneficiary.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-black/25 to-transparent md:bg-gradient-to-r md:from-neutral-950/55 md:via-black/10 md:to-transparent" />

          <div className="absolute bottom-4 left-4 right-16 md:hidden">
            <p className="font-productsFont text-[10px] uppercase tracking-[0.28em] text-[#D4AF37]">
              Beneficiary Story
            </p>
            <h3 className="mt-2 font-guthenBloots text-4xl leading-none text-white">
              {beneficiary.name}
            </h3>

            <p className="mt-1 font-productsFont text-sm text-[#D4AF37] italic">
              {beneficiary.title}
            </p>
            {/* <p className="mt-3 line-clamp-2 font-productsFont text-sm leading-6 text-white/75">
              {beneficiary.bio}
            </p> */}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 pb-14 sm:p-7 md:h-full md:p-10">
          <p className="hidden font-productsFont text-xs uppercase tracking-[0.35em] text-[#B89C58] md:block">
            Beneficiary Story
          </p>

          <h3 className="hidden md:block mt-4 font-guthenBloots text-5xl leading-none text-white lg:text-7xl">
            {beneficiary.name}
          </h3>
          <p className="mt-2 font-productsFont text-base text-[#D4AF37]">
            {beneficiary.title}
          </p>
          <div className="mt-4 space-y-5 font-productsFont text-[15px] leading-8 text-white/90 sm:text-base md:mt-7 md:text-lg md:leading-9">
            {storyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeneContent() {
  const [selected, setSelected] = useState<Beneficiary | null>(null);

  return (
    <section
      id="beneficiaries"
      className="relative overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,156,88,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-productsFont text-xs uppercase tracking-[0.35em] text-[#B89C58]">
              Beneficiaries
            </p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
  <span className="font-guthenBloots">From </span>

  <span className="font-afolkalips font-bold text-5xl sm:text-6xl md:text-6xl">
    9
  </span>

  <span className="font-guthenBloots"> to </span>

  <span className="font-afolkalips italic font-bold text-5xl sm:text-6xl md:text-6xl">
    50
  </span>

  <span className="font-guthenBloots"> Women</span>
</h2>
          </div>

          <p className="font-productsFont italic text-base leading-8 text-white/72 lg:text-lg">
            A journey that began with 9 women now extends to 50 beneficiaries, each with a story of resilience and hope.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficiaries.map((beneficiary) => (
            <button
              key={beneficiary.id}
              onClick={() => setSelected(beneficiary)}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] text-left outline-none transition duration-500 hover:-translate-y-1 hover:border-[#B89C58]/70 focus-visible:ring-2 focus-visible:ring-[#B89C58]"
            >
              <div className="relative h-[360px] overflow-hidden sm:h-[420px]">
                <Image
                  src={beneficiary.src}
                  alt={beneficiary.name}
                  fill
                  className="object-contain transition duration-700 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-productsFont text-[10px] uppercase tracking-[0.32em] text-[#D4AF37]">
                    Beneficiary {String(beneficiary.id).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-productsFont text-xl font-bold tracking-wide text-white">
                    {beneficiary.name}
                  </h3>
                  <p className="hidden md:block mt-3 font-productsFont text-xl text-[#D4AF37]">
                    {beneficiary.title}
                  </p>
                  {/* <p className="mt-3 line-clamp-2 font-productsFont text-sm leading-6 text-white/75">
                    {beneficiary.bio}
                  </p> */}
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-productsFont text-xs font-bold text-black transition group-hover:bg-[#B89C58]">
                    Read full story <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/beneficiaries"
            className="inline-flex rounded-full border border-[#B89C58] px-7 py-3 font-productsFont text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#B89C58] hover:text-black sm:text-sm"
          >
            See all beneficiaries
          </a>
        </div>
      </div>

      {selected && (
        <BeneficiaryDialog
          beneficiary={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

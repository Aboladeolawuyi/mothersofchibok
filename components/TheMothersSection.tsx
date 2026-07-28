import Header from "@/components/common/Header";
import TheMothers from "@/components/common/theMothers";

const TheMothersSection = () => {
  return (
    <main className="relative flex min-h-screen w-full overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "url('/assets/images/moc-the-mother-background.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/75 -z-10" />
      <div>
        <TheMothers />
      </div>
    </main>
  );
};

export default TheMothersSection;



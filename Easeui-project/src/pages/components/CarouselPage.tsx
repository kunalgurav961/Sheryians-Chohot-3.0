// carousel demo page for the presentation slide deck aesthetic
import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const sampleSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
      title: "Dynamic Visual Harmony",
      description: "EaseUI empowers creators to construct fluid digital experiences with responsive layout primitives.",
      content: <Button variant="primary" size="sm">Explore Gallery</Button>,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      title: "GSAP Driven Physics",
      description: "High performance buttery smooth animations baked right into React component lifecycles.",
      content: <Button variant="outline" size="sm" className="bg-white/20 text-white border-white/40">View Animations</Button>,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80",
      title: "Modern Dark Mode",
      description: "Seamless color schemes calibrated for readability, contrast, and visual delight.",
      content: <Button variant="ok" size="sm">Read Guidelines</Button>,
    },
  ];

  const usageCode = `import { Carousel, Button } from "dev-ease-ui";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    title: "Dynamic Visual Harmony",
    description: "EaseUI empowers creators to construct fluid digital experiences.",
    content: <Button variant="primary" size="sm">Explore Gallery</Button>,
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    title: "GSAP Driven Physics",
    description: "High performance buttery smooth animations baked right in.",
  }
];

<Carousel slides={slides} autoPlay={true} interval={5000} aspectRatio="16/9" />`;

  const propsData = [
    {
      prop: "slides",
      type: "CarouselSlide[]",
      default: "[]",
      description: "Array of slide objects containing image, title, description, or custom content.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically cycle through slides on an interval timer.",
    },
    {
      prop: "interval",
      type: "number",
      default: "4000",
      description: "Duration in milliseconds between slide transitions when autoPlay is active.",
    },
    {
      prop: "showControls",
      type: "boolean",
      default: "true",
      description: "Display previous and next navigation arrows on hover.",
    },
    {
      prop: "showIndicators",
      type: "boolean",
      default: "true",
      description: "Display pagination dots at the bottom of the carousel.",
    },
    {
      prop: "aspectRatio",
      type: '"16/9" | "4/3" | "square" | "auto"',
      default: '"16/9"',
      description: "Aspect ratio frame constraint for responsive displays.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">Carousel</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          An animated content slider with auto-play, touch-friendly navigation, and smooth motion curves.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Interactive Demo</h2>
        <ComponentDemo code={usageCode}>
          <div className="w-full max-w-2xl mx-auto">
            <Carousel slides={sampleSlides} autoPlay={true} interval={4500} />
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;

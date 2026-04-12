import Image from 'next/image';

export default function SobreHeroImage() {
  return (
    <section className="w-full flex justify-center px-4 py-12 md:py-16">
      <div className="max-w-5xl w-full">
        <Image
          src="/img/about/hero.svg"
          alt="Dashboard Prize com funcionalidades"
          width={1280}
          height={472}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}

import Link from 'next/link'

import { LinkButton } from '@/components/Ui'

function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex flex-col space-y-8 md:space-y-0 md:space-x-16 lg:space-x-28 md:flex-row lg:mr-24"
    >
      <div className="md:w-72 md:flex-1">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/homepage/desktop/me.jpg, /images/homepage/desktop/me@2x.jpg 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/tablet/me.jpg, /images/homepage/tablet/me@2x.jpg 2x"
          />
          <source srcSet="/images/homepage/mobile/me.jpg, /images/homepage/mobile/me@2x.jpg 2x" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/homepage/mobile/me.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
      <div className="pt-8 pb-14 border-gray-300 md:flex-1 md:pt-12 md:pb-12 border-y">
        <h2 className="font-serif text-4xl font-bold">About Me</h2>
        <p className="mt-7 mb-6 leading-8 text-zinc-600">
          I’m a front-end developer with focus on writing accessible HTML, using
          modern CSS practices and writing clean JavaScript. I mostly use React
          and Next.js, but I can adapt to whatever tools are required. I love
          contributing to open-source. I’m based in Temara, Morocco, but I’m
          happy working remotely with international teams. When I’m not coding,
          you’ll find me chilling to some Lo-Fi music. I’d love you to check out
          my work.
        </p>
        <Link href="/portfolio" passHref>
          <LinkButton variant="secondary">Go to Portfolio</LinkButton>
        </Link>
      </div>
    </section>
  )
}

export default AboutMe

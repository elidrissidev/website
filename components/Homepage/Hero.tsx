import { Button } from '@/components/Ui'
import { IconDownArrows } from '@/components/Icons'

function Hero() {
  return (
    <section className="flex flex-col md:relative">
      <div className="h-72 md:h-[37.5rem]">
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet="/images/homepage/desktop/hero.jpg, /images/homepage/desktop/hero@2x.jpg 2x"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/homepage/tablet/hero.jpg, /images/homepage/tablet/hero@2x.jpg 2x"
          />
          <source srcSet="/images/homepage/mobile/hero.jpg, /images/homepage/mobile/hero@2x.jpg 2x" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/homepage/mobile/hero.jpg"
            alt=""
            className="object-cover w-full h-full"
          />
        </picture>
      </div>
      <div className="pt-6 bg-white md:absolute md:bottom-0 md:max-w-lg xl:max-w-md md:pt-14 md:pr-14">
        <h1 className="mb-8 font-serif text-4xl font-bold tracking-tight md:mb-12">
          Hey, I&apos;m Mohamed Elidrissi and I love building beautiful websites
        </h1>
        <Button Icon={<IconDownArrows className="text-teal-600" />}>
          About Me
        </Button>
      </div>
    </section>
  )
}

export default Hero

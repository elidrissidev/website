import { LinkButton } from '@/components/Ui'

function ContactMe() {
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-between md:space-x-8">
      <h2 className="mb-10 w-80 font-serif text-4xl font-bold tracking-tight leading-10 text-center md:text-left md:mb-0">
        Interested in doing a project together?
      </h2>
      <div className="hidden flex-1 border-b border-gray-300 md:block"></div>
      <LinkButton href="mailto:mohamed@elidrissi.dev" variant="secondary">
        Contact Me
      </LinkButton>
    </section>
  )
}

export default ContactMe

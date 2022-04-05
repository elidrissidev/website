import { LinkButton } from '@/components/Ui'

function ContactMe() {
  return (
    <section className="flex flex-col items-center md:flex-row md:justify-between">
      <h2 className="mb-10 font-serif text-4xl font-bold leading-10 tracking-tight text-center md:text-left md:mb-0 w-80">
        Interested in doing a project together?
      </h2>
      <LinkButton href="mailto:mohamed@elidrissi.dev" variant="secondary">
        Contact Me
      </LinkButton>
    </section>
  )
}

export default ContactMe

import { ArrowRight, Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <img
        src="/images/ship-docked.jpg"
        alt=""
        aria-hidden="true"
        className="photo absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <Container className="relative py-32 sm:py-44">
        <div className="max-w-xl">
          <p className="display text-[4.5rem] text-crimson-400 sm:text-[5.5rem]">
            404
          </p>
          <h1 className="display mt-4 text-[2.2rem] text-white sm:text-[2.8rem]">
            This page has gone off route
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-white/75">
            The page you were looking for does not exist or has moved. Head back
            to the homepage, or tell us what you were trying to find.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="light">
              Back to home <ArrowRight />
            </Button>
            <Button href="/contact" variant="quiet">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

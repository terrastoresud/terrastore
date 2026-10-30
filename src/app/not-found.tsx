import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[720px] px-5 py-24 sm:px-8">
      <p className="index">
        <span className="rule" aria-hidden="true" />
        404
      </p>
      <h1 className="mt-4 text-4xl font-medium">Cette page n’existe pas</h1>
      <p className="mt-4 leading-7 text-muted">
        Le lien est peut-être ancien. Les solutions et le formulaire de demande restent accessibles.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn inline-flex btn-primary">
          Accueil
        </Link>
        <Link href="/solutions" className="btn inline-flex btn-secondary">
          Solutions
        </Link>
        <Link href="/contact" className="btn inline-flex btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
}

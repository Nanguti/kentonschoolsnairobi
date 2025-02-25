import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Our School</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/our-school/about-us"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-school/accreditations-patrons"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Accreditations
                </Link>
              </li>
              <li>
                <Link
                  href="/our-school/our-stories"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Our Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Campuses</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/karen-school-nairobi"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Karen Campus
                </Link>
              </li>
              <li>
                <Link
                  href="/runda-school-nairobi"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Runda Campus
                </Link>
              </li>
              <li>
                <Link
                  href="/boarding-school-nairobi-kenya"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Boarding School
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/brookhouse-contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <Link
                  href="/admissions/admissions-process"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  href="/enquire-now"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Enquire Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/website-terms-use"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Brookhouse School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

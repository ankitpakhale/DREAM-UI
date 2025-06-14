import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="py-12 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <Separator className="mb-8" />
          <div className="grid md:grid-cols-4 gap-8 text-center sm:text-start">
            <div>
              <h3 className="font-bold text-lg mb-4">DREAM</h3>
              <p className="text-sm text-muted-foreground">
                Your roadmap to a dream life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Home
                  </Link>
                </div>
                <div>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Services
                  </Link>
                </div>
                <div>
                  <Link
                    href="/features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </Link>
                </div>
                <div>
                  <Link
                    href="/pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Pricing
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Developers</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    API Docs
                  </Link>
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </div>
                <div>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 DREAM. All rights reserved.</p>
            <p>
              Built with ❤️ by
              <Link
                className="mx-1 font-bold hover:text-violet-300"
                href={"https://ankitpakhale.netlify.app/"}
              >
                Ankit Pakhale
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

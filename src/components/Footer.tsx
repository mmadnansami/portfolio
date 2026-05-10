import { Link } from "@tanstack/react-router";
import { Mail, Phone, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/30 backdrop-blur">
      <div className="container mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-hero-gradient">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="text-gradient">Adnan Sami</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Cinematic direction, AI automation, and scalable growth — engineered for premium brands.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> adnanrihan56@gmail.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +8801317680620</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Ready to scale?</h4>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-hero-gradient px-5 py-2 text-sm font-medium text-primary-foreground shadow-elegant"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Adnan Sami. Crafted with intent.
      </div>
    </footer>
  );
}
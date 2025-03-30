import { Linkedin, LinkedinIcon, LucideLinkedin, Mail, X, XIcon } from "lucide-react";
import { Link } from "./ui/link";

export default function ContactInfo() {
    return(
        <div className="lg:col-span-2">
        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
        <div className="flex gap-4 mb-4">
          <Link href="mailto:devsouth.us@gmail.com"  className="text-white hover:text-white active:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com/devsouthdotus"  className="text-white hover:text-white active:text-white transition-colors">
            <XIcon className="w-6 h-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/devsouth-consulting-llc/" className="text-white hover:text-white active:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </Link>
        </div>
        <address className="not-italic">
          110 Lake Forest Ln<br />
          Clinton, MS 39056<br />
          +1 (662) 312-6815
        </address>
      </div>
    )}
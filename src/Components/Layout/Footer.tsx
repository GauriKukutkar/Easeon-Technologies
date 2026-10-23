import { NavLink } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
    Building2,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import logo from "../../assets/Logos/Easeon_logo.png";

const Footer = () => {
  return (
    <footer className="mt-28 w-full border-t border-[#123B7A] bg-[#041B4A] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1fr_1fr_1.2fr]">

          {/* ================= COMPANY ================= */}

          <div>

            <NavLink
              to="/"
              className="flex items-center gap-4"
            >

              <img
                src={logo}
                alt="Easeon Technologies"
                className="h-16 w-auto"
              />

              <div>

                <h2 className="text-2xl font-bold">

                  Easeon

                </h2>

                <p className="text-sm uppercase tracking-[0.3em] text-[#43A5FF]">

                  Technologies

                </p>

              </div>

            </NavLink>

            <p className="mt-6 max-w-sm text-[15px] leading-8 text-[#BFD3F8]">

              We build modern digital products, SaaS platforms,
              enterprise software and AI-powered solutions that
              empower businesses to innovate, automate and grow.

            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              {[
                {
                  icon: FaLinkedinIn,
                  link: "#",
                },
                {
                  icon: FaInstagram,
                  link: "#",
                },
                {
                  icon: FaFacebookF,
                  link: "#",
                },
                {
                  icon: FaYoutube,
                  link: "#",
                },
                {
    icon: FaXTwitter,
    link: "#",
  },
              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <a
                    key={index}
                    href={item.link}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#1C4387] bg-[#0A2A67] text-[#D8E7FF] transition-all duration-300 hover:-translate-y-1 hover:border-[#3DA5FF] hover:bg-[#0F56D9]"
                  >

                    <Icon size={18} />

                  </a>

                );

              })}

            </div>

          </div>

          {/* ================= COMPANY ================= */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">

              Company

            </h3>

            <div className="flex flex-col gap-4">

              <NavLink
                to="/about"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                About
              </NavLink>

              <NavLink
                to="/portfolio"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Team & Portfolio
              </NavLink>

              <NavLink
                to="/insights"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Inslights
              </NavLink>

              <NavLink
                to="/blog"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Blog
              </NavLink>

              <NavLink
                to="/careers"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Careers
              </NavLink>

            </div>

          </div>

          {/* ================= PRODUCTS ================= */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">

             Our Innovations

            </h3>

            <div className="flex flex-col gap-4">

              <NavLink
                to="/product/relax-mode"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Relax Mode
              </NavLink>

              <NavLink
                to="/product/relax-mode"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Web Application
              </NavLink>

              <NavLink
                to="/product/relax-mode"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Projects Completed 
              </NavLink>

              <NavLink
                to="/product"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Upcoming Products
              </NavLink>

            </div>

          </div>

          {/* ================= SOLUTIONS ================= */}

          <div>

            <h3 className="mb-6 text-lg font-semibold">

              Solutions

            </h3>

            <div className="flex flex-col gap-4">

              <NavLink
                to="/solutions/software-development"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Software Development
              </NavLink>

              <NavLink
                to="/solutions/web-development"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Web Development
              </NavLink>

              <NavLink
                to="/solutions/saas-development"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                SaaS Platforms
              </NavLink>

              <NavLink
                to="/solutions/ai-solutions"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                AI Solutions
              </NavLink>

              <NavLink
                to="/solutions/digital-marketing"
                className="text-[#BFD3F8] transition hover:translate-x-1 hover:text-[#4DB4FF]"
              >
                Digital Marketing
              </NavLink>

            </div>

          </div>

                    {/* ================= CONTACT ================= */}

          <div>
<h3 className="mb-6 text-lg font-semibold">
  Contact
</h3>

<div className="space-y-6">

  {/* Google Business Profile */}

  <a
    href="https://g.page/r/XXXXXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-4"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1C4387] bg-[#0A2A67] text-[#43A5FF] transition-all duration-300 group-hover:bg-[#1A75FF] group-hover:text-white">
      <Building2 size={18} />
    </div>

    <div>
      <p className="font-medium text-white">
        Our Business Profile
      </p>

      <span className="text-sm text-[#BFD3F8]">
        View our verified business profile
      </span>
    </div>
  </a>

  {/* Location */}

  <a
    href="https://maps.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-start gap-4"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1C4387] bg-[#0A2A67] text-[#43A5FF] transition-all duration-300 group-hover:bg-[#1A75FF] group-hover:text-white">
      <MapPin size={18} />
    </div>

    <div>
      <p className="font-medium text-white">
        Location
      </p>

      <span className="text-sm text-[#BFD3F8]">
        Nagpur, Maharashtra
      </span>
    </div>
  </a>

  {/* Email */}

  <a
    href="mailto:hello@easeon.tech"
    className="group flex items-start gap-4"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1C4387] bg-[#0A2A67] text-[#43A5FF] transition-all duration-300 group-hover:bg-[#1A75FF] group-hover:text-white">
      <Mail size={18} />
    </div>

    <div>
      <p className="font-medium text-white">
        Email
      </p>

      <span className="text-sm text-[#BFD3F8]">
        hello@easeon.tech
      </span>
    </div>
  </a>

  {/* Phone */}

  <a
    href="tel:+91XXXXXXXXXX"
    className="group flex items-start gap-4"
  >
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#1C4387] bg-[#0A2A67] text-[#43A5FF] transition-all duration-300 group-hover:bg-[#1A75FF] group-hover:text-white">
      <Phone size={18} />
    </div>

    <div>
      <p className="font-medium text-white">
        Phone
      </p>

      <span className="text-sm text-[#BFD3F8]">
        +91 XXXXX XXXXX
      </span>
    </div>
  </a>

</div>

          </div>

        </div>

        {/* ================= DIVIDER ================= */}

        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-[#1E4D98] to-transparent" />

        {/* ================= BOTTOM ================= */}

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <p className="text-center text-sm leading-7 text-[#9FBCEB] lg:text-left">

            © {new Date().getFullYear()} Easeon Technologies Pvt. Ltd.
            All Rights Reserved.

          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">

            <NavLink
              to="/privacy-policy"
              className="text-sm text-[#BFD3F8] transition hover:text-[#4DB4FF]"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms-conditions"
              className="text-sm text-[#BFD3F8] transition hover:text-[#4DB4FF]"
            >
              Terms & Conditions
            </NavLink>

            <NavLink
              to="/cookies-policy"
              className="text-sm text-[#BFD3F8] transition hover:text-[#4DB4FF]"
            >
              Cookies Policy
            </NavLink>

            <NavLink
              to="/refund-policy"
              className="text-sm text-[#BFD3F8] transition hover:text-[#4DB4FF]"
            >
              Refund Policy
            </NavLink>

            <NavLink
              to="/help_center"
              className="text-sm text-[#BFD3F8] transition hover:text-[#4DB4FF]"
            >
              Help Center
            </NavLink>

          </div>

        </div>

      </div>

    </footer>

  );
};

export default Footer;
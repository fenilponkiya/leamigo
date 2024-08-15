import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Instagram from "../../public/socialMedia/insta.svg";
import facebook from "../../public/socialMedia/facebook.svg";
import twitter from "../../public/socialMedia/twitter.svg";
import pinterest from "../../public/socialMedia/pinterest.svg";

const socialMediaIcons = [
  {
    id: 1,
    icon: Instagram,
  },
  {
    id: 2,
    icon: facebook,
  },
  {
    id: 3,
    icon: twitter,
  },
  {
    id: 4,
    icon: pinterest,
  },
];
export const Footer = () => {
  return (
    <footer className="bg-[var(--footer)] py-8">
      <div className="container px-8 sm:px-24 md:px-24 lg:px-26">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Column 1: Logo and Address --> */}
            <div>
              <div className="mb-6">
                <Link href="#">
                  <Image src={Logo} alt="Logo" />
                </Link>{" "}
              </div>
              <p className="font-[var(--foreground)] text-sm">
                A3, Execube, Sector 4, Noida <br />
                27, Old Gloucester Street, Central London <br />
                WC1N 3AX{" "}
              </p>
            </div>

            {/* <!-- Column 2: Pages Names --> */}
            <div>
              <h6 className="text-lg font-bold mb-4">About Us</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm">
                    Home
                  </a>
                </li>{" "}
                <li>
                  <a href="#" className="text-sm">
                    Special Deals{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Services{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Blogs{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Work with Us --> */}
            <div>
              <h6 className="text-lg font-bold mb-4">Work with Us</h6>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm">
                    Partner With Us{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Agent Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    Join Us as Local Amigo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 4: Follow Us --> */}
            <div>
              <h6 className="text-lg font-bold mb-4 ">Follow Us On</h6>
              <div className="flex space-x-4">
                {socialMediaIcons.map(({ icon }, index) => {
                  return <Image src={icon} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

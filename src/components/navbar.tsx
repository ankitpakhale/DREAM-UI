import {
  Home,
  Info,
  ShoppingCart,
  Book,
  Trees,
  Sunset,
  Zap,
  HelpCircle,
  Phone,
  Activity,
  BanknoteArrowDown,
  FileText,
  Mail,
  Menu,
  LogIn,
  UserPlus,
  Puzzle,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { ReactNode } from "react";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
      icon: ReactNode;
    };
    signup: {
      title: string;
      url: string;
      icon: ReactNode;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "/assets/logo/logo.png",
    alt: "DREAM",
    title: "Dynamic Realization Engine for Achieving Milestones",
  },
  // menuOriginal = [
  //   {
  //     title: "Home",
  //     url: "/",
  //     icon: <Home className="size-5 shrink-0 mr-1" />,
  //   },
  //   {
  //     title: "Products",
  //     url: "#",
  //     icon: <ShoppingCart className="size-5 shrink-0 mr-1" />,
  //     items: [
  //       {
  //         title: "Blog",
  //         description: "The latest industry news, updates, and info",
  //         icon: <Book className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Company",
  //         description: "Our mission is to innovate and empower the world",
  //         icon: <Trees className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Careers",
  //         description: "Browse job listing and discover our workspace",
  //         icon: <Sunset className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Support",
  //         description:
  //           "Get in touch with our support team or visit our community forums",
  //         icon: <Zap className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Resources",
  //     url: "#",
  //     icon: <Book className="size-5 shrink-0 mr-1" />,
  //     items: [
  //       {
  //         title: "Help Center",
  //         description: "Get all the answers you need right here",
  //         icon: <HelpCircle className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Contact Us",
  //         description: "We are here to help you with any questions you have",
  //         icon: <Phone className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Status",
  //         description: "Check the current status of our services and APIs",
  //         icon: <Activity className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //       {
  //         title: "Terms of Service",
  //         description: "Our terms and conditions for using our services",
  //         icon: <FileText className="size-5 shrink-0" />,
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "About",
  //     url: "/about",
  //     icon: <Info className="size-5 shrink-0 mr-1" />,
  //   },
  //   {
  //     title: "Playground",
  //     url: "/playground",
  //     icon: <Puzzle className="size-5 shrink-0 mr-1" />,
  //   },
  //   {
  //     title: "Contact",
  //     url: "/contact",
  //     icon: <Mail className="size-5 shrink-0 mr-1" />,
  //   },
  // ],
  menu = [
    {
      title: "Home",
      url: "/",
      icon: <Home className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "About",
      url: "/about",
      icon: <Info className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "Services",
      url: "/services",
      icon: <Info className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "How It Works",
      url: "/how-it-works",
      icon: <Info className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "Playground",
      url: "/playground",
      icon: <Puzzle className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "Pricing",
      url: "/pricing",
      icon: <BanknoteArrowDown className="size-5 shrink-0 mr-1" />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <Mail className="size-5 shrink-0 mr-1" />,
    },
  ],
  auth = {
    login: {
      title: "Login",
      url: "#",
      icon: <LogIn className="size-5 shrink-0 mr-1" />,
    },
    signup: {
      title: "Sign up",
      url: "#",
      icon: <UserPlus className="size-5 shrink-0 mr-1" />,
    },
  },
}: NavbarProps) => {
  return (
    <section className="py-4">
      {/* Desktop Menu */}
      <nav className="hidden justify-between lg:flex">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-15" alt={logo.alt} />
            {/* <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span> */}
          </Link>
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex gap-2">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button variant="success">
              <SignInButton />
            </Button>
            <Button variant="primary">
              <SignUpButton />
            </Button>
          </SignedOut>

          <ThemeToggle className="h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-15" alt={logo.alt} />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href={logo.url} className="flex items-center gap-2">
                    <img src={logo.src} className="max-h-15" alt={logo.alt} />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-4">
                <Accordion
                  type="single"
                  collapsible
                  className="flex w-full flex-col gap-4"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                <div className="flex flex-col gap-3">
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                  {/* <Button variant="outline">
                    <Link href={auth.login.url}>
                      {auth.login.icon} {auth.login.title}
                    </Link>
                  </Button>
                  <Button>
                    <Link href={auth.signup.url}>
                      {auth.signup.icon} {auth.signup.title}
                    </Link>
                  </Button> */}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>
          {item.icon}
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.icon}
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          <div className="flex gap-2">
            {item.icon}
            {item.title}
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="flex gap-2 text-md font-semibold"
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <Link
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar };

import type { PropsWithChildren } from 'react';
import { ErlangOfficialLogo } from '@/components/erlang-official-logo';
import { RouterLink } from '@/components/router-link';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import { GitHubIcon } from '@/components/icons/git-hub-icon';
import clsx from 'clsx';

function MenuItem(props: PropsWithChildren<{ href: string }>) {
  return (
    <RouterLink href={props.href} className="text-base text-gray-500 hover:text-gray-900">
      {props.children}
    </RouterLink>
  );
}

function MenuTitle(props: PropsWithChildren<{}>) {
  return <h3 className="text-xl font-bold text-gray-700 tracking-wider">{props.children}</h3>;
}

function Menu(props: PropsWithChildren<{ title: string }>) {
  return (
    <div className="flex flex-col gap-4">
      <MenuTitle>{props.title}</MenuTitle>
      <nav className="flex flex-col gap-4">{props.children}</nav>
    </div>
  );
}

type SocialMediaLinkProps = {
  name: string;
  href: string;
  icon: (props: { className: string; 'aria-hidden': 'true' }) => JSX.Element;
};

function SocialMediaLink(props: SocialMediaLinkProps) {
  return (
    <a href={props.href} className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{props.name}</span>
      <props.icon className="h-12 w-12" aria-hidden="true" />
    </a>
  );
}

export function Footer(props: { className?: string }) {
  return (
    <footer className={clsx(props.className, 'bg-gray-100')} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-32 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <ErlangOfficialLogo className="h-20 self-start" />
            <p className="text-gray-500 text-base">Practical functional programming for a parallel world</p>
            <div className="flex gap-6">
              <SocialMediaLink name="Twitter" href="/" icon={TwitterIcon} />
              <SocialMediaLink name="GitHub" href="/" icon={GitHubIcon} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <Menu title="Community">
              <MenuItem href="/">Blog</MenuItem>
              <MenuItem href="/">Opportunities</MenuItem>
            </Menu>
            <Menu title="Resources">
              <MenuItem href="/">Get Started</MenuItem>
              <MenuItem href="/">News</MenuItem>
              <MenuItem href="/">Books</MenuItem>
              <MenuItem href="/">Releases</MenuItem>
            </Menu>
            <Menu title="About Us">
              <MenuItem href="/">About</MenuItem>
              <MenuItem href="/">News</MenuItem>
              <MenuItem href="/">Why Erlang</MenuItem>
            </Menu>
            <Menu title="Legal">
              <MenuItem href="/">Privacy Policy</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </footer>
  );
}

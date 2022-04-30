import type { PropsWithChildren } from 'react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

type RouterLinkProps = PropsWithChildren<Omit<LinkProps, 'passHref'> & JSX.IntrinsicElements['a']>;

export function RouterLink(props: RouterLinkProps) {
  const { href, as, replace, scroll, shallow, prefetch, locale, ...anchorRest } = props;
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
      locale={locale}
      passHref
    >
      <a {...anchorRest} />
    </Link>
  );
}

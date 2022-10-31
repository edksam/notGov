import { FC, createElement as h } from 'react';
import { PageProps } from '@not-govuk/app-composer';
import { NotGovUKPage as Page} from '@not-govuk/components';
import config from './config';

import './app.scss';

const siteTitle = config.title;

export const PageWrap: FC<PageProps> = ({ routes, children }) => {
  const compare = (a, b) => (
    a.href > b.href
    ? 1
    : -1
  );
  const navigation = routes
    .filter(e => e.href !== '/' && e.href !== '/sitemap')
    .map(e => ({
      href: e.href,
      text: e.title
    }))
    .sort(compare);

  return (
    <Page
      feedbackHref="/feedback"
      navigation={navigation}
      meta={[
        { href: "/sitemap", text: "Sitemap" },
      ]}
      phase="alpha"
      serviceName={siteTitle}
      title={siteTitle}
    >
      {children}
    </Page>
  );
};

export default PageWrap;

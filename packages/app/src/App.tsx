import { createApp } from '@backstage/frontend-defaults';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';
import { SignInPage } from '@backstage/core-components';
import { githubAuthApiRef } from '@backstage/core-plugin-api';
import { TechDocsIndexPage } from '@backstage/plugin-techdocs';

export default createApp({
  features: [catalogPlugin, navModule, homeModule],
  components: {
    SignInPage: SignInPage,
    TechDocsIndexPage: TechDocsIndexPage,
  },
  apis: {
    [githubAuthApiRef]: githubAuthApiRef,
  },
});

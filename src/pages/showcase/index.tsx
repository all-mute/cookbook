/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Translate, {translate} from '@docusaurus/Translate';

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import ShowcaseSearchBar from '@site/src/pages/showcase/_components/ShowcaseSearchBar';
import ShowcaseCards from './_components/ShowcaseCards';
import ShowcaseFilters from './_components/ShowcaseFilters';

const TITLE = translate({message: 'Application Showcase'});
const DESCRIPTION = translate({
  message: 'Библиотека приложений, которые могут работать с Yandex Foundation Models',
});
const SUBMIT_URL = 'https://github.com/ai-cookbook/cookbook/discussions/7826';

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>{DESCRIPTION}</p>
      <Link className="button button--primary  items-center justify-center" style={{width: 'auto', height:'40px', fontSize:'16px', fontWeight:'500'}} to={SUBMIT_URL}>
        <Translate  id="showcase.header.button">
          🙏 Добавить свое приложение
        </Translate>
      </Link>
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <ShowcaseHeader />
        <ShowcaseFilters />
        <div
          style={{display: 'flex', marginRight: 'auto'}}
          className="container">
          <ShowcaseSearchBar />
        </div>
        <ShowcaseCards />
      </main>
    </Layout>
  );
}

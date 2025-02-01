/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';
import Heading from '@theme/Heading';

const Playgrounds = [
  {
    name: 'VIA',
    image: require('@site/static/img/playgrounds/222621960-ddfb8ee6-a486-4c66-8852-b204ba7c807b.png'),
    url: 'https://via.helix.site',
    urlTS: 'https://usevia.app/',
    description: (
      <Translate id="playground.codesandbox.description">
        VIA 是一款流行的键盘自定义工具。
        推荐使用 Helix Version，键盘连接即可自动识别，无需上传 json 配置文件。
      </Translate>
    ),
  }
];

interface Props {
  name: string;
  image: string;
  url: string;
  urlTS: string;
  description: JSX.Element;
}

function PlaygroundCard({name, image, url, urlTS, description}: Props) {
  return (
    <div className="col col--6 margin-bottom--lg">
      <div className={clsx('card')}>
        <div className={clsx('card__image')}>
            <Image img={image} alt={`${name}'s image`} />
        </div>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <div style={{textAlign: 'center'}}>
            <b>
              <Translate id="playground.tryItButton">Try it now!</Translate>
            </b>
          </div>
          <div className="button-group button-group--block">
            <Link className="button button--secondary button-gradient" to={url}>
              Helix Version
            </Link>
            <Link className="button button--secondary" to={urlTS}>
              Offical Version
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaygroundCardsRow(): JSX.Element {
  return (
    <div className="row">
      {Playgrounds.map((playground) => (
        <PlaygroundCard key={playground.name} {...playground} />
      ))}
    </div>
  );
}
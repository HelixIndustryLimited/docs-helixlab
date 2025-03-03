import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/Admonition/Type/Tip';
import AdmonitionLayout from '@theme/Admonition/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const infimaClassName = 'alert alert--feature';

const defaultProps = {
  icon: <FontAwesomeIcon icon={faStar} />,
  title: (
    <Translate
      id="theme.admonition.feature"
      description="The default label used for the Feature admonition (:::feature)">
      feature
    </Translate>
  ),
};

export default function AdmonitionTypeFeature(props: Props): JSX.Element {
  return (
    <AdmonitionLayout
      {...defaultProps}
      {...props}
      className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  );
}

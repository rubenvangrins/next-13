'use client';

import { ComponentInterface } from '../../declare/global.components';
import Text from '../components/Text/Text';

export default function Components({ postType, components }: { postType: string, components: ComponentInterface[] }) {
  return (
    <>
      {components.map((component, index) => {
        const { __typename } = component;

        switch (__typename) {
          case `${postType}_Acfcomponents_Components_Text`:
            return <Text {...component} key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
}

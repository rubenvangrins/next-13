import { ComponentInterface } from '../../declare/global.components';
import { capital } from '../../utils/text';
import Text from '../components/Text';

export default function Components({ postType, components }: { postType: string, components: ComponentInterface[] }) {
  return (
    <>
      {components.map((component, index) => {
        const { fieldGroupName } = component;

        switch (fieldGroupName) {
          case `${capital(postType)}_Acfcomponents_Components_Text`:
            return <Text key={index} {...component} />;
          default:
            return null;
        }
      })}
    </>
  );
}

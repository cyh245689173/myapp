import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '丸了鸭出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 丸了鸭 GitHub</>,
          href: 'https://github.com/cyh245689173',
          blankTarget: true,
        },
        {
          key: 'blog',
          title: '丸了鸭 博客',
          href: 'https://www.kdy.icu',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;

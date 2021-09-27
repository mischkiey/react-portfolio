// Images & SVGs
import { ReactComponent as Apollo } from '../../assets/apollo.svg';
import { ReactComponent as GraphQL } from '../../assets/graphql.svg';
import { ReactComponent as MaterialUI } from '../../assets/material-ui.svg';
import { ReactComponent as Prisma } from '../../assets/prisma.svg';
import { ReactComponent as ReactIcon } from '../../assets/react.svg';
import { ReactComponent as Redux } from '../../assets/redux.svg';
import { ReactComponent as TypeScript } from '../../assets/typescript.svg';

// Types
import { FunctionComponent, SVGProps } from 'react';

interface Skill {
  icon: FunctionComponent<SVGProps<SVGElement> & { title?: string | undefined }>;
  name: string;
  viewBox: string;
}

const skills: Skill[] = [
  {
    // @ts-ignore
    icon: Apollo,
    name: 'Apollo Client & Server',
    viewBox: "0 0 256 256",
  },
  {
    // @ts-ignore
    icon: Apollo,
    name: 'Apollo Client & Server',
    viewBox: "0 0 256 256",
  },
];

export default skills;
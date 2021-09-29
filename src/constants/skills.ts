// Images & SVGs
import { ReactComponent as Apollo } from '../assets/apollo.svg';
import { ReactComponent as CSS } from '../assets/css.svg';
import { ReactComponent as Firebase } from '../assets/firebase.svg';
import { ReactComponent as Git } from '../assets/git.svg';
import { ReactComponent as GitHub } from '../assets/github.svg';
import { ReactComponent as GraphQL } from '../assets/graphql.svg';
import { ReactComponent as HTML } from '../assets/html.svg';
import { ReactComponent as JavaScript } from '../assets/javascript.svg';
import { ReactComponent as JQuery } from '../assets/jquery.svg';
import { ReactComponent as MaterialUI } from '../assets/material-ui.svg';
import { ReactComponent as MySQL } from '../assets/mysql.svg';
import { ReactComponent as NodeJS } from '../assets/node-js.svg';
import { ReactComponent as PostgresQL } from '../assets/postgresql.svg';
import { ReactComponent as Prisma } from '../assets/prisma.svg';
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as Redux } from '../assets/redux.svg';
import { ReactComponent as StyledComponents } from '../assets/styled-components.svg';
import { ReactComponent as TypeScript } from '../assets/typescript.svg';

// Types
import { FunctionComponent, SVGProps } from 'react';

export interface Skill {
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
    icon: CSS,
    name: 'CSS',
    viewBox: "0 0 256 361",
  },
  {
    // @ts-ignore
    icon: Firebase,
    name: 'Firebase',
    viewBox: "0 0 256 351",
  },
  {
    // @ts-ignore
    icon: Git,
    name: 'Git',
    viewBox: "0 0 256 256",
  },
  {
    // @ts-ignore
    icon: GitHub,
    name: 'GitHub',
    viewBox: "0 0 256 250",
  },
  {
    // @ts-ignore
    icon: GraphQL,
    name: 'GraphQL',
    viewBox: "0 0 256 288",
  },
  {
    // @ts-ignore
    icon: HTML,
    name: 'HTML',
    viewBox: "0 0 512 512",
  },
  {
    // @ts-ignore
    icon: JavaScript,
    name: 'JavaScript',
    viewBox: "0 0 256 256",
  },
  {
    // @ts-ignore
    icon: JQuery,
    name: 'JQuery',
    viewBox: "0 0 512 116",
  },
  {
    // @ts-ignore
    icon: MaterialUI,
    name: 'Material UI',
    viewBox: "0 0 256 204",
  },
  {
    // @ts-ignore
    icon: MySQL,
    name: 'MySQL',
    viewBox: "0 0 256 252",
  },
  {
    // @ts-ignore
    icon: NodeJS,
    name: 'Node JS',
    viewBox: "0 0 256 289",
  },
  {
    // @ts-ignore
    icon: PostgresQL,
    name: 'PostgresQL',
    viewBox: "0 0 256 264",
  },
  {
    // @ts-ignore
    icon: Prisma,
    name: 'Prisma',
    viewBox: "0 0 256 310",
  },
  {
    // @ts-ignore
    icon: ReactIcon,
    name: 'React',
    viewBox: "0 0 256 230",
  },
  {
    // @ts-ignore
    icon: Redux,
    name: 'Redux',
    viewBox: "0 0 256 244",
  },
  {
    // @ts-ignore
    icon: StyledComponents,
    name: 'Styled Components',
    viewBox: "0 0 318 318",
  },
  {
    // @ts-ignore
    icon: TypeScript,
    name: 'TypeScript',
    viewBox: "0 0 256 256",
  },
];

export default skills;
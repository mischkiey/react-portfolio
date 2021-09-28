// Hooks & Methods
import React from 'react';

// Components
import { 
  AppBar,
  Grid,
  Link,
  IconButton,
  Typography,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button,
} from '@mui/material';
import Image from 'material-ui-image';
import ScrollAnimation from 'react-animate-on-scroll';

// Images & SVGs
import { 
  GitHub,
  Facebook,
  Instagram,
  LinkedIn,
  BrokenImage,
} from '@mui/icons-material';
import Dummy from '../../assets/dummy.jpg';
import { ReactComponent as Apollo } from '../../assets/apollo.svg';
import { ReactComponent as GraphQL } from '../../assets/graphql.svg';
import { ReactComponent as MaterialUI } from '../../assets/material-ui.svg';
import { ReactComponent as Prisma } from '../../assets/prisma.svg';
import { ReactComponent as ReactIcon } from '../../assets/react.svg';
import { ReactComponent as Redux } from '../../assets/redux.svg';
import { ReactComponent as TypeScript } from '../../assets/typescript.svg';

// Styles
import 'animate.css/animate.min.css';
import './styles.css';

export default function App() {
  return (
   <Grid
    container
    flexDirection="column"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, auto)', // repeat(2, 1fr)
      // minHeight: '100vh',
      padding: '6em',
      rowGap: '6em',
    }}
   >
    <AppBar
      color="transparent"
      elevation={0}
      position="relative"
      sx={{
        display: 'inherit',
        gridTemplateColumns: 'inherit',
        gridColumn: '1 / span 2',
        // gridRow: 1,
        // padding: 'inherit',
      }}
    >
      <Grid
        container
        alignItems="center"
        component="nav"
        sx={{
          columnGap: '1em',
          gridColumn: 1,
        }}
      >
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          ABOUT
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          SKILLS
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          PROJECTS
        </Link>
        <Link
          underline="hover"
          sx={{
            cursor: 'pointer',
            fontFamily: 'button.fontFamily',
            fontWeight: 'medium',
          }}
        >
          CONTACT
        </Link>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          columnGap: '1em',
          gridColumn: 2,
        }}
      >
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </Grid>
    </AppBar>
    <Grid
      container
      alignItems="center"
      flexDirection="column"
      sx={{
        gridColumn: '1 / span 2',
        rowGap: 'inherit',
      }}
    >
      <Typography
        align="center"
        variant="h1"
        sx={{fontSize: '5rem'}}
      >
        {/* Lorem ipsum dolor sit amet,
        consectetur adipiscing elit */}
        Michelle Stepanova <br />
        Full Stack Web Developer <br />
        Based in Miami
      </Typography>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          border: 1,
          borderColor: 'grey.300',
          borderRadius: '50%',
          height: '18em',
          width: '18em',
        }}
      >
        <Grid
          item
          sx={{
            borderRadius: '50%',
            height: '15em',
            overflow: 'hidden',
            position: 'relative',
            width: '15em',
          }}
        >
        <Image
          alt="Dummy"
          errorIcon={
            <BrokenImage
              sx={{ 
                color: 'grey.300',
                height: 48,
                width: 48,
              }}
            />
          }
          loading={
            <CircularProgress
              size={48}
            />
          }
          src={Dummy}
        />
        </Grid>
      </Grid>
    </Grid>
    <ScrollAnimation
      animateIn="grow"
      animateOnce={true}
      animateOut="shrink"
      duration={2}
      offset={300}
      style={{gridColumn: '1 / -1'}}
    >
      <Divider
        sx={{
          border: 1,
        }}
      />
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce={true}
      animateOut="fadeOut"
      duration={2}
      offset={300}
      style={{gridColumn: '1 / -1'}}
    >
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          gridColumn: '1 / -1',
          rowGap: '3em',
        }}
      >
        <Typography
          align="center"
          variant="h2"
          gutterBottom={true}
          sx={{fontSize: 'h3.fontSize'}}
        >
          About
        </Typography>
        <Typography
          align="left"
          gutterBottom={true}
          variant="body1"
          sx={{fontSize: 'h6.fontSize'}}
        >
          &#09; Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </Typography>
      </Grid>
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="grow"
      animateOnce={true}
      animateOut="shrink"
      duration={2}
      offset={300}
      style={{gridColumn: '1 / -1'}}
    >
      <Divider
        sx={{border: 1}}
      />
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce={true}
      animateOut="fadeOut"
      duration={2}
      offset={300}
      style={{gridColumn: '1 / -1'}}
    >
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          gridColumn: '1 / -1',
          rowGap: '3em',
        }}
      >
        <Typography
          align="center"
          variant="h2"
          gutterBottom={true}
          sx={{
            fontSize: 'h3.fontSize',
            gridColumn: '1 / -1',
          }}
        >
          Skills & Experience
        </Typography>
        <List
          sx={{
            columnCount: 5,
            columnFill: 'balance',
            gridColumn: '1 / 1',

            '& li': {
              breakInside: 'avoid',
              marginBottom: '1em',
            },

            '& .MuiListItemIcon-root': {
              marginRight: '1em',
              minWidth: '1em',
              width: '6em',
            },

            '& .MuiListItemText-primary.MuiTypography-root': {
              fontFamily: 'button.fontFamily',
              fontSize: 'caption.fontSize',
            },
          }}
        >
          <ListItem>
            <ListItemIcon>
              <ReactIcon
                viewBox="0 0 256 230"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TypeScript
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="TypeScript"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Apollo
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Apollo Client & Server"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GraphQL
                viewBox="0 0 256 288"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="GraphQL"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Prisma
                viewBox="0 0 256 310"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Prisma"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Redux
                viewBox="0 0 256 244"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React Redux"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialUI
                viewBox="0 0 256 204"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Material UI"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ReactIcon
                viewBox="0 0 256 230"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TypeScript
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="TypeScript"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Apollo
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Apollo Client & Server"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GraphQL
                viewBox="0 0 256 288"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="GraphQL"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Prisma
                viewBox="0 0 256 310"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Prisma"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Redux
                viewBox="0 0 256 244"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React Redux"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialUI
                viewBox="0 0 256 204"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Material UI"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ReactIcon
                viewBox="0 0 256 230"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TypeScript
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="TypeScript"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Apollo
                viewBox="0 0 256 256"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Apollo Client & Server"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <GraphQL
                viewBox="0 0 256 288"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="GraphQL"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Prisma
                viewBox="0 0 256 310"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Prisma"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Redux
                viewBox="0 0 256 244"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="React Redux"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MaterialUI
                viewBox="0 0 256 204"
                height="auto"
                width="100%"
              />
            </ListItemIcon>
            <ListItemText
              primary="Material UI"
            />
          </ListItem>
        </List>
      </Grid>
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="grow"
      animateOnce={true}
      animateOut="shrink"
      duration={2}
      offset={300}
      style={{gridColumn: '1 / -1'}}
    >
      <Divider
        sx={{border: 1}}
      />
    </ScrollAnimation>
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce={true}
      animateOut="fadeOut"
      duration={2}
      offset={100}
      style={{gridColumn: '1 / -1'}}
    >
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          gridColumn: '1 / -1',
          rowGap: '3em',
        }}
      >
        <Typography
          align="center"
          variant="h2"
          gutterBottom={true}
          sx={{fontSize: 'h3.fontSize'}}
        >
          Let's Connect
        </Typography>
        <Grid
          container
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{rowGap: 'inherit'}}
        >
          <form
            style={{
              border: '1px solid',
              borderColor: '#e0e0e0',
              borderRadius: '4px',
              columnGap: '3em',
              display: 'grid',
              padding: '3em',
              rowGap: '3em',
              width: '50%',
            }}
          >
            <TextField
              required
              id="name"
              label="Name"
              InputLabelProps={{shrink: true}}
              variant="standard"
              sx={{
                gridColumn: 1,
                width: '100%',
              }}
            />
            <TextField
              required
              id="email"
              label="Email"
              InputLabelProps={{shrink: true}}
              variant="standard"
              sx={{
                gridColumn: 2,
                width: '100%',
              }}
            />
            <TextField
              required
              id="message"
              label="Message"
              InputLabelProps={{shrink: true}}
              multiline={true}
              rows={10}
              // variant="standard"
              sx={{gridColumn: '1 / span 2'}}
            />
            <Button
              variant="contained"
              sx={{
                gridColumn: 1,
                width: '50%',
              }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </ScrollAnimation>
  </Grid>
  );
}
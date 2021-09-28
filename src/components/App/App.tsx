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
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@mui/material';
import Image from 'material-ui-image';
import ScrollAnimation from 'react-animate-on-scroll';

// Constants
import skills from '../../constants/skills';

// Images & SVGs
import { 
  GitHub,
  Facebook,
  Instagram,
  LinkedIn,
  BrokenImage,
  Link as LinkIcon,
  Share,
} from '@mui/icons-material';
import Dummy from '../../assets/dummy.jpg';

// Styles
import 'animate.css/animate.min.css';
import './styles.css';

// Types
import { Skill } from '../../constants/skills';

export default function App() {
  function renderSkillListItems(skills: Skill[]) {
    return skills.map(({
      icon: Icon,
      name,
      viewBox,
    }, idx) => (
      <ListItem
        key={idx}
      >
        <ListItemIcon>
          <Icon
            {...viewBox}
            height="auto"
            width="100%"
          />
        </ListItemIcon>
        <ListItemText
          primary={name}
        />
      </ListItem>
    ));
  }
  
  return (
   <Grid
    container
    flexDirection="column"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)', // repeat(2, 1fr)
      minHeight: '100vh',
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
        Michelle Francisco <br />
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
            columnCount: 4,
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
          {renderSkillListItems(skills)}
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
          Projects
        </Typography>
        <Grid
          container
          alignItems="center"
          flexWrap="nowrap"
          sx={{
            display: 'grid',
            gridGap: '3em',
            gridTemplateColumns: 'repeat(5, calc(30% - 1.5em))',
            overflowX: 'scroll',
            scrollSnapAlign: 'start',
            scrollSnapType: 'x proximity',
          }}
        >
          <Card
            sx={{
              border: 1,
              borderColor: 'grey.300',
            }}
          >
            <CardHeader
              action={
                <IconButton>
                  <LinkIcon />
                </IconButton>
              }
              title="PROJECT TITLE"
              subheader="Project Completion Date"
              sx={{
                '& .MuiCardHeader-title': {
                  fontFamily: 'button.fontFamily',
                },
              }}
            />
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
              style={{
                display: 'flex',
                paddingTop: 'none',
              }}
              imageStyle={{
                position: 'relative',
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            sx={{
              border: 1,
              borderColor: 'grey.300',
            }}
          >
            <CardHeader
              action={
                <IconButton>
                  <LinkIcon />
                </IconButton>
              }
              title="PROJECT TITLE"
              subheader="Project Completion Date"
              sx={{
                '& .MuiCardHeader-title': {
                  fontFamily: 'button.fontFamily',
                },
              }}
            />
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
              style={{
                display: 'flex',
                paddingTop: 'none',
              }}
              imageStyle={{
                position: 'relative',
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            sx={{
              border: 1,
              borderColor: 'grey.300',
            }}
          >
            <CardHeader
              action={
                <IconButton>
                  <LinkIcon />
                </IconButton>
              }
              title="PROJECT TITLE"
              subheader="Project Completion Date"
              sx={{
                '& .MuiCardHeader-title': {
                  fontFamily: 'button.fontFamily',
                },
              }}
            />
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
              style={{
                display: 'flex',
                paddingTop: 'none',
              }}
              imageStyle={{
                position: 'relative',
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </CardActions>
          </Card>
          <Card
            sx={{
              border: 1,
              borderColor: 'grey.300',
            }}
          >
            <CardHeader
              action={
                <IconButton>
                  <LinkIcon />
                </IconButton>
              }
              title="PROJECT TITLE"
              subheader="Project Completion Date"
              sx={{
                '& .MuiCardHeader-title': {
                  fontFamily: 'button.fontFamily',
                },
              }}
            />
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
              style={{
                display: 'flex',
                paddingTop: 'none',
              }}
              imageStyle={{
                position: 'relative',
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <GitHub />
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
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
    <Divider
      sx={{
        border: 1,
        gridColumn: '1 / -1',
      }}
    />
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        columnGap: '1em',
        gridColumn: '1 / -1',
        rowGap: '3em',
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
  </Grid>
  );
}
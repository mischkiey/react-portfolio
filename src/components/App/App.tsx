// Hooks & Methods
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// Components
import { 
  Grid,
  IconButton,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@mui/material';
import Image from 'material-ui-image';
import ScrollAnimation from 'react-animate-on-scroll';
import AppBar from '../AppBar';
import Divider from '../Utils/Divider';
import Contact from '../Contact';

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
import { Project } from '../../constants/projects';

export default function App() {
  const theme = useTheme();
  const isScreenWidthMd = useMediaQuery(theme.breakpoints.down('md'));
  const isScreenWidthSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isScreenWidthXs = useMediaQuery('(max-width: 375px)');

  function handleScrollIntoView(elementId: string, blockPosition?: ScrollLogicalPosition) {
    document
      ?.getElementById(elementId)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: blockPosition,
        inline: 'center',
      });
  }

  function renderSkillListItems(skills: Skill[],) {
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

  function renderProjectCards(projects: Project[]) {
    return projects.map((_, idx) => (
      <Card
        key={idx}
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
    ));
  }
  
  return (
    <Grid
      container
      flexDirection="column"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '6em',
        rowGap: '8em',

        ...(isScreenWidthSm && {padding: '3em'}),
        ...(isScreenWidthXs && {padding: '1em'}),
      }}
    >
      <AppBar />
      <Grid
        container
        alignItems="center"
        flexDirection="column"
        sx={{
          gridColumn: '1 / span 2',
          rowGap: '5em',
        }}
      >
        <Typography
          align="center"
          variant="h1"
          sx={{fontSize: '5rem'}}
        >
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
            overflow: 'hidden',
            position: 'relative',
            width: '18em',
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
            style={{
              display: 'flex',
              borderRadius: '50%',
              height: '15em',
              overflow: 'hidden',
              position: 'relative',
              paddingTop: 'none',
              width: '15em',
            }}
            imageStyle={{objectFit: 'cover'}}
          />
        </Grid>
      </Grid>
      <Divider
        id="about"
        enableScrollAnimation={true}
      />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        animateOut="fadeOut"
        duration={2}
        offset={300}
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / -1',
          justifyContent: 'center',
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
      </ScrollAnimation>
      <Divider
        id="skills"
        enableScrollAnimation={true}
      />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        animateOut="fadeOut"
        duration={2}
        offset={300}
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / -1',
          justifyContent: 'center',
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
            columnCount: isScreenWidthXs
              ? 1
              : isScreenWidthSm
                ? 2
                : 3,
            columnFill: 'balance',
            gridColumn: '1 / -1',

            '& li': {
              breakInside: 'avoid',
              marginBottom: '1em',
            },

            '& .MuiListItemIcon-root': {
              height: '6em',
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
      </ScrollAnimation>
      <Divider
        id="projects"
        enableScrollAnimation={true}
      />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        animateOut="fadeOut"
        duration={2}
        offset={300}
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / -1',
          justifyContent: 'center',
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
            gridTemplateColumns: 'repeat(6, calc(50% - 1.5em))',
            overflowX: 'scroll',
            scrollSnapAlign: 'start',
            scrollSnapType: 'x proximity',

            ...(isScreenWidthMd && {gridTemplateColumns: 'repeat(6, calc(100%))'}),
          }}
        >
          {renderProjectCards([...Array(6)])}
        </Grid>
      </ScrollAnimation>
      <Divider
        id="contact"
        enableScrollAnimation={true}
      />
      <ScrollAnimation
        animateIn="fadeIn"
        animateOnce={true}
        animateOut="fadeOut"
        duration={2}
        offset={300}
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gridColumn: '1 / -1',
          justifyContent: 'center',
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
        <Contact />
      </ScrollAnimation>
      <Divider
        enableScrollAnimation={false}
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
        <IconButton
          component="a"
          disableRipple={true}
          href="https://www.facebook.com/Mischkiey/"
          sx={{
            '&:hover, &:hover .MuiSvgIcon-root': {
              backgroundColor: 'transparent',
              fill: '#b71c1c',
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          component="a"
          disableRipple={true}
          href="https://github.com/mischkiey"
          sx={{
            '&:hover, &:hover .MuiSvgIcon-root': {
              backgroundColor: 'transparent',
              fill: '#b71c1c',
            },
          }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component="a"
          disableRipple={true}
          href="https://www.instagram.com/mischkiey/"
          sx={{
            '&:hover, &:hover .MuiSvgIcon-root': {
              backgroundColor: 'transparent',
              fill: '#b71c1c',
            },
          }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component="a"
          disableRipple={true}
          href="https://www.linkedin.com/in/michellecfrancisco/"
          sx={{
            '&:hover, &:hover .MuiSvgIcon-root': {
              backgroundColor: 'transparent',
              fill: '#b71c1c',
            },
          }}
        >
          <LinkedIn />
        </IconButton>
      </Grid>
    </Grid>
  );
}
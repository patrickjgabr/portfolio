import { Grommet, Box, Button, Heading, Markdown } from "grommet";
import ContentBox from "./components/ContentBox";
import { DocumentPdf, Github, Linkedin, Mail, Resume } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  button: {
    padding: {
      horizontal: "10px",
    },
    border: {
      radius: "0px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box
        background="#282a36"
        height="300px"
        elevation="medium"
        style={{ position: "relative" }}
        justify="center"
      >
        <Heading
          margin={{ bottom: "xsmall", top: "none", horizontal: "xlarge" }}
        >
          Patrick Gabriel
        </Heading>
        <Heading
          level={2}
          margin={{ vertical: "none", horizontal: "xlarge" }}
          color="#50fa7b"
        >
          Aspiring Software Engineer from Brisbane, Australia.
        </Heading>

        <Box
          style={{ position: "absolute", bottom: 0, right: 0 }}
          pad="small"
          direction="row"
          gap="small"
        >
          <Button
            primary
            label="Email"
            icon={<Mail />}
            color="#ff5555"
            onClick={window.open("mailto:patrickjgabr@gmail.com")}
          />
          <Button
            primary
            label="LinkedIn"
            icon={<Linkedin />}
            color="#8be9fd"
          />
          <Button primary label="Github" icon={<Github />} color="#ffb86c" />
          {/* <Button primary label="Resume" icon={<DocumentPdf />} /> */}
        </Box>
      </Box>
      <ContentBox content={<Markdown>Hello world.</Markdown>} />
      <ContentBox
        content={
          <Heading level={3} margin="none">
            Blog
          </Heading>
        }
      />
      <ContentBox
        content={
          <Heading level={3} margin="none">
            Projects
          </Heading>
        }
      />
    </Grommet>
  );
}

export default App;

import chalk from "chalk"
import boxen from "boxen"
import * as fs from "fs"
import * as path from "path"

// Text + chalk definitions
const data = {
  name: chalk.bold(chalk.whiteBright("           Sebastian Doell")),
  handle: chalk.bold(chalk.whiteBright("@katallaxie")),
  work: `${chalk.white("Enterprise Architect")} ${chalk.yellow("@")} ${chalk.white("ZEISS 🦄.")}`,
  github: chalk.gray("https://github.com/") + chalk.green("katallaxie"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("katallaxie"),
  mastodon: `${chalk.cyan("@katallaxie")}@${chalk.gray("mastodon.social")}`,
  web: chalk.cyan("https://katallaxie.dev"),
  labelWork: chalk.white.bold("    Work:"),
  labelMastodon: chalk.white.bold("Mastodon:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelWeb: chalk.white.bold("     Web:"),
}

// Preformating strings
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const toot = `${data.labelMastodon}  ${data.mastodon}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`

// Putting it into a variable that we can easily use for boxen
const output = `
${heading}

${working}

${githubing}
${linkedining}
${toot}
${webing}
`

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.yellow(
    boxen(output, {
      padding: 1,
      margin: 1,
      borderStyle: boxen.BorderStyle.Single,
    }),
  ),
)

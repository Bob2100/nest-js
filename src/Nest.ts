import * as chalk from "chalk";
export default class Nest {

}
export function assert(desc: string, condition: boolean) {
  if (condition) {
    console.log(chalk.green(desc, ' passed'));
  } else {
    console.log(chalk.red(desc, ' error'));
  }
}
export function describle(desc: string, callback: () => void) {
  console.log(chalk.blue(desc));
  callback();
}
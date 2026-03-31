const { execSync } = require('child_process');
try {
  console.log(execSync('git add .').toString());
  console.log(execSync('git commit -m "fix: marquee overlap issue on mobile"').toString());
  console.log(execSync('git push origin main').toString());
} catch (e) {
  console.error("Error:");
  if (e.stdout) console.error(e.stdout.toString());
  if (e.stderr) console.error(e.stderr.toString());
}

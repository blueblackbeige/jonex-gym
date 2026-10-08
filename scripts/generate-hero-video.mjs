import { spawnSync } from "node:child_process";
import path from "node:path";
import ffmpeg from "@ffmpeg-installer/ffmpeg";

const projectRoot = process.cwd();
const asset = (name) => path.join(projectRoot, "public", "assets", name);
const output = asset("jonex-gym-hero.mp4");

const sourceImages = [
  asset("facility-hero.jpg"),
  asset("strength.jpg"),
  asset("cardio.jpg"),
  asset("treadmills.jpg"),
];

const frameFilters = [
  "scale=1440:960:force_original_aspect_ratio=increase,crop=1280:720:x='(in_w-out_w)*(t/4)':y='(in_h-out_h)/2',fps=24,setsar=1",
  "scale=1440:960:force_original_aspect_ratio=increase,crop=1280:720:x='(in_w-out_w)*(1-t/4)':y='(in_h-out_h)/2',fps=24,setsar=1",
  "scale=1440:960:force_original_aspect_ratio=increase,crop=1280:720:x='(in_w-out_w)/2':y='(in_h-out_h)*(t/4)',fps=24,setsar=1",
  "scale=1440:960:force_original_aspect_ratio=increase,crop=1280:720:x='(in_w-out_w)*(1-t/4)':y='(in_h-out_h)*(1-t/4)',fps=24,setsar=1",
];

const filterGraph = [
  ...frameFilters.map((filter, index) => `[${index}:v]${filter},fade=t=in:st=0:d=0.35,fade=t=out:st=3.55:d=0.45[v${index}]`),
  "[v0][v1][v2][v3]concat=n=4:v=1:a=0,format=yuv420p[video]",
].join(";");

const args = [
  "-y",
  ...sourceImages.flatMap((source) => ["-loop", "1", "-framerate", "24", "-t", "4", "-i", source]),
  "-filter_complex", filterGraph,
  "-map", "[video]",
  "-an",
  "-c:v", "libx264",
  "-preset", "slow",
  "-crf", "24",
  "-movflags", "+faststart",
  output,
];

const render = spawnSync(ffmpeg.path, args, { stdio: "inherit" });

if (render.status !== 0) {
  process.exit(render.status ?? 1);
}

console.log(`Created ${path.relative(projectRoot, output)}`);

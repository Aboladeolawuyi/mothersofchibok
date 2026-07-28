import { FC } from "react";

type Props = { src: string; muted?: boolean };

const VideoBackground: FC<Props> = ({ src, muted }) => (
<>
<video
autoPlay
loop
muted={muted}
playsInline
className="fixed top-0 left-0 w-full h-full object-cover -z-10"
>
<source src={src} type="video/mp4" />
Your browser does not support the video tag.
</video>
<div className="fixed inset-0 bg-black/40 -z-10" />
</>
);

export default VideoBackground;
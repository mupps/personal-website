export function YouTubeComponent({ videoId }: { videoId: string }) {
  return (
    <iframe
      className="w-full aspect-video rounded-lg"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      title="Project demonstration"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
}

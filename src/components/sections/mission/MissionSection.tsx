import { missionContent } from "./content";
import { MissionStory } from "./MissionStory";

export function MissionSection() {
  const { id, title, image } = missionContent;
  const titleLines = title.split("<br/>") as [string, string];

  return (
    <MissionStory id={id} titleLines={titleLines} image={image} />
  );
}

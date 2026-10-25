import { GroupIndex } from "@/components/group-index";
export const metadata = { title: "Mammals" };
export default function Page() {
  return <GroupIndex group="mammals" title="Mammals" intro="Koalas, kangaroos, platypus, gliders and bats recorded around Inverleigh, from Atlas of Living Australia and iNaturalist records. Most are shy or nocturnal." />;
}

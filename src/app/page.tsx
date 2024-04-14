import styles from "./page.module.css";
import { compileMDX } from "next-mdx-remote/rsc";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Content } from "@/app/content";

export default async function Home() {
  const { content } = await compileMDX({
    source: `<Accordion variant="bordered">
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        content
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
        more content
    </AccordionItem>
</Accordion>`,
    components: {
      Accordion,
      AccordionItem,
    }
  });

  return (
    <main className={styles.main}>
      <Content content={content} />
    </main>
  );
}

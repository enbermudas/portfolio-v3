import { motion } from "framer-motion";

import Card from "./Card";
import Tag from "./Tag";

import type { IProject } from "../data/projects";

// TODO: remove on i18n integration
const getType = (type: string) =>
  ({
    web: "Web",
    library: "Library",
  })[type] ?? "";

const getFeature = (feature: string) =>
  ({
    core: "Core",
    styles: "Styles",
    libraries: "Libraries",
    others: "Others",
  })[feature] ?? "";

export default function Project({
  id,
  type,
  title,
  link,
  description,
  tags,
  features,
}: IProject) {
  return (
    <motion.div
      id={id.toString()}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.05 }}
      whileHover={{ scale: 1.025 }}
      className="mockup-browser mt-2 max-w-full border-[1px] border-white/25 bg-base-300 ring-8 ring-white/10"
    >
      <div className="mockup-browser-toolbar">
        <div className="input">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="link-hover link text-neutral-content"
          >
            {link}
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6 bg-base-200 p-6 md:grid md:grid-cols-12 md:grid-rows-6">
        <Card
          title={getType(type)}
          className="col-span-6 row-span-3"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{title}</h1>

            <div className="flex flex-col gap-2 md:flex-row">
              {!!tags.length &&
                tags.map((tag) => {
                  return (
                    <Tag
                      key={tag}
                      title={tag}
                    />
                  );
                })}
            </div>
          </div>
        </Card>

        <Card
          title="Description"
          className="col-span-6 row-span-3 row-start-4"
        >
          {description}
        </Card>

        <Card
          title="Features"
          className="col-span-6 row-span-6"
        >
          <div className="flex flex-col gap-4">
            {Object.keys(features).map((featureKey) => {
              const featuresCategory =
                features[featureKey as keyof typeof features];

              return (
                <div key={featureKey}>
                  <h2 className="text-lg font-bold">
                    {getFeature(featureKey)}
                  </h2>

                  <p className="text-neutral-content">
                    {!!featuresCategory?.length && featuresCategory.join(", ")}
                  </p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

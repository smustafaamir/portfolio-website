"use client";

import { TypographyH2 } from "@/components/ui/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sectionBlock, sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type StackItem = {
  id: string;
  name: string;
  description: string;
  url: string;
};

type StackCategory = {
  id: string;
  label: string;
  items: StackItem[];
};

const stackCategories: StackCategory[] = [
  {
    id: "ai",
    label: "AI",
    items: [
      {
        id: "chatgpt",
        name: "ChatGPT",
        description: "General-purpose AI assistant",
        url: "https://chat.openai.com",
      },
      {
        id: "gemini",
        name: "Gemini",
        description: "Google's multimodal AI",
        url: "https://gemini.google.com",
      },
      {
        id: "hugging-face",
        name: "Hugging Face",
        description: "Hub for open-source models, datasets, and ML tooling",
        url: "https://huggingface.co",
      },
      {
        id: "langchain",
        name: "LangChain",
        description: "Framework for composing LLM-powered applications",
        url: "https://www.langchain.com",
      },
    ],
  },
  {
    id: "development",
    label: "Development",
    items: [
      {
        id: "jetbrains",
        name: "JetBrains",
        description: "IDE suite for Java, Python, and polyglot development",
        url: "https://www.jetbrains.com",
      },
      {
        id: "vscode",
        name: "Visual Studio Code",
        description: "Lightweight editor for everyday development and extensions",
        url: "https://code.visualstudio.com",
      },
      {
        id: "cursor",
        name: "Cursor",
        description: "AI-native code editor built on VS Code",
        url: "https://cursor.com",
      },
      {
        id: "claude-code",
        name: "Claude Code",
        description: "Agentic coding assistant for terminal and IDE workflows",
        url: "https://claude.com/product/claude-code",
      },
      {
        id: "github",
        name: "GitHub",
        description: "Source control, collaboration, and CI/CD platform",
        url: "https://github.com",
      },
      {
        id: "postman",
        name: "Postman",
        description: "API development, testing, and documentation",
        url: "https://www.postman.com",
      },
      {
        id: "docker",
        name: "Docker",
        description: "Containerization for consistent dev",
        url: "https://www.docker.com",
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        description: "Container orchestration for scalable production workloads",
        url: "https://kubernetes.io",
      },
      {
        id: "jenkins",
        name: "Jenkins",
        description: "Continuous integration and delivery automation",
        url: "https://www.jenkins.io",
      },
      {
        id: "maven",
        name: "Maven",
        description: "Java dependency management and build automation",
        url: "https://maven.apache.org",
      },
      {
        id: "vercel",
        name: "Vercel",
        description: "Frontend deployment and serverless hosting for Next.js",
        url: "https://vercel.com",
      },
      {
        id: "supabase",
        name: "Supabase",
        description: "Open-source backend with Postgres, auth, and realtime",
        url: "https://supabase.com",
      },
      {
        id: "aws",
        name: "AWS",
        description: "Cloud infrastructure for compute",
        url: "https://aws.amazon.com",
      },
      {
        id: "gcp",
        name: "GCP",
        description: "Google Cloud for data engineering and ML workloads",
        url: "https://cloud.google.com",
      },
    ],
  },
  {
    id: "design",
    label: "Design",
    items: [
      {
        id: "figma",
        name: "Figma",
        description: "Collaborative interface design and prototyping",
        url: "https://www.figma.com",
      },
      {
        id: "photoshop",
        name: "Photoshop",
        description: "Raster image editing and visual asset production",
        url: "https://www.adobe.com/products/photoshop.html",
      },
      {
        id: "midjourney",
        name: "Midjourney",
        description: "AI image generation for concepts and visuals",
        url: "https://www.midjourney.com",
      },
      {
        id: "ls-graphics",
        name: "LS Graphics",
        description: "Premium mockup and design asset library",
        url: "https://www.ls.graphics",
      },
    ],
  },
  {
    id: "productivity",
    label: "Productivity",
    items: [
      {
        id: "obsidian",
        name: "Obsidian",
        description: "Markdown knowledge base with linked notes",
        url: "https://obsidian.md",
      },
      {
        id: "linear",
        name: "Linear",
        description: "Issue tracking and product workflow for engineering teams",
        url: "https://linear.app",
      },
    ],
  },
  {
    id: "languages",
    label: "Languages & Frameworks",
    items: [
      {
        id: "nextjs",
        name: "Next.js",
        description: "React framework for full-stack web applications",
        url: "https://nextjs.org",
      },
      {
        id: "react-router",
        name: "React Router",
        description: "Client-side routing for React applications",
        url: "https://reactrouter.com",
      },
      {
        id: "vue",
        name: "Vue",
        description: "Progressive JavaScript framework for building UIs",
        url: "https://vuejs.org",
      },
      {
        id: "nodejs",
        name: "Node.js",
        description: "JavaScript runtime for servers and tooling",
        url: "https://nodejs.org",
      },
      {
        id: "flutter",
        name: "Flutter",
        description: "Cross-platform UI toolkit for mobile and web",
        url: "https://flutter.dev",
      },
      {
        id: "tailwindcss",
        name: "TailwindCSS",
        description: "Utility-first CSS for rapid interface development",
        url: "https://tailwindcss.com",
      },
      {
        id: "python",
        name: "Python",
        description: "Primary language for data engineering and ML pipelines",
        url: "https://www.python.org",
      },
      {
        id: "tensorflow",
        name: "TensorFlow",
        description: "Deep learning framework for production machine learning",
        url: "https://www.tensorflow.org",
      },
      {
        id: "pytorch",
        name: "PyTorch",
        description: "Flexible deep learning framework for research and training",
        url: "https://pytorch.org",
      },
      {
        id: "scikit-learn",
        name: "scikit-learn",
        description: "Classical machine learning library in Python",
        url: "https://scikit-learn.org",
      },
      {
        id: "java",
        name: "Java",
        description: "Enterprise backend development and Spring ecosystems",
        url: "https://dev.java",
      },
      {
        id: "spring-boot",
        name: "Spring Boot",
        description: "Java framework for microservices and REST APIs",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        description: "Relational database for transactional and analytical data",
        url: "https://www.postgresql.org",
      },
      {
        id: "graphql",
        name: "GraphQL",
        description: "Query language for flexible API data fetching",
        url: "https://graphql.org",
      },
    ],
  },
];

const tabTriggerClassName =
  "!h-auto !min-h-0 shrink-0 !flex-none rounded-none border-0 bg-transparent px-0 pb-3 pt-1 text-sm font-medium leading-normal text-muted-foreground shadow-none transition-colors duration-200 ease-out hover:text-ink-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy data-active:bg-transparent data-active:text-ink data-active:shadow-none after:!bottom-0 after:h-px after:bg-ink group-data-[variant=line]/tabs-list:data-active:after:opacity-100 dark:data-active:bg-transparent dark:data-active:text-ink sm:text-base";

const linkClassName =
  "group/link inline-flex items-center gap-1 font-sans text-base font-semibold text-ink transition-colors duration-200 ease-out hover:text-ink-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy md:text-lg";

function StackItemRow({ item }: { item: StackItem }) {
  return (
    <li className="py-4 md:py-5">
      <div className="flex flex-col gap-1.5 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClassName}
        >
          {item.name}
          <ArrowUpRight
            aria-hidden="true"
            className="size-3.5 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:translate-x-px"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <p className="font-sans text-base leading-relaxed text-pretty text-muted-foreground md:max-w-[min(32rem,50%)] md:text-right md:text-lg">
          {item.description}
        </p>
      </div>
    </li>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      className={cn("w-full", sectionX, sectionBlock)}
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <TypographyH2
          id="stack-heading"
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium italic text-ink"
        >
          Stack
        </TypographyH2>

        <Tabs defaultValue="ai" className="mt-8 gap-0 md:mt-10">
          <div className="overflow-x-auto pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <TabsList
              variant="line"
              className="!h-auto min-h-0 w-max max-w-none justify-start gap-x-6 rounded-none bg-transparent p-0 sm:gap-x-8"
            >
              {stackCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={tabTriggerClassName}
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {stackCategories.map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="mt-6 outline-none md:mt-8"
            >
              <ul>
                {category.items.map((item) => (
                  <StackItemRow key={item.id} item={item} />
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

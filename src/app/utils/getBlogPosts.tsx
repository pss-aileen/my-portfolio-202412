import fs from 'fs';
import path from 'path';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMdFiles(dir: string) {
  const files = fs.readdirSync(dir).filter((file) => {
    const ext = path.extname(file);
    return (ext === '.md' || ext === '.mdx') && file !== '.DS_Store';
  });

  return files;
}

function readMdFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const parsedFile = parseFrontmatter(rawContent);
  return parsedFile;
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMdData(dir: string) {
  const mdFiles = getMdFiles(dir);
  const parsedFiles = mdFiles.map((file) => {
    const { metadata, content } = readMdFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });

  // console.log(parsedFiles);

  return parsedFiles;
}

export function getBlogPosts() {
  return getMdData(path.join(process.cwd(), 'blog'));
}

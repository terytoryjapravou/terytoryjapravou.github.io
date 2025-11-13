import * as fs from 'fs/promises';
import * as path from 'path';
import * as crypto from 'crypto';
import type { LoadContext } from '@docusaurus/types';

type findBuiltImageAssetParams = {
  imagePath: string;
  postSource: string;
  context: LoadContext;
  outDir: string;
};

// Helper function to calculate file hash
async function calculateFileHash(filePath: string): Promise<string> {
  const fileBuffer = await fs.readFile(filePath);
  const hashSum = crypto.createHash('md5');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex').substring(0, 8);
}

// Helper function to find built image asset
export const findBuiltImageAsset = async ({
  imagePath,
  postSource,
  context,
  outDir,
}: findBuiltImageAssetParams): Promise<string | undefined> => {
  if (!imagePath || !imagePath.startsWith('./')) {
    return imagePath;
  }

  // Get the directory of the blog post
  const postDir = path.dirname(postSource.replace('@site/', ''));
  const sourceImagePath = path.join(context.siteDir, postDir, imagePath);

  // Check if source image exists
  try {
    await fs.access(sourceImagePath);
  } catch {
    return undefined;
  }

  // Calculate hash of source image
  let sourceHash: string;
  try {
    sourceHash = await calculateFileHash(sourceImagePath);
  } catch {
    return undefined;
  }

  // Find the corresponding built asset
  const assetsDir = path.join(outDir, 'assets', 'images');
  try {
    const assetFiles = await fs.readdir(assetsDir);
    const imageName = path.basename(imagePath, path.extname(imagePath));
    const imageExt = path.extname(imagePath);

    // Look for images with matching name pattern
    const candidates = assetFiles.filter(
      file => file.startsWith(imageName) && file.endsWith(imageExt)
    );

    // If only one candidate, return it
    if (candidates.length === 1) {
      return `/assets/images/${candidates[0]}`;
    }

    // If multiple candidates, verify by content hash
    for (const candidate of candidates) {
      const candidatePath = path.join(assetsDir, candidate);
      try {
        const candidateHash = await calculateFileHash(candidatePath);
        if (candidateHash === sourceHash) {
          return `/assets/images/${candidate}`;
        }
      } catch {
        continue;
      }
    }
  } catch {
    // Assets directory doesn't exist or can't be read
  }

  return undefined;
};

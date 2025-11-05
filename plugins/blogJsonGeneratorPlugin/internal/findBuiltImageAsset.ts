import * as fs from 'fs/promises';
import * as path from 'path';

type findBuiltImageAssetParams = {
  imagePath: string
  postSource: string
  context: LoadContext
  outDir: string
}

// Helper function to find built image asset
export const findBuiltImageAsset = async ({
  imagePath, postSource, context, outDir,
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

  // Find the corresponding built asset
  const assetsDir = path.join(outDir, 'assets', 'images');
  try {
    const assetFiles = await fs.readdir(assetsDir);
    const imageName = path.basename(imagePath, path.extname(imagePath));
    const imageExt = path.extname(imagePath);

    // Look for hashed version of the image
    const builtImage = assetFiles.find(file => file.startsWith(imageName) && file.endsWith(imageExt)
    );

    if (builtImage) {
      return `/assets/images/${builtImage}`;
    }
  } catch {
    // Assets directory doesn't exist or can't be read
  }

  return undefined;
};

import {
  validateDir,
  findAllFiles,
  searchKeywordFromFiles,
  printResults,
} from './utils';

async function search(dir: string, keyword: string) {
  await validateDir(dir);

  const fileList = await findAllFiles(dir);

  const results = await searchKeywordFromFiles(fileList, keyword);

  printResults(results);
}

export default search;
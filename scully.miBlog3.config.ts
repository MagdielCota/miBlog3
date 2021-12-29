import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "miBlog3",
  outDir: './dist/static',
  routes: {
    '/publicaciones/:id': {
      type: 'contentFolder',
      id: {
        folder: "./publicaciones"
      }
    },
  }
};
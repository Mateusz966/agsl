async function getEntities(): Promise<any[]> {
  if (process.env.WEBPACK) {
    const modules = require.context('../entities', true, /\.ts$/);

    return modules
      .keys()
      .map(r => modules(r))
      .flatMap(mod => Object.keys(mod).map(className => mod[className]));
  }

  const promises = fs.readdirSync('../entities').map(file => import(`../entities/${file}`));
  const modules = await Promise.all(promises);

  return modules.flatMap(mod => Object.keys(mod).map(className => mod[className]));
}
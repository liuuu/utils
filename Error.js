function errorInfo() {
  try {
    throw new Error('sdf');
  } catch (e) {
    console.log('e.stack', e.stack);

    console.error(e.name + e.message + e.fileName + e.lineNumber);
  }
}
errorInfo();

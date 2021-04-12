export const sleep = async (ms: number, data = null) => {
  console.log('FAKE API CALL:', data);
  return new Promise(resolve => setTimeout(() => resolve(data), ms));
};

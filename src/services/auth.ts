export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'someToken',
        user: {
          name: 'Guilherme',
          email: 'guilherme@dev.com',
        },
      });
    }, 2000);
  });
}

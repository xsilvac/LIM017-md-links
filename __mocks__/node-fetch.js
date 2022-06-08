const fetch = jest.fn((url) => new Promise((resolve) => {
    const res = { status: 200, ok: ' ok' };
    resolve(res);
  }));
  
  export default fetch;
  
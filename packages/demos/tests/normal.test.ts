import { normalTash } from "../src";

describe('Normal Task resolves', () => {
  it('fetchData Case', async () => {
    // console.log('引入外部文件', XMLHttpRequest);
    const data = await normalTash();
    expect(data.user).toBe('viruni');
  })
})

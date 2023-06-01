import {rest} from 'msw';
export const handlers = [
  rest.get('http://cwknls.localhost/message', (req, res, ctx) => {
    const failCode = req.url.searchParams.get('fail');
    let response = {};
    if (failCode === null) {
      response = {
        id: 1,
        body: 'This is a body',
        title: 'Title',
        userId: 1,
      };
      return res(ctx.status(200), ctx.json(response));
    } else {
      return res(ctx.status(failCode), ctx.json(response));
    }
  }),
];

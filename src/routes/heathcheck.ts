import Router from "koa-router";
const router = new Router();

router.get(`/check`, async ctx => {
  try {
    ctx.body = {
      status: "success",
      message: "The server is up and running"
    };
  } catch (err) {
    console.error(err);
  }
});

export default router;

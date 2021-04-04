import Router from "koa-router";
import { UpdateCartRequest } from "../interfaces/cart.model";
import { addToCart, updateCart } from "../mock/cart.mock";
import { getAllCategories } from "../mock/categories.mock";
import { queryAllProductsofACategory } from "../mock/productcategorymapping.mock";

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

router.get(`/categories`, async ctx => {
  try {
    const categories = getAllCategories();
    ctx.body = {
      status: "success",
      data: categories
    };
  } catch (err) {
    console.error(err);
  }
});

router.get(`/product/:categoryId`, async ctx => {
  try {
    console.log(ctx.params);
    const categoryId = ctx.params.categoryId;
    const products = queryAllProductsofACategory(categoryId);
    ctx.body = {
      status: "success",
      data: products
    };
  } catch (err) {
    console.error(err);
  }
});

router.post(`/cart/add`, async ctx => {
  try {
    const request: UpdateCartRequest = ctx.request.body;
    console.log(request);
    const newCart = addToCart(ctx.request.body);
    ctx.body = { status: "success", data: newCart };
  } catch (err) {
    console.error(err);
  }
});

router.patch(`/cart`, async ctx => {
  try {
    const request: UpdateCartRequest = ctx.request.body;
    console.log(request);
    const response = updateCart(request);
    ctx.body = { status: "success", data: response };
  } catch (err) {
    console.error(err);
    ctx.throw(err);
  }
});

router.delete(`/cart`, async ctx => {
  try {
    const request: UpdateCartRequest = ctx.request.body;
    console.log(request);
    const response = updateCart(request);
    ctx.body = { status: "success", data: response };
  } catch (err) {
    console.error(err);
    ctx.throw(err);
  }
});

router.post(`/checkout`, async ctx => {
  try {
    const request = ctx.request.body;
    console.log(request);
    const response = updateCart(request);
    ctx.body = { status: "success", data: response };
  } catch (err) {
    console.error(err);
    ctx.throw(err);
  }
});

export default router;

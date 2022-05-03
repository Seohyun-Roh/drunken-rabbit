import { Router } from "express";
import { detailService } from "../services/detailService.js";
import { errorMiddleware } from "../middlewares/errorMiddleware.js";
import { login_required } from "../middlewares/login_required.js";
const detailRouter = Router();

detailRouter.get(
  "/detail/:index",
  async (req, res, next) => {
    try {
      const index = req.params.index;
      //index로 search
      const result = await detailService.findByIndex({ index });
      //search한 와인의 similar1 2 3를 가져온다.
      const similarWine = [
        result[0]["similar1"],
        result[0]["similar2"],
        result[0]["similar3"],
      ];
      const similarUrl = await detailService.findSimilarUrl({ similarWine });
      const finalResult = { result: result, similar: similarUrl };
      res.send(finalResult);
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

detailRouter.post(
  "/detail/:index",
  login_required,
  async (req, res) => {
    try {
      const index = req.params.index;
      const { user_id, bool } = req.body;
      console.log(bool);
      const liked = await detailService.clickWine({ index, user_id, bool });
      res.send(liked);
    } catch (e) {
      next();
    }
  },
  errorMiddleware,
);

export { detailRouter };

import { RequestHandler } from "express";
import { findNodeById } from "../service/tree-node";
import { findPath } from "../path-search";

export const getPath: RequestHandler<{
  startId: string;
  endId: string;
  accessibility: string;
}> = async (req, res, next) => {
  const { startId, endId } = req.query;
  const accessibility = req.query.accessibility === "true";
  let start, end;

  try {
    start = await findNodeById(startId);
    end = await findNodeById(endId);
  } catch (e) {
    res.status(400).json({
      message: `Node ${e.id} not in database`,
      error: "nodeNotInDatabase",
    });
    return;
  }
  try {
    const paths = await findPath(start, end, accessibility);
    res.status(200).json(paths);
  } catch (e) {
    res.status(500).json({ message: "Could not find path", error: e.message });
  }
};

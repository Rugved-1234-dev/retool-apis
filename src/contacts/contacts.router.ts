import express, { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { ApiError } from "../utils/ApiError";
import { Contact } from "./contact.interface";
import { getAllContacts, getContact } from "./contacts.service";

export const contactsRouter = express.Router();

contactsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const agentId = req.body.agentId;

    if (!agentId) {
      throw new ApiError(400, "Agent Id is Required");
    }

    const dbResult: Contact[] = await getAllContacts(agentId);
    if (dbResult && dbResult.length > 0) {
      res.json(new ApiResponse(200, dbResult, "Data retrieved successfully"));
    } else {
      throw new ApiError(404, "No Data Found");
    }
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
  }
});

contactsRouter.post("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const agentId = req.body.agentId;
    if (!agentId) {
      throw new ApiError(400, "Agent Id is Required");
    }
    if (!id) {
      throw new ApiError(400, "Id is Required");
    }

    const dbResult: Contact = await getContact(id, agentId);
    console.log(dbResult);
    if (dbResult) {
      res.json(new ApiResponse(200, [dbResult], "Data retrieved successfully"));
    } else {
      throw new ApiError(404, "No Data Found");
    }
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json(new ApiError(500, "Internal Server Error"));
    }
  }
});

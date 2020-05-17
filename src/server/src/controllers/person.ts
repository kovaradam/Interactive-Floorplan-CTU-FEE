import { RequestHandler } from "express";
import Person from "../model/person";
import usermap from "../utils/usermap-broker";
import {
  getPersonFromUsermap,
} from "../service/person";

export const getPerson: RequestHandler<{ username: string }> = async (
  req,
  res,
  next
) => {
  const username = req.params.username;

  getPersonFromUsermap(username).then(r => {
    if (r.error) {
      usermap.getAccessToken().then(getPerson(req, res, next));
      return;
    }
    if (r.errno == "ENOTFOUND") {
      res.status(500).json({ message: "No response from usermap", error:"noUsermapApiResponse" });
      return;
    }

    if (r.length === 0) {
      res.status(404).json({ message: "No person found" , error:"noPersonFound"});
      return;
    }

    r = r.filter((p: Person) => p.rooms.length > 0);

    if (r.length === 0) {
      res.status(404).json({ message: "No such person with rooms found" , error:"noPersonWithRooms"});
      return;
    }

    let responsePayload: Person[] = [];
    r.forEach((p: Person) => {
      const newPerson = new Person(p.fullName, p.username, p.rooms);
      //createPerson(newPerson);
      responsePayload.push(newPerson);
    });

    res.status(200).json(responsePayload!);
  }).catch((e: any) => {
    // console.log(e)
    res.status(404).json({error:"noPersonFound"})
  });
};

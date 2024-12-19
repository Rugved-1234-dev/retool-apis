import { Contact } from "./contact.interface";
import { pool } from "../config/database";

const TABLE_NAME: string = "contact";

export const getAllContacts = async (agentId: string) => {
  const queryString = `SELECT * FROM ${TABLE_NAME} WHERE agent_id = ?`;
  const values = [agentId];
  let [records] = await pool.query(queryString, values);
  return records as Contact[];
};

export const getContact = async (id: string, agentId: string) => {
  const queryString = `SELECT * FROM ${TABLE_NAME} WHERE id = ? AND agent_id=?`;
  const values = [id, agentId];
  let [records] = await pool.query(queryString, values);
  return records[0] as Contact;
};

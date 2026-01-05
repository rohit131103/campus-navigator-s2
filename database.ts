import path from "path";
import sqlite3 from "sqlite3";

// Enable verbose mode (optional)
sqlite3.verbose();

// Type definitions
export interface Personnel {
  id?: number;
  firebase_id: string;
  name: string;
  office?: string;
  floor?: number;
  building?: string;
  lat?: number;
  lng?: number;
}

// Resolve DB path
const dbPath = path.resolve(__dirname, "campus.db");

// Create DB instance
export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection error:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Initialize schema
export const initializeDB = (): void => {
  db.serialize(() => {
    db.run(
      `
      CREATE TABLE IF NOT EXISTS personnel (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firebase_id TEXT UNIQUE,
        name TEXT NOT NULL,
        office TEXT,
        floor INTEGER,
        building TEXT,
        lat REAL,
        lng REAL
      )
    `,
      (err) => {
        if (err) {
          console.error("Table creation error:", err.message);
        } else {
          console.log("Personnel table ready.");
        }
      }
    );
  });
};

// Insert one person
export const addPersonnel = (person: Personnel): void => {
  const { firebase_id, name, office, floor, building, lat, lng } = person;

  const sql = `
    INSERT INTO personnel (
      firebase_id, name, office, floor, building, lat, lng
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [firebase_id, name, office, floor, building, lat, lng],
    function (err) {
      if (err) {
        console.error("Insert error:", err.message);
        return;
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
};

// Display all personnel
export const displayPersonnel = (): void => {
  const query = `SELECT * FROM personnel`;

  db.all<Personnel>(query, [], (err, rows) => {
    if (err) {
      console.error("Error reading data:", err.message);
      return;
    }

    console.log("\n--- CAMPUS PERSONNEL DATA ---");
    if (rows.length === 0) {
      console.log("No data found in the table.");
    } else {
      console.table(rows);
    }
  });
};

// Find person by name (returns Promise)
export const findPerson = (name: string): Promise<Personnel[]> => {
  const query = `SELECT name, office, floor, building FROM personnel WHERE name LIKE ?`;

  return new Promise((resolve, reject) => {
    db.all<Personnel>(query, [`%${name}%`], (err, rows) => {
      if (err) {
        console.error("findPerson error:", err.message);
        reject(err);
        return;
      }
      console.log("Person Results:", rows);
      resolve(rows);
    });
  });
};

// Find office by name (returns Promise)
export const findOffice = (officeName: string): Promise<Personnel[]> => {
  const query = `SELECT office, floor, building FROM personnel WHERE office LIKE ?`;

  return new Promise((resolve, reject) => {
    db.all<Personnel>(query, [`%${officeName}%`], (err, rows) => {
      if (err) {
        console.error("findOffice error:", err.message);
        reject(err);
        return;
      }
      console.log("Office Results:", rows);
      resolve(rows);
    });
  });
};
import { initializeDB, addPersonnel, findPerson } from "./db";

initializeDB();

addPersonnel({
  firebase_id: "abc123",
  name: "Dean Example",
  office: "304",
  floor: 2,
  building: "Admin Block",
  lat: 0,
  lng: 0,
});

(async () => {
  const dean = await findPerson("Dean");
  console.log(dean);
})();

const express = require('express')
require("dotenv").config();
const app = express()

const cors = require('cors')





app.use(cors(
  {
    origin: ["http://localhost:5173", "https://book-shop-frontend-bice.vercel.app"],
  }
));
app.use(express.json());





const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//mongoDB connection
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.DATA_URI;
if (!uri) {
  console.error("ERROR: DATA_URI is missing from .env file!");
  process.exit(1);
}


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
let connection = false;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    //CREATE A COLLECTION OF DATABASE 
    const bookCollections = client.db("BookInventory").collection("books");
    //insert a book to the post methos 
    app.post("/uploadBook", async (req, res) => {
      const data = req.body;
      if (data.price && Number(data.price) < 0) {
        return res.status(400).send({ message: "Price cannot be negative" });
      }
      const result = await bookCollections.insertOne(data);
      res.send(result);
    });



    // Your PATCH route for updating a book
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;  // Get the book id from the URL
      const updateBookData = req.body;  // Get the updated book data from the body
      if (updateBookData.price && Number(updateBookData.price) < 0) {
        return res.status(400).send({ message: "Price cannot be negative" });
      }
      const filter = { _id: new ObjectId(id) };  // Convert id to ObjectId
      const updateDoc = {
        $set: {
          ...updateBookData,  // Set updated values
        },
      };

      try {
        // Perform the update operation
        const result = await bookCollections.updateOne(filter, updateDoc);

        // If no matching document is found
        if (result.matchedCount === 0) {
          return res.status(404).send({ message: "Book not found" });
        }

        // If the update was successful, return a success response
        res.send({ message: "Book updated successfully", updatedBook: result });
      } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).send({ message: "Failed to update the book", error: err });
      }
    });




    app.delete("/book/delete/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await bookCollections.deleteOne(filter);
      res.send(result);
    })


    app.get("/getbooks", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category }
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    })

    //to get single book fdata 
    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Validate ObjectId format
        if (!ObjectId.isValid(id)) {
          return res.status(400).send({ error: "Invalid book ID format" });
        }

        const filter = { _id: new ObjectId(id) }; // Convert string to ObjectId
        const result = await bookCollections.findOne(filter);

        if (!result) {
          return res.status(404).send({ error: "Book not found" });
        }

        res.send(result);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Server error" });
      }
    });






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    connection = true; // Set connection to true after successful connection
    if (process.env.NODE_ENV !== 'production') {
      app.listen(port, () => {
        console.log(`app is running in port : ${port}`)
      })
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

module.exports = app;











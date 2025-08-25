const Person = require("./Person");

// GET all people
exports.getAllPersons = async (req, res) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create person
exports.createPerson = async (req, res) => {
  try {
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update person
exports.updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPerson)
      return res.status(404).json({ error: "Person not found" });
    res.json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE person
exports.deletePerson = async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson)
      return res.status(404).json({ error: "Person not found" });
    res.json({ message: "Person deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
